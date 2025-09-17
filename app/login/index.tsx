import { COLORS } from '@/constants/Colors';
import { useAuth } from '@/src/hooks/useAuth';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
  const { login, dataCorrupted, clearDataCorruptedFlag } = useAuth();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async () => {
    if (!pin) {
      setError("Le PIN est requis");
      return;
    }

    if (pin.length < 6 || pin.length > 8) {
      setError("Le PIN doit contenir entre 6 et 8 chiffres");
      return;
    }

    if (!/^\d+$/.test(pin)) {
      setError("Le PIN ne doit contenir que des chiffres");
      return;
    }

    setLoginLoading(true);
    setError("");
    
    try {
      const success = await login(pin);
      if (success) {
        setPin("");
        Alert.alert("Succès", "Connexion réussie !");
        // Rediriger vers l'onglet profile après connexion réussie
        router.replace('/(tabs)/profile');
      } else {
        setError("PIN incorrect");
      }
    } catch (error) {
      setError("Erreur lors de la connexion");
      console.error(error);
    } finally {
      setLoginLoading(false);
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
        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.subtitle}>Entrez votre PIN pour accéder à votre profil</Text>
        
        {dataCorrupted && (
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>⚠️ Données restaurées</Text>
            <Text style={styles.warningText}>
              Vos données ont été automatiquement nettoyées en raison d'une corruption. 
              Vous devrez créer un nouveau compte.
            </Text>
            <TouchableOpacity 
              style={styles.warningButton} 
              onPress={() => {
                clearDataCorruptedFlag();
                router.push('/signup');
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.warningButtonText}>Créer un nouveau compte</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <View style={styles.card}>
          <TextInput
            placeholder="PIN (6-8 chiffres)"
            value={pin}
            onChangeText={setPin}
            secureTextEntry
            keyboardType="numeric"
            maxLength={8}
            style={styles.input}
            editable={!loginLoading}
            placeholderTextColor={COLORS.GRAY_MEDIUM}
          />
          
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          
          <TouchableOpacity 
            style={[styles.loginButton, loginLoading && styles.disabledButton]} 
            onPress={handleLogin}
            disabled={loginLoading}
            activeOpacity={0.8}
          >
            <Text style={styles.loginText}>
              {loginLoading ? "Connexion..." : "Se connecter"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signupLinkButton} 
            onPress={() => {
              clearDataCorruptedFlag();
              router.push('/signup');
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.signupLinkText}>
              Pas encore de compte ? Créer un compte
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
    maxWidth: 350,
    shadowColor: COLORS.DEEP_PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.BRIGHT_RED,
    marginBottom: 15,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_LIGHT,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: COLORS.GRAY_LIGHT,
    color: COLORS.DEEP_PURPLE,
  },
  loginButton: {
    backgroundColor: COLORS.BRIGHT_RED,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: COLORS.WINE_RED,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  loginText: {
    color: COLORS.CREAM,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  disabledButton: {
    backgroundColor: COLORS.GRAY_MEDIUM,
    opacity: 0.6,
  },
  signupLinkButton: {
    padding: 10,
    alignItems: 'center',
  },
  signupLinkText: {
    color: COLORS.DEEP_PURPLE,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  // Warning styles for corrupted data
  warningBox: {
    backgroundColor: COLORS.VIBRANT_ORANGE,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    width: '90%',
    maxWidth: 350,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    color: COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 20,
  },
  warningButton: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  warningButtonText: {
    color: COLORS.VIBRANT_ORANGE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});