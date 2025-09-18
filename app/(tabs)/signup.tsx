import { COLORS } from '@/constants/Colors';
import { useAuth } from "@/src/hooks/useAuth";
import { KeyService } from "@/src/services/keyService";
import { StorageService } from "@/src/services/storage";
import { UserProfile } from "@/src/types/user";
import * as Crypto from 'expo-crypto';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupTab() {
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { checkAuthStatus } = useAuth();

    const handleSignup = async () => {
        if (!username || !pin || !confirmPin) {
            setError("All fields are required");
            return;
        }

        if (pin.length < 6 || pin.length > 8) {
            setError("PIN must be between 6 and 8 digits");
            return;
        }

        if (!/^\d+$/.test(pin)) {
            setError("Le PIN ne doit contenir que des chiffres");
            return;
        }

        if (pin !== confirmPin) {
            setError("Les PINs ne correspondent pas");
            return;
        }

        setLoading(true);
        try {
            // Initialize the crypto system
            await KeyService.initializeAccount(pin);

            // Create the user profile
            const user: UserProfile = {
                id: Crypto.randomUUID(),
                username,
                favoriteClass: "Fighter", 
                healthFlags: { hasKneeIssues: false, hasShoulderIssues: false },
                totalXP: 0,
                level: 1,
                createdAt: new Date().toISOString(),
            };

            // Save the user profile securely
            await StorageService.saveUserProfile(user);
            
            // Refresh authentication state
            await checkAuthStatus();
            
            Alert.alert("Success", "Your adventure can begin!", [
                { text: "OK", onPress: () => router.replace('/') }
            ]);
        } catch (error) {
            setError("Error while creating account");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LinearGradient
            colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Create your account</Text>
                <Text style={styles.subtitle}>Commencez votre aventure !</Text>
                
                <View style={styles.card}>
                    <TextInput
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        editable={!loading}
                        placeholderTextColor={COLORS.GRAY_MEDIUM}
                    />
                    
                    <TextInput
                        placeholder="PIN (6-8 chiffres)"
                        value={pin}
                        onChangeText={setPin}
                        secureTextEntry
                        keyboardType="numeric"
                        maxLength={8}
                        style={styles.input}
                        editable={!loading}
                        placeholderTextColor={COLORS.GRAY_MEDIUM}
                    />
                    
                    <TextInput
                        placeholder="Confirmer le PIN"
                        value={confirmPin}
                        onChangeText={setConfirmPin}
                        secureTextEntry
                        keyboardType="numeric"
                        maxLength={8}
                        style={styles.input}
                        editable={!loading}
                        placeholderTextColor={COLORS.GRAY_MEDIUM}
                    />
                    
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    
                    <TouchableOpacity 
                        style={[styles.button, loading && styles.disabledButton]} 
                        onPress={handleSignup}
                        disabled={loading}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? "Creating..." : "Create Account"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.CREAM + 'CC',
        margin: 20,
        borderRadius: 24,
        shadowColor: COLORS.DARK_PURPLE,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.BRIGHT_RED,
        textAlign: 'center',
        letterSpacing: 1.5,
    },
    subtitle: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        color: COLORS.DARK_PURPLE,
        marginBottom: 30,
    },
    card: {
        backgroundColor: COLORS.WHITE,
        padding: 30,
        borderRadius: 16,
        width: '90%',
        maxWidth: 320,
        shadowColor: COLORS.DEEP_PURPLE,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.GRAY_LIGHT,
        marginBottom: 15,
        padding: 15,
        borderRadius: 12,
        fontSize: 16,
        backgroundColor: COLORS.GRAY_LIGHT,
        color: COLORS.DEEP_PURPLE,
    },
    button: {
        backgroundColor: COLORS.BRIGHT_RED,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 15,
        shadowColor: COLORS.WINE_RED,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    buttonText: {
        color: COLORS.CREAM,
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
    },
    disabledButton: {
        backgroundColor: COLORS.GRAY_MEDIUM,
        opacity: 0.6,
    },
    errorText: {
        color: COLORS.BRIGHT_RED,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
    },
});