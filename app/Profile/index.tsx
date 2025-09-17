import { COLORS } from '@/constants/Colors';
import { useAuth } from '@/src/hooks/useAuth';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const { user, logout, isLoading } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { 
          text: 'Déconnexion', 
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/');
          }
        }
      ]
    );
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  if (isLoading) {
    return (
      <LinearGradient
        colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.loadingText}>Chargement...</Text>
        </View>
      </LinearGradient>
    );
  }

  if (!user) {
    return (
      <LinearGradient
        colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.errorText}>Erreur: Utilisateur non trouvé</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <FontAwesome name="arrow-left" size={20} color={COLORS.DEEP_PURPLE} />
          <Text style={styles.backText}>Retour</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Profil</Text>
        
        <View style={styles.card}>
          <View style={styles.userInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Nom d'utilisateur:</Text>
              <Text style={styles.value}>{user.username}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>Classe favorite:</Text>
              <Text style={styles.value}>{user.favoriteClass}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>Niveau:</Text>
              <Text style={styles.value}>{user.level}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>XP Total:</Text>
              <Text style={styles.value}>{user.totalXP}</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>Déconnexion</Text>
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
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    shadowColor: COLORS.DEEP_PURPLE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: COLORS.DEEP_PURPLE,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.BRIGHT_RED,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    padding: 30,
    borderRadius: 16,
    width: '100%',
    maxWidth: 350,
    shadowColor: COLORS.DEEP_PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  userInfo: {
    marginBottom: 25,
  },
  infoRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.DARK_PURPLE,
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: COLORS.DEEP_PURPLE,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: COLORS.BRIGHT_RED,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: COLORS.WINE_RED,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  logoutText: {
    color: COLORS.CREAM,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.DARK_PURPLE,
    fontWeight: '500',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.BRIGHT_RED,
    fontWeight: '500',
  },
});