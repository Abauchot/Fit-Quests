import { WORKOUTS_BY_CLASS } from '../data/exercises';
import { getAllWeeklyPrograms, getWeeklyProgram } from '../data/weeklyPrograms';
import { BossChallenge, DnDClass, WeeklyProgram, Workout } from '../types';
import { WeeklyProgressService } from './weeklyProgressService';

/**
 * Get the first session workout (Fighter by default)
 */
export async function getFirstSessionWorkout(): Promise<Workout> {
  return WORKOUTS_BY_CLASS['Fighter'];
}

/**
 * Get weekly program for a specific D&D class
 */
export async function getClassWeeklyProgram(dndClass: DnDClass): Promise<WeeklyProgram | null> {
  return getWeeklyProgram(dndClass) || null;
}

/**
 * Get all available weekly programs
 */
export async function getAllAvailablePrograms(): Promise<WeeklyProgram[]> {
  return getAllWeeklyPrograms();
}

/**
 * Get current recommended workout for a user
 * Returns the next workout in their current weekly program, or suggests starting a new week
 */
export async function getRecommendedWorkout(
  userId: string, 
  dndClass: DnDClass
): Promise<{
  type: 'workout' | 'boss' | 'new_week' | 'none';
  workout?: Workout;
  boss?: BossChallenge;
  program?: WeeklyProgram;
  message: string;
}> {
  // Check if user can start a new week
  const canStartNew = await WeeklyProgressService.canStartNewWeek(userId, dndClass);
  
  if (canStartNew) {
    const program = getWeeklyProgram(dndClass);
    if (!program) {
      return {
        type: 'none',
        message: `No weekly program available for ${dndClass}. Try a different class!`
      };
    }

    return {
      type: 'new_week',
      program,
      message: `Ready to start a new week of ${program.name}? Let's go!`
    };
  }

  // Get next recommended workout from current week
  const recommended = await WeeklyProgressService.getNextRecommendedWorkout(userId, dndClass);
  
  if (!recommended) {
    return {
      type: 'none',
      message: 'No workouts available. Try starting a new weekly program!'
    };
  }

  // Check if it's a boss challenge
  if ('requiredCompletionRate' in recommended) {
    return {
      type: 'boss',
      boss: recommended as BossChallenge,
      message: 'Time for the boss fight! You\'ve completed all workouts this week. Ready for the ultimate challenge?'
    };
  }

  // It's a regular workout
  return {
    type: 'workout',
    workout: recommended as Workout,
    message: 'Here\'s your next workout! Keep building your strength!'
  };
}

/**
 * Start a new weekly program for a user
 */
export async function startNewWeeklyProgram(
  userId: string,
  dndClass: DnDClass
): Promise<{
  success: boolean;
  progress?: any;
  error?: string;
}> {
  try {
    const progress = await WeeklyProgressService.startWeeklyProgram(userId, dndClass);
    return {
      success: true,
      progress
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Complete a workout and update weekly progress
 */
export async function completeWorkout(
  userId: string,
  dndClass: DnDClass,
  workoutId: string,
  xpEarned: number
): Promise<{
  success: boolean;
  progress?: any;
  error?: string;
  weekCompleted?: boolean;
}> {
  try {
    const progress = await WeeklyProgressService.completeWorkout(
      userId, 
      dndClass, 
      workoutId, 
      xpEarned
    );
    
    return {
      success: true,
      progress,
      weekCompleted: progress.weekCompleted
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Attempt a boss challenge
 */
export async function attemptBossChallenge(
  userId: string,
  dndClass: DnDClass,
  completionRate: number,
  timeToComplete: number
): Promise<{
  success: boolean;
  attempt?: any;
  error?: string;
  bossDefeated?: boolean;
}> {
  try {
    const attempt = await WeeklyProgressService.attemptBossChallenge(
      userId,
      dndClass,
      completionRate,
      timeToComplete
    );
    
    return {
      success: true,
      attempt,
      bossDefeated: attempt.completed
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Get user's weekly stats for a specific class
 */
export async function getUserWeeklyStats(
  userId: string,
  dndClass: DnDClass
): Promise<{
  totalWeeksCompleted: number;
  currentStreak: number;
  totalXPEarned: number;
  averageCompletionRate: number;
  bossWinRate: number;
}> {
  return await WeeklyProgressService.getWeeklyStats(userId, dndClass);
}

/**
 * Get user's current weekly progress
 */
export async function getCurrentWeeklyProgress(
  userId: string,
  dndClass: DnDClass
) {
  return await WeeklyProgressService.getCurrentWeeklyProgress(userId, dndClass);
}
