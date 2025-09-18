import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, DnDClass, UserProfile, WeeklyProgramProgress, WeeklyProgress, WorkoutHistory } from '../types';
import { CryptoService } from './cryptoService';
import { KeyService } from './keyService';

// key storage keys
const ENCRYPTED_STORAGE_KEYS = {
  USER_PROFILE: 'encrypted_user_profile',
  WORKOUT_HISTORY: 'encrypted_workout_history',
  WEEKLY_PROGRESS: 'encrypted_weekly_progress',
  WEEKLY_PROGRAM_PROGRESS: 'encrypted_weekly_program_progress',
  APP_STATE: 'encrypted_app_state'
} as const;

export class StorageService {
  // encrypted save
  private static async saveEncrypted(key: string, data: any): Promise<void> {
    try {
      const dataKey = KeyService.getDataKey();
      const jsonData = JSON.stringify(data);
      const encrypted = await CryptoService.encryptData(jsonData, dataKey);
      await AsyncStorage.setItem(key, JSON.stringify(encrypted));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde chiffrée:', error);
      throw error;
    }
  }

  // get decrypted
  private static async getDecrypted<T>(key: string): Promise<T | null> {
    try {
      const dataKey = KeyService.getDataKey();
      const encryptedStr = await AsyncStorage.getItem(key);
      if (!encryptedStr) return null;
      
      // Validate that we have a valid JSON string before parsing
      let encrypted;
      try {
        encrypted = JSON.parse(encryptedStr);
      } catch (jsonError) {
        console.error('Invalid JSON in storage for key:', key, jsonError);
        // Clear corrupted data
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      const decrypted = await CryptoService.decryptData(encrypted, dataKey);
      
      // Validate decrypted data is valid JSON before parsing
      if (typeof decrypted !== 'string' || decrypted.trim() === '') {
        console.error('Decrypted data is not a valid string for key:', key);
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      try {
        return JSON.parse(decrypted);
      } catch (parseError) {
        console.error('Failed to parse decrypted JSON for key:', key, 'Data:', decrypted);
        // Clear corrupted data
        await AsyncStorage.removeItem(key);
        return null;
      }
    } catch (error) {
      console.error('Erreur lors de la récupération déchiffrée:', error);
      // If there's any error, try to clear the corrupted data
      try {
        await AsyncStorage.removeItem(key);
      } catch (removeError) {
        console.error('Failed to remove corrupted data:', removeError);
      }
      return null;
    }
  }

  // User profile
  static async saveUserProfile(profile: UserProfile): Promise<void> {
    await this.saveEncrypted(ENCRYPTED_STORAGE_KEYS.USER_PROFILE, profile);
  }

  static async getUserProfile(): Promise<UserProfile | null> {
    return await this.getDecrypted<UserProfile>(ENCRYPTED_STORAGE_KEYS.USER_PROFILE);
  }

  // Workout history
  static async saveWorkoutHistory(history: WorkoutHistory[]): Promise<void> {
    await this.saveEncrypted(ENCRYPTED_STORAGE_KEYS.WORKOUT_HISTORY, history);
  }

  static async getWorkoutHistory(): Promise<WorkoutHistory[]> {
    const history = await this.getDecrypted<WorkoutHistory[]>(ENCRYPTED_STORAGE_KEYS.WORKOUT_HISTORY);
    return history || [];
  }

  // Weekly progress
  static async saveWeeklyProgress(progress: WeeklyProgress[]): Promise<void> {
    await this.saveEncrypted(ENCRYPTED_STORAGE_KEYS.WEEKLY_PROGRESS, progress);
  }

  static async getWeeklyProgress(): Promise<WeeklyProgress[]> {
    const progress = await this.getDecrypted<WeeklyProgress[]>(ENCRYPTED_STORAGE_KEYS.WEEKLY_PROGRESS);
    return progress || [];
  }

  // Global app state
  static async saveAppState(state: Partial<AppState>): Promise<void> {
    try {
      const currentState = await this.getAppState();
      const newState = { ...currentState, ...state };
      await this.saveEncrypted(ENCRYPTED_STORAGE_KEYS.APP_STATE, newState);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'état:', error);
      throw error;
    }
  }

  static async getAppState(): Promise<Partial<AppState>> {
    try {
      const state = await this.getDecrypted<Partial<AppState>>(ENCRYPTED_STORAGE_KEYS.APP_STATE);
      return state || {};
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'état:', error);
      return {};
    }
  }

  // first launch flag
  static async isFirstLaunch(): Promise<boolean> {
    try {
      const firstLaunch = await AsyncStorage.getItem('first_launch');
      return firstLaunch === null;
    } catch (error) {
      console.error('Erreur lors de la vérification du premier lancement:', error);
      return true;
    }
  }

