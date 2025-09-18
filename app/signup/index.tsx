import { COLORS } from '@/constants/Colors';
import { useAuth } from "@/src/hooks/useAuth";
import { KeyService } from "@/src/services/keyService";
import { StorageService } from "@/src/services/storage";
import { DnDClass } from "@/src/types";
import { UserProfile } from "@/src/types/user";
import * as Crypto from 'expo-crypto';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from "react";
import { Alert, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
    const [username, setUsername] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [selectedClass, setSelectedClass] = useState<DnDClass>("Fighter");
    const [showClassModal, setShowClassModal] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { checkAuthStatus } = useAuth();

    const dndClasses: DnDClass[] = [
        'Fighter', 'Monk', 'Rogue', 'Bard', 'Cleric', 
        'Druid', 'Wizard', 'Paladin', 'Ranger', 'Sorcerer', 
        'Warlock', 'Barbarian'
    ];

    const classDescriptions: Record<DnDClass, string> = {
        'Fighter': 'Strength and physical endurance',
        'Monk': 'Agility and spiritual balance',
        'Rogue': 'Flexibility and precision',
        'Bard': 'Charisma and versatility',
        'Cleric': 'Mental strength and healing',
        'Druid': 'Harmony with nature',
        'Wizard': 'Intelligence and strategy',
        'Paladin': 'Strength and devotion',
        'Ranger': 'Endurance and survival',
        'Sorcerer': 'Innate power',
        'Warlock': 'Mysterious power',
        'Barbarian': 'Brute force and rage'
    };

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
                favoriteClass: selectedClass, 
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
                <Text style={styles.subtitle}>Start your adventure!</Text>
                
                <View style={styles.card}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        editable={!loading}
                        placeholderTextColor={COLORS.GRAY_MEDIUM}
                    />
                    
                    <TextInput
                        placeholder="PIN (6-8 digits)"
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
                        placeholder="Confirm PIN"
                        value={confirmPin}
                        onChangeText={setConfirmPin}
                        secureTextEntry
                        keyboardType="numeric"
                        maxLength={8}
                        style={styles.input}
                        editable={!loading}
                        placeholderTextColor={COLORS.GRAY_MEDIUM}
                    />

                    <TouchableOpacity
                        style={styles.classSelector}
                        onPress={() => setShowClassModal(true)}
                        disabled={loading}
                    >
                        <Text style={styles.classSelectorLabel}>Favorite Class</Text>
                        <Text style={styles.classSelectorValue}>{selectedClass}</Text>
                        <Text style={styles.classSelectorDescription}>
                            {classDescriptions[selectedClass]}
                        </Text>
                    </TouchableOpacity>
                    
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

                <Modal
                    visible={showClassModal}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setShowClassModal(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Choose your favorite class</Text>
                            <ScrollView style={styles.classList}>
                                {dndClasses.map((dndClass) => (
                                    <TouchableOpacity
                                        key={dndClass}
                                        style={[
                                            styles.classOption,
                                            selectedClass === dndClass && styles.selectedClassOption
                                        ]}
                                        onPress={() => {
                                            setSelectedClass(dndClass);
                                            setShowClassModal(false);
                                        }}
                                    >
                                        <Text style={[
                                            styles.classOptionName,
                                            selectedClass === dndClass && styles.selectedClassOptionName
                                        ]}>
                                            {dndClass}
                                        </Text>
                                        <Text style={[
                                            styles.classOptionDescription,
                                            selectedClass === dndClass && styles.selectedClassOptionDescription
                                        ]}>
                                            {classDescriptions[dndClass]}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <TouchableOpacity
                                style={styles.modalCloseButton}
                                onPress={() => setShowClassModal(false)}
                            >
                                <Text style={styles.modalCloseButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    classSelector: {
        borderWidth: 1,
        borderColor: COLORS.GRAY_LIGHT,
        marginBottom: 15,
        padding: 15,
        borderRadius: 12,
        backgroundColor: COLORS.GRAY_LIGHT,
    },
    classSelectorLabel: {
        fontSize: 12,
        color: COLORS.GRAY_MEDIUM,
        marginBottom: 4,
        fontWeight: '500',
    },
    classSelectorValue: {
        fontSize: 16,
        color: COLORS.DEEP_PURPLE,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    classSelectorDescription: {
        fontSize: 12,
        color: COLORS.GRAY_MEDIUM,
        fontStyle: 'italic',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: COLORS.WHITE,
        margin: 20,
        borderRadius: 16,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
        shadowColor: COLORS.DEEP_PURPLE,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 8,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.DEEP_PURPLE,
        textAlign: 'center',
        marginBottom: 20,
    },
    classList: {
        maxHeight: 300,
    },
    classOption: {
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: COLORS.GRAY_LIGHT,
        borderWidth: 1,
        borderColor: COLORS.GRAY_LIGHT,
    },
    selectedClassOption: {
        backgroundColor: COLORS.VIBRANT_ORANGE + '20',
        borderColor: COLORS.VIBRANT_ORANGE,
    },
    classOptionName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.DEEP_PURPLE,
        marginBottom: 4,
    },
    selectedClassOptionName: {
        color: COLORS.VIBRANT_ORANGE,
    },
    classOptionDescription: {
        fontSize: 12,
        color: COLORS.GRAY_MEDIUM,
        fontStyle: 'italic',
    },
    selectedClassOptionDescription: {
        color: COLORS.DEEP_PURPLE,
    },
    modalCloseButton: {
        backgroundColor: COLORS.BRIGHT_RED,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    modalCloseButtonText: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },
});