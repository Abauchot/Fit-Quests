import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, WorkoutHistory, WeeklyProgress, AppState } from '../types';

// Clés de stockage
const STORAGE_KEYS = {
  USER_PROFILE: 'fit_quest_user_profile',
  WORKOUT_HISTORY: 'fit_quest_workout_history',
  WEEKLY_PROGRESS: 'fit_quest_weekly_progress',
  APP_STATE: 'fit_quest_app_state',
  FIRST_LAUNCH: 'fit_quest_first_launch'
} as const;

export class StorageService {
  // Profil utilisateur
  static async saveUserProfile(profile: UserProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du profil:', error);
      throw error;
    }
  }

  static async getUserProfile(): Promise<UserProfile | null> {
    try {
      const profileStr = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return profileStr ? JSON.parse(profileStr) : null;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
      return null;
    }
  }

  // Historique des séances
  static async saveWorkoutHistory(history: WorkoutHistory[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.WORKOUT_HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'historique:', error);
      throw error;
    }
  }

  static async getWorkoutHistory(): Promise<WorkoutHistory[]> {
    try {
      const historyStr = await AsyncStorage.getItem(STORAGE_KEYS.WORKOUT_HISTORY);
      return historyStr ? JSON.parse(historyStr) : [];
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'historique:', error);
      return [];
    }
  }

  static async addWorkoutToHistory(workout: WorkoutHistory): Promise<void> {
    try {
      const currentHistory = await this.getWorkoutHistory();
      const updatedHistory = [...currentHistory, workout];
      await this.saveWorkoutHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de l\'ajout à l\'historique:', error);
      throw error;
    }
  }

  // Progression hebdomadaire
  static async saveWeeklyProgress(progress: WeeklyProgress[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.WEEKLY_PROGRESS, JSON.stringify(progress));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la progression:', error);
      throw error;
    }
  }

  static async getWeeklyProgress(): Promise<WeeklyProgress[]> {
    try {
      const progressStr = await AsyncStorage.getItem(STORAGE_KEYS.WEEKLY_PROGRESS);
      return progressStr ? JSON.parse(progressStr) : [];
    } catch (error) {
      console.error('Erreur lors de la récupération de la progression:', error);
      return [];
    }
  }

  // État global de l'app
  static async saveAppState(state: Partial<AppState>): Promise<void> {
    try {
      const currentState = await this.getAppState();
      const newState = { ...currentState, ...state };
      await AsyncStorage.setItem(STORAGE_KEYS.APP_STATE, JSON.stringify(newState));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'état:', error);
      throw error;
    }
  }

  static async getAppState(): Promise<Partial<AppState>> {
    try {
      const stateStr = await AsyncStorage.getItem(STORAGE_KEYS.APP_STATE);
      return stateStr ? JSON.parse(stateStr) : {};
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'état:', error);
      return {};
    }
  }

  // Premier lancement
  static async isFirstLaunch(): Promise<boolean> {
    try {
      const firstLaunch = await AsyncStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH);
      return firstLaunch === null;
    } catch (error) {
      console.error('Erreur lors de la vérification du premier lancement:', error);
      return true;
    }
  }

  static async setFirstLaunchComplete(): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FIRST_LAUNCH, 'false');
    } catch (error) {
      console.error('Erreur lors de la définition du premier lancement:', error);
      throw error;
    }
  }

  // Utilitaires
  static async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
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