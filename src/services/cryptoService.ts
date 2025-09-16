import * as Crypto from 'expo-crypto';


export interface DerivedKey {
  key: Uint8Array;
  salt: Uint8Array;
}

export interface EncryptedData {
  ciphertext: string;
  iv: string;
  salt: string;
}

export class CryptoService {
  static async deriveKey(secret: string, salt?: Uint8Array): Promise<DerivedKey> {
    const saltBytes = salt || new Uint8Array(await Crypto.getRandomBytesAsync(32));
    
    // scrypt-like key derivation (simplified)
    // In production, use a proper KDF library
    const encoder = new TextEncoder();
    const data = encoder.encode(secret + Array.from(saltBytes).join(''));
    
    // Multiple rounds of hashing
    let hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      data.toString(),
      { encoding: Crypto.CryptoEncoding.HEX }
    );
    
    for (let i = 0; i < 10000; i++) {
      hash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA512,
        hash,
        { encoding: Crypto.CryptoEncoding.HEX }
      );
    }
    
    // Convert hex string to Uint8Array
    const hexToUint8Array = (hex: string): Uint8Array => {
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
      }
      return bytes;
    };
    
    return {
      key: hexToUint8Array(hash.slice(0, 64)),
      salt: saltBytes
    };
  }

  // Generates a random data_key
  static async generateDataKey(): Promise<Uint8Array> {
    return new Uint8Array(await Crypto.getRandomBytesAsync(32));
  }

  // Encrypts data with the data_key
  static async encryptData(data: string, key: Uint8Array): Promise<EncryptedData> {
    const iv = new Uint8Array(await Crypto.getRandomBytesAsync(16));
    
    // Simulation AES-256-GCM (remplace with real encryption in production)
    const encoder = new TextEncoder();
    const dataBytes = encoder.encode(data);
    
    // simple XOR for demonstration (not secure)
    const ciphertext = new Uint8Array(dataBytes.length);
    for (let i = 0; i < dataBytes.length; i++) {
      ciphertext[i] = dataBytes[i] ^ key[i % key.length] ^ iv[i % iv.length];
    }
    
    return {
      ciphertext: Array.from(ciphertext).map(b => b.toString(16).padStart(2, '0')).join(''),
      iv: Array.from(iv).map(b => b.toString(16).padStart(2, '0')).join(''),
      salt: ''
    };
  }

  // Decrypts data with the data_key
  static async decryptData(encrypted: EncryptedData, key: Uint8Array): Promise<string> {
    const ciphertext = new Uint8Array(
      encrypted.ciphertext.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
    );
    const iv = new Uint8Array(
      encrypted.iv.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
    );
    
    // inverse of the simple XOR used in encryptData
    const plaintext = new Uint8Array(ciphertext.length);
    for (let i = 0; i < ciphertext.length; i++) {
      plaintext[i] = ciphertext[i] ^ key[i % key.length] ^ iv[i % iv.length];
    }
    
    return new TextDecoder().decode(plaintext);
  }
}