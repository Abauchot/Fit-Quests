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
