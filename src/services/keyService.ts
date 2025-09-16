import AsyncStorage from "@react-native-async-storage/async-storage";
import { CryptoService, EncryptedData } from "./cryptoService";

const STORAGE_KEYS = {
  ENCRYPTED_DATA_KEY: "encrypted_data_key",
  KDF_SALT: "kdf_salt",
  FAILED_ATTEMPTS: "failed_attempts",
  LOCKED_UNTIL: "locked_until"
} as const;

export class KeyService {
    private static dataKey: Uint8Array | null = null;
    private static readonly MAX_ATTEMPTS = 5;
    private static readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

    // PIN / passphrase setup
    static async initializeAccount(secret: string): Promise<void> {
        // key derivation
        const {key: masterKey, salt} = await CryptoService.deriveKey(secret);
        
        // Generate data_key
        const dataKey = await CryptoService.generateDataKey();
        
        // data_key encryption
        const encryptedDataKey = await CryptoService.encryptData(
            Array.from(dataKey).map(b => b.toString(16).padStart(2, '0')).join(''),
            masterKey
        );

        // Store encrypted data_key and salt
        await AsyncStorage.multiSet([
            [STORAGE_KEYS.ENCRYPTED_DATA_KEY, JSON.stringify(encryptedDataKey)],
            [STORAGE_KEYS.KDF_SALT, Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('')]
        ]);
        
        this.dataKey = dataKey;
    }

    // Authenticates with PIN/passphrase
    static async authenticate(secret: string): Promise<boolean> {
        if (await this.isLocked()) {
            throw new Error('Account temporarily locked due to failed attempts');
        }

        try {
            // Retrieve salt and encrypted data_key
            const [encryptedDataKeyStr, saltStr] = await AsyncStorage.multiGet([
                STORAGE_KEYS.ENCRYPTED_DATA_KEY,
                STORAGE_KEYS.KDF_SALT
            ]);

            if (!encryptedDataKeyStr[1] || !saltStr[1]) {
                throw new Error('Account not initialized');
            }

            const encryptedDataKey: EncryptedData = JSON.parse(encryptedDataKeyStr[1]);
            const salt = new Uint8Array(
                saltStr[1].match(/.{2}/g)!.map(byte => parseInt(byte, 16))
            );

            // Re-derive master key
            const { key: masterKey } = await CryptoService.deriveKey(secret, salt);

            // Decrypt data_key
            const dataKeyHex = await CryptoService.decryptData(encryptedDataKey, masterKey);
            this.dataKey = new Uint8Array(
                dataKeyHex.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
            );

            await this.resetFailedAttempts();
            return true;
        } catch (error) {
            await this.incrementFailedAttempts();
            return false;
        }
    }

    // get data_key (throws if not authenticated)
    static getDataKey(): Uint8Array {
        if (!this.dataKey) {
            throw new Error('Not authenticated');
        }
        return this.dataKey;
    }

    //  Check if account is locked
    private static async isLocked(): Promise<boolean> {
        const lockedUntilStr = await AsyncStorage.getItem(STORAGE_KEYS.LOCKED_UNTIL);
        if (!lockedUntilStr) return false;
        
        const lockedUntil = parseInt(lockedUntilStr);
        return Date.now() < lockedUntil;
    }

    // increment failed attempts and lock if necessary
    private static async incrementFailedAttempts(): Promise<void> {
        const attemptsStr = await AsyncStorage.getItem(STORAGE_KEYS.FAILED_ATTEMPTS);
        const attempts = attemptsStr ? parseInt(attemptsStr) + 1 : 1;
        
        await AsyncStorage.setItem(STORAGE_KEYS.FAILED_ATTEMPTS, attempts.toString());
        
        if (attempts >= this.MAX_ATTEMPTS) {
            const lockUntil = Date.now() + this.LOCKOUT_DURATION;
            await AsyncStorage.setItem(STORAGE_KEYS.LOCKED_UNTIL, lockUntil.toString());
        }
    }

    // reset failed attempts
    private static async resetFailedAttempts(): Promise<void> {
        await AsyncStorage.multiRemove([
            STORAGE_KEYS.FAILED_ATTEMPTS,
            STORAGE_KEYS.LOCKED_UNTIL
        ]);
    }

    // Logout (clears data_key from memory)
    static logout(): void {
        this.dataKey = null;
    }
}