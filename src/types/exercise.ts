export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number; // in seconds
  instructions: string[];
  modifications?: {
    knee?: string;
    shoulder?: string;
  };
  xpReward: number;
}

export interface WorkoutSegment {
  id: string;
  name: string;
  exercises: Exercise[];
  restTime?: number;
}

export interface Workout {
  id: string;
  name: string;
  dndClass: import('./index').DnDClass;
  description: string;
  segments: WorkoutSegment[];
  totalDuration: number;
  xpReward: number;
}

export interface ExerciseHistory {
  exerciseId: string;
  completed: boolean;
  skipped: boolean;
  timestamp: string;
  rpe?: number;
  notes?: string;
}

export interface WorkoutHistory {
  id: string;
  workoutId: string;
  date: string;
  dndClass: import('./index').DnDClass;
  duration: number;
  xpEarned: number;
  completionPercentage: number;
  exercises: ExerciseHistory[];
  rpe?: number;
  notes?: string;
}

export interface BossChallenge {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  timeLimit?: number; // in seconds
  requiredCompletionRate: number; // percentage (0-100)
  xpReward: number;
  theme?: string; // e.g., "Dragon", "Lich", "Ancient One"
  phases?: BossPhase[];
}

export interface BossPhase {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  isOptional?: boolean;
}

export interface WeeklyProgram {
  id: string;
  name: string;
  dndClass: import('./index').DnDClass;
  description: string;
  weeklyWorkouts: Workout[];
  bossChallenge: BossChallenge;
  totalXPReward: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  theme: string;
}

export interface BossAttempt {
  id: string;
  bossId: string;
  timestamp: string;
  completed: boolean;
  completionRate: number;
  timeToComplete: number;
  xpEarned: number;
  phases?: BossPhaseResult[];
}

export interface BossPhaseResult {
  phaseId: string;
  completed: boolean;
  timeToComplete: number;
}

export interface WeeklyProgramProgress {
  id: string;
  weekNumber: number;
  dndClass: import('./index').DnDClass;
  programId: string;
  startDate: string;
  completedWorkouts: string[]; // IDs des workouts complétés
  bossAttempts: BossAttempt[];
  weekCompleted: boolean;
  totalXPEarned: number;
  currentStreak: number;
}
