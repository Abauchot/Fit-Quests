import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, UserProfile, WeeklyProgress, WorkoutHistory } from '../types';
import { CryptoService } from './cryptoService';
import { KeyService } from './keyService';

// key storage keys
const ENCRYPTED_STORAGE_KEYS = {
  USER_PROFILE: 'encrypted_user_profile',
  WORKOUT_HISTORY: 'encrypted_workout_history',
  WEEKLY_PROGRESS: 'encrypted_weekly_progress',
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
      
      const encrypted = JSON.parse(encryptedStr);
      const decrypted = await CryptoService.decryptData(encrypted, dataKey);
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('Erreur lors de la récupération déchiffrée:', error);
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

  static async getAllKeys(): Promise<readonly string[]> {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Erreur lors de la récupération des clés:', error);
      return [];
    }
  }
}