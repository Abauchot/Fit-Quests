// Types pour les classes D&D 5e
export type DnDClass = 
  | 'Guerrier' 
  | 'Moine' 
  | 'Roublard' 
  | 'Barde' 
  | 'Clerc' 
  | 'Druide'
  | 'Mage'
  | 'Paladin'
  | 'Rôdeur'
  | 'Sorcier'
  | 'Warlock'
  | 'Barbare';

// Types pour les flags de santé
export interface HealthFlags {
  hasKneeIssues: boolean;
  hasShoulderIssues: boolean;
}

// Profil utilisateur
export interface UserProfile {
  id: string;
  pseudo: string;
  favoriteClass: DnDClass;
  healthFlags: HealthFlags;
  totalXP: number;
  level: number;
  createdAt: string;
  jwt: string;
}

// Exercice individuel
export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number; // en secondes
  instructions: string[];
  modifications?: {
    knee?: string;
    shoulder?: string;
  };
  xpReward: number;
}

// Segment d'une séance
export interface WorkoutSegment {
  id: string;
  name: string;
  exercises: Exercise[];
  restTime?: number; // temps de repos après le segment
}

// Séance complète
export interface Workout {
  id: string;
  name: string;
  dndClass: DnDClass;
  description: string;
  segments: WorkoutSegment[];
  totalDuration: number;
  xpReward: number;
}

// Historique d'exercice
export interface ExerciseHistory {
  exerciseId: string;
  completed: boolean;
  skipped: boolean;
  timestamp: string;
  rpe?: number; // Rate of Perceived Exertion (1-10)
  notes?: string;
}

// Historique de séance
export interface WorkoutHistory {
  id: string;
  workoutId: string;
  date: string;
  dndClass: DnDClass;
  duration: number; // durée réelle en secondes
  xpEarned: number;
  completionPercentage: number;
  exercises: ExerciseHistory[];
  rpe?: number;
  notes?: string;
}

// Boss de fin de semaine
export interface WeeklyBoss {
  id: string;
  name: string;
  description: string;
  health: number;
  maxHealth: number;
  xpReward: number;
  defeated: boolean;
  attacks: Exercise[]; // exercices de la semaine
}

// Progression hebdomadaire
export interface WeeklyProgress {
  weekNumber: number;
  workouts: WorkoutHistory[];
  boss?: WeeklyBoss;
  completed: boolean;
}

// État de l'application
export interface AppState {
  currentUser: UserProfile | null;
  currentWeek: number;
  currentDay: number;
  weeklyProgress: WeeklyProgress[];
  workouts: Workout[];
  isFirstLaunch: boolean;
}

// Timer states
export type TimerState = 'idle' | 'running' | 'paused' | 'completed';

export interface TimerData {
  duration: number;
  remaining: number;
  state: TimerState;
}

// Notification types
export interface NotificationData {
  title: string;
  body: string;
  data?: any;
}