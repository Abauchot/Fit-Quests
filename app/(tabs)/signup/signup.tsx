import { UserProfile } from "@/src/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { v4 as uuidv4 } from 'uuid';



export default function SignupScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        if (!username || !password) {
            setError("No field can be empty");
            return;
        }
            const user: UserProfile = {
                id: uuidv4(),
                username,
                password,
                favoriteClass: "Guerrier", 
                healthFlags: { hasKneeIssues: false, hasShoulderIssues: false },
                totalXP: 0,
                level: 1,
                createdAt: new Date().toISOString(),
                jwt: "",
            };
            await AsyncStorage.setItem(
                "fit_quest_user_profile",
                JSON.stringify(user)
            );
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Created your account</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{ borderWidth: 1, margin: 10, padding: 8, width: 200 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, margin: 10, padding: 8, width: 200 }}
            />
            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
}