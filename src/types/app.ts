import type { WeeklyProgress } from './boss';
import type { Workout } from './exercise';
import type { UserProfile } from './user';

export interface AppState {
  currentUser: UserProfile | null;
  currentWeek: number;
  currentDay: number;
  weeklyProgress: WeeklyProgress[];
  workouts: Workout[];
  isFirstLaunch: boolean;
}

export type TimerState = 'idle' | 'running' | 'paused' | 'completed';

export interface TimerData {
  duration: number;
  remaining: number;
  state: TimerState;
}

export interface NotificationData {
  title: string;
  body: string;
  data?: any;
}
