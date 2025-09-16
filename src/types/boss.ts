import type { Exercise } from './exercise';

export interface WeeklyBoss {
  id: string;
  name: string;
  description: string;
  health: number;
  maxHealth: number;
  xpReward: number;
  defeated: boolean;
  attacks: Exercise[];
}

export interface WeeklyProgress {
  weekNumber: number;
  workouts: import('./exercise').WorkoutHistory[];
  boss?: WeeklyBoss;
  completed: boolean;
}