  static async setFirstLaunchComplete(): Promise<void> {
    try {
      await AsyncStorage.setItem('first_launch', 'false');
    } catch (error) {
      console.error('Erreur lors de la définition du premier lancement:', error);
      throw error;
    }
  }

  // Utilities
  static async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([...Object.values(ENCRYPTED_STORAGE_KEYS), 'first_launch']);
    } catch (error) {
      console.error('Erreur lors de la suppression des données:', error);
      throw error;
    }
  }

  // Debug: Check storage health
  static async checkStorageHealth(): Promise<void> {
    console.log('=== Storage Health Check ===');
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log('All storage keys:', keys);
      
      for (const storageKey of Object.values(ENCRYPTED_STORAGE_KEYS)) {
        try {
          const rawData = await AsyncStorage.getItem(storageKey);
          if (rawData) {
            console.log(`Key ${storageKey}:`, {
              length: rawData.length,
              isValidJSON: (() => {
                try {
                  JSON.parse(rawData);
                  return true;
                } catch {
                  return false;
                }
              })(),
              preview: rawData.substring(0, 100) + '...'
            });
          } else {
            console.log(`Key ${storageKey}: No data`);
          }
        } catch (error) {
          console.error(`Error checking key ${storageKey}:`, error);
        }
      }
    } catch (error) {
      console.error('Storage health check failed:', error);
    }
    console.log('=== End Health Check ===');
  }

  // Clear corrupted data
  static async clearCorruptedData(): Promise<{ cleaned: string[], errors: string[] }> {
    console.log('🧹 Clearing potentially corrupted data...');
    const cleanedKeys: string[] = [];
    const errorKeys: string[] = [];
    
    try {
      for (const storageKey of Object.values(ENCRYPTED_STORAGE_KEYS)) {
        try {
          const rawData = await AsyncStorage.getItem(storageKey);
          if (rawData) {
            // Try to validate the data
            JSON.parse(rawData);
            const dataKey = KeyService.getDataKey();
            const encrypted = JSON.parse(rawData);
            const decrypted = await CryptoService.decryptData(encrypted, dataKey);
            JSON.parse(decrypted);
            console.log(`✅ Key ${storageKey}: Data is valid`);
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          console.log(`🗑️ Removing corrupted data for key ${storageKey}:`, errorMessage);
          await AsyncStorage.removeItem(storageKey);
          cleanedKeys.push(storageKey);
          errorKeys.push(errorMessage);
        }
      }
      
      if (cleanedKeys.length > 0) {
        console.log(`🧹 Cleanup completed. Removed ${cleanedKeys.length} corrupted entries:`, cleanedKeys);
      } else {
        console.log('✅ No corrupted data found.');
      }
      
      return { cleaned: cleanedKeys, errors: errorKeys };
    } catch (error) {
      console.error('❌ Error during corrupted data cleanup:', error);
      return { cleaned: cleanedKeys, errors: [...errorKeys, error instanceof Error ? error.message : 'Unknown cleanup error'] };
    }
  }

  // Emergency reset - clears everything and forces re-setup
  static async emergencyReset(): Promise<void> {
    console.warn('Performing emergency reset...');
    try {
      // Clear all app data
      await this.clearAllData();
      
      // Clear any authentication keys
      try {
        KeyService.logout();
      } catch (error) {
        console.error('Error during key cleanup:', error);
      }
      
      console.log('Emergency reset completed. App needs to restart.');
    } catch (error) {
      console.error('Emergency reset failed:', error);
      throw error;
    }
  }

  // Debug: Log all available user data
  static async logAllUsers(): Promise<void> {
    console.log('=== 👥 ALL USERS DEBUG LOG ===');
    try {
      // Get all storage keys
      const allKeys = await AsyncStorage.getAllKeys();
      console.log('📋 All storage keys:', allKeys);

      // Check for user profiles
      const userProfile = await this.getUserProfile();
      if (userProfile) {
        console.log('👤 Current User Profile:', {
          id: userProfile.id,
          username: userProfile.username,
          favoriteClass: userProfile.favoriteClass,
          level: userProfile.level,
          totalXP: userProfile.totalXP,
          createdAt: userProfile.createdAt,
          healthFlags: userProfile.healthFlags
        });
      } else {
        console.log('❌ No user profile found');
      }

      // Check workout history
      const workoutHistory = await this.getWorkoutHistory();
      console.log('🏋️ Workout History:', {
        count: workoutHistory.length,
        entries: workoutHistory.map(w => ({
          id: w.id,
          date: w.date,
          exerciseCount: w.exercises.length,
          xpEarned: w.xpEarned,
          completionPercentage: w.completionPercentage,
          dndClass: w.dndClass
        }))
      });

      // Check weekly progress
      const weeklyProgress = await this.getWeeklyProgress();
      console.log('📊 Weekly Progress:', {
        count: weeklyProgress.length,
        entries: weeklyProgress.map(w => ({
          weekNumber: w.weekNumber,
          workoutCount: w.workouts.length,
          completed: w.completed,
          hasBoss: !!w.boss,
          bossDefeated: w.boss?.defeated || false
        }))
      });

      // Check app state
      const appState = await this.getAppState();
      console.log('⚙️ App State:', appState);

      // Check authentication status
      console.log('🔐 Auth Status:', {
        isAuthenticated: KeyService.isAuthenticated(),
        hasDataKey: !!KeyService.getDataKey()
      });

      // Raw storage data for debugging
      console.log('📦 Raw Storage Data:');
      for (const key of Object.values(ENCRYPTED_STORAGE_KEYS)) {
        try {
          const rawData = await AsyncStorage.getItem(key);
          if (rawData) {
            console.log(`  ${key}:`, {
              exists: true,
              length: rawData.length,
              isValidJSON: (() => {
                try {
                  JSON.parse(rawData);
                  return true;
                } catch {
                  return false;
                }
              })(),
              preview: rawData.substring(0, 50) + '...'
            });
          } else {
            console.log(`  ${key}: No data`);
          }
        } catch (error) {
          console.log(`  ${key}: Error - ${error instanceof Error ? error.message : 'Unknown'}`);
        }
      }

    } catch (error) {
      console.error('❌ Error during user data logging:', error);
    }
    console.log('=== 👥 END USERS LOG ===');
  }

  static async getAllKeys(): Promise<readonly string[]> {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Erreur lors de la récupération des clés:', error);
      return [];
    }
  }

  // Weekly Program Progress methods
  static async saveWeeklyProgramProgress(progress: WeeklyProgramProgress): Promise<void> {
    try {
      const allProgress = await this.getAllWeeklyProgramProgress();
      const existingIndex = allProgress.findIndex(p => p.id === progress.id);
      
      if (existingIndex >= 0) {
        allProgress[existingIndex] = progress;
      } else {
        allProgress.push(progress);
      }
      
      await this.saveEncrypted(ENCRYPTED_STORAGE_KEYS.WEEKLY_PROGRAM_PROGRESS, allProgress);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la progression hebdomadaire:', error);
      throw error;
    }
  }

  static async getAllWeeklyProgramProgress(): Promise<WeeklyProgramProgress[]> {
    try {
      const progress = await this.getDecrypted<WeeklyProgramProgress[]>(ENCRYPTED_STORAGE_KEYS.WEEKLY_PROGRAM_PROGRESS);
      return progress || [];
    } catch (error) {
      console.error('Erreur lors de la récupération de la progression hebdomadaire:', error);
      return [];
    }
  }

  static async getCurrentWeeklyProgramProgress(userId: string, dndClass: DnDClass): Promise<WeeklyProgramProgress | null> {
    try {
      const allProgress = await this.getAllWeeklyProgramProgress();
      
      // Find the most recent non-completed progress for this user and class
      const userProgress = allProgress
        .filter(p => p.id.startsWith(`${userId}_${dndClass}_week_`))
        .sort((a, b) => b.weekNumber - a.weekNumber);
      
      // Return the most recent incomplete week, or most recent if all completed
      const incompleteWeek = userProgress.find(p => !p.weekCompleted);
      return incompleteWeek || userProgress[0] || null;
    } catch (error) {
      console.error('Erreur lors de la récupération de la progression actuelle:', error);
      return null;
    }
  }

  static async getAllWeeklyProgramProgressForUser(userId: string, dndClass: DnDClass): Promise<WeeklyProgramProgress[]> {
    try {
      const allProgress = await this.getAllWeeklyProgramProgress();
      return allProgress
        .filter(p => p.id.startsWith(`${userId}_${dndClass}_week_`))
        .sort((a, b) => a.weekNumber - b.weekNumber);
    } catch (error) {
      console.error('Erreur lors de la récupération de la progression utilisateur:', error);
      return [];
    }
  }

  static async clearWeeklyProgramProgress(): Promise<void> {
    try {
      await AsyncStorage.removeItem(ENCRYPTED_STORAGE_KEYS.WEEKLY_PROGRAM_PROGRESS);
    } catch (error) {
      console.error('Erreur lors de la suppression de la progression hebdomadaire:', error);
      throw error;
    }
  }
}