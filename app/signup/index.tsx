import { KeyService } from "@/src/services/keyService";
import { StorageService } from "@/src/services/storage";
import { UserProfile } from "@/src/types/user";
import * as Crypto from 'expo-crypto';
import { router } from 'expo-router';
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function SignupScreen() {
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
            setError("PIN must contain only numbers");
            return;
        }

        if (pin !== confirmPin) {
            setError("PINs do not match");
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
                favoriteClass: "Guerrier", 
                healthFlags: { hasKneeIssues: false, hasShoulderIssues: false },
                totalXP: 0,
                level: 1,
                createdAt: new Date().toISOString(),
            };

            // Save the user profile securely
            await StorageService.saveUserProfile(user);
            
            Alert.alert("success", "Your aventure can start !", [
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 30 }}>Create your account</Text>
            
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{ borderWidth: 1, margin: 10, padding: 12, width: 250, borderRadius: 8 }}
            />
            
            <TextInput
                placeholder="PIN (6-8 digits)"
                value={pin}
                onChangeText={setPin}
                secureTextEntry
                keyboardType="numeric"
                maxLength={8}
                style={{ borderWidth: 1, margin: 10, padding: 12, width: 250, borderRadius: 8 }}
            />
            
            <TextInput
                placeholder="Confirm PIN"
                value={confirmPin}
                onChangeText={setConfirmPin}
                secureTextEntry
                keyboardType="numeric"
                maxLength={8}
                style={{ borderWidth: 1, margin: 10, padding: 12, width: 250, borderRadius: 8 }}
            />
            
            {error ? <Text style={{ color: "red", marginVertical: 10 }}>{error}</Text> : null}
            
            <Button 
                title={loading ? "Creating..." : "Create Account"} 
                onPress={handleSignup}
                disabled={loading}
            />
        </View>
    );
}