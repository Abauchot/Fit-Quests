import { COLORS } from '@/constants/Colors';
import { useAuth } from '@/src/hooks/useAuth';
import { StorageService } from '@/src/services/storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileTab() {
  const { user, logout, isLoading, isAuthenticated } = useAuth();

  // Rediriger vers la page de login si l'utilisateur n'est pas authentifié
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated]);

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
            router.replace('/login');
          }
        }
      ]
    );
  };

  const handleDebugReset = () => {
    if (!__DEV__) return; // Only in development
    
    Alert.alert(
      'Debug: Reset App',
      'Ceci va supprimer toutes les données de l\'app. Continuer ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { 
          text: 'Reset', 
          style: 'destructive',
          onPress: async () => {
            try {
              await StorageService.emergencyReset();
              Alert.alert('Reset Completed', 'L\'app a été réinitialisée. Redémarrez l\'app.');
            } catch (error) {
              Alert.alert('Error', 'Erreur lors du reset: ' + (error instanceof Error ? error.message : 'Unknown error'));
            }
          }
        }
      ]
    );
  };

  const handleStorageCheck = async () => {
    if (!__DEV__) return; // Only in development
    
    try {
      await StorageService.checkStorageHealth();
      const cleanupResult = await StorageService.clearCorruptedData();
      
      const message = cleanupResult.cleaned.length > 0 
        ? `Nettoyage terminé. ${cleanupResult.cleaned.length} entrées supprimées: ${cleanupResult.cleaned.join(', ')}`
        : 'Aucune donnée corrompue trouvée.';
        
      Alert.alert('Storage Check', message);
    } catch (error) {
      Alert.alert('Error', 'Erreur: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  const handleLogAllUsers = async () => {
    if (!__DEV__) return; // Only in development
    
    try {
      await StorageService.logAllUsers();
      Alert.alert('Users Logged', 'Toutes les données utilisateur ont été loggées. Voir la console pour les détails.');
    } catch (error) {
      Alert.alert('Error', 'Erreur: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  // Display a loading screen while checking auth status
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

  // Si l'utilisateur n'est pas authentifié, il sera redirigé par useEffect
  if (!isAuthenticated || !user) {
    return null; // Ne rien afficher, la redirection est en cours
  }

  // À ce point, nous savons que user existe
  const currentUser = user;

  // Display user profile
  return (
    <LinearGradient
      colors={[COLORS.DEEP_PURPLE, COLORS.VIBRANT_ORANGE]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Profil</Text>
        
        <View style={styles.card}>
          <View style={styles.userInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Nom d'utilisateur:</Text>
              <Text style={styles.value}>{currentUser.username}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>Classe favorite:</Text>
              <Text style={styles.value}>{currentUser.favoriteClass}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>Niveau:</Text>
              <Text style={styles.value}>{currentUser.level}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.label}>XP Total:</Text>
              <Text style={styles.value}>{currentUser.totalXP}</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>Déconnexion</Text>
          </TouchableOpacity>

          {__DEV__ && (
            <View style={styles.debugSection}>
              <Text style={styles.debugTitle}>Debug Tools</Text>
              <TouchableOpacity 
                style={styles.debugButton} 
                onPress={handleStorageCheck}
                activeOpacity={0.8}
              >
                <Text style={styles.debugButtonText}>Check Storage</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.debugButton} 
                onPress={handleLogAllUsers}
                activeOpacity={0.8}
              >
                <Text style={styles.debugButtonText}>Log All Users</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.debugButtonDanger} 
                onPress={handleDebugReset}
                activeOpacity={0.8}
              >
                <Text style={styles.debugButtonText}>Emergency Reset</Text>
              </TouchableOpacity>
            </View>
          )}
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
  // Debug styles (development only)
  debugSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: COLORS.GRAY_LIGHT,
    borderRadius: 8,
    width: '100%',
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.DARK_PURPLE,
    marginBottom: 10,
    textAlign: 'center',
  },
  debugButton: {
    backgroundColor: COLORS.VIBRANT_ORANGE,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  debugButtonDanger: {
    backgroundColor: COLORS.WINE_RED,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  debugButtonText: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
  },
});