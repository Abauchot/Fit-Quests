import { getWeeklyProgram } from '../data/weeklyPrograms';
import {
    BossAttempt,
    BossChallenge,
    DnDClass,
    WeeklyProgramProgress,
    Workout
} from '../types';
import { StorageService } from './storage';

export class WeeklyProgressService {
  /**
   * Start a new weekly program for a user
   */
  static async startWeeklyProgram(
    userId: string, 
    dndClass: DnDClass
  ): Promise<WeeklyProgramProgress> {
    const program = getWeeklyProgram(dndClass);
    if (!program) {
      throw new Error(`No weekly program found for class: ${dndClass}`);
    }

    const weekNumber = await this.getNextWeekNumber(userId, dndClass);
    const weeklyProgress: WeeklyProgramProgress = {
      id: `${userId}_${dndClass}_week_${weekNumber}`,
      weekNumber,
      dndClass,
      programId: program.id,
      startDate: new Date().toISOString(),
      completedWorkouts: [],
      bossAttempts: [],
      weekCompleted: false,
      totalXPEarned: 0,
      currentStreak: await this.getCurrentStreak(userId, dndClass)
    };

    await StorageService.saveWeeklyProgramProgress(weeklyProgress);
    return weeklyProgress;
  }

  /**
   * Get current weekly progress for a user and class
   */
  static async getCurrentWeeklyProgress(
    userId: string, 
    dndClass: DnDClass
  ): Promise<WeeklyProgramProgress | null> {
    return await StorageService.getCurrentWeeklyProgramProgress(userId, dndClass);
  }

  /**
   * Mark a workout as completed
   */
  static async completeWorkout(
    userId: string,
    dndClass: DnDClass,
    workoutId: string,
    xpEarned: number
  ): Promise<WeeklyProgramProgress> {
    const progress = await this.getCurrentWeeklyProgress(userId, dndClass);
    if (!progress) {
      throw new Error('No active weekly progress found');
    }

    // Add workout to completed list if not already there
    if (!progress.completedWorkouts.includes(workoutId)) {
      progress.completedWorkouts.push(workoutId);
      progress.totalXPEarned += xpEarned;
    }

    // Check if all workouts for the week are completed
    const program = getWeeklyProgram(dndClass);
    if (program && progress.completedWorkouts.length >= program.weeklyWorkouts.length) {
      progress.weekCompleted = this.canAttemptBoss(progress);
    }

    await StorageService.saveWeeklyProgramProgress(progress);
    return progress;
  }

  /**
   * Attempt a boss challenge
   */
  static async attemptBossChallenge(
    userId: string,
    dndClass: DnDClass,
    completionRate: number,
    timeToComplete: number
  ): Promise<BossAttempt> {
    const progress = await this.getCurrentWeeklyProgress(userId, dndClass);
    if (!progress) {
      throw new Error('No active weekly progress found');
    }

    const program = getWeeklyProgram(dndClass);
    if (!program) {
      throw new Error(`No program found for class: ${dndClass}`);
    }

    const bossChallenge = program.bossChallenge;
    const attemptId = `${progress.id}_boss_${progress.bossAttempts.length + 1}`;
    
    const completed = completionRate >= bossChallenge.requiredCompletionRate;
    const xpEarned = completed ? bossChallenge.xpReward : Math.floor(bossChallenge.xpReward * (completionRate / 100));

    const bossAttempt: BossAttempt = {
      id: attemptId,
      bossId: bossChallenge.id,
      timestamp: new Date().toISOString(),
      completed,
      completionRate,
      timeToComplete,
      xpEarned
    };

    progress.bossAttempts.push(bossAttempt);
    progress.totalXPEarned += xpEarned;

    // If boss is defeated, mark week as completed
    if (completed) {
      progress.weekCompleted = true;
      progress.currentStreak = await this.updateStreak(userId, dndClass, true);
    } else {
      progress.currentStreak = await this.updateStreak(userId, dndClass, false);
    }

    await StorageService.saveWeeklyProgramProgress(progress);
    return bossAttempt;
  }

  /**
   * Check if user can attempt boss (all workouts completed)
   */
  private static canAttemptBoss(progress: WeeklyProgramProgress): boolean {
    const program = getWeeklyProgram(progress.dndClass);
    if (!program) return false;
    
    return progress.completedWorkouts.length >= program.weeklyWorkouts.length;
  }

  /**
   * Get the next week number for a user and class
   */
  private static async getNextWeekNumber(userId: string, dndClass: DnDClass): Promise<number> {
    const allProgress = await StorageService.getAllWeeklyProgramProgressForUser(userId, dndClass);
    if (allProgress.length === 0) return 1;
    
    const lastWeek = Math.max(...allProgress.map((p: WeeklyProgramProgress) => p.weekNumber));
    return lastWeek + 1;
  }

  /**
   * Get current streak for a class
   */
  private static async getCurrentStreak(userId: string, dndClass: DnDClass): Promise<number> {
    const allProgress = await StorageService.getAllWeeklyProgramProgressForUser(userId, dndClass);
    if (allProgress.length === 0) return 0;

    // Sort by week number descending
    allProgress.sort((a: WeeklyProgramProgress, b: WeeklyProgramProgress) => b.weekNumber - a.weekNumber);
    
    let streak = 0;
    for (const progress of allProgress) {
      if (progress.weekCompleted && this.wasBossDefeated(progress)) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  }

  /**
   * Update streak after boss attempt
   */
  private static async updateStreak(
    userId: string, 
    dndClass: DnDClass, 
    bossDefeated: boolean
  ): Promise<number> {
    if (bossDefeated) {
      const currentStreak = await this.getCurrentStreak(userId, dndClass);
      return currentStreak + 1;
    } else {
      return 0; // Streak broken
    }
  }

  /**
   * Check if boss was defeated in a weekly progress
   */
  private static wasBossDefeated(progress: WeeklyProgramProgress): boolean {
    return progress.bossAttempts.some(attempt => attempt.completed);
  }

  /**
   * Get weekly statistics
   */
  static async getWeeklyStats(userId: string, dndClass: DnDClass): Promise<{
    totalWeeksCompleted: number;
    currentStreak: number;
    totalXPEarned: number;
    averageCompletionRate: number;
    bossWinRate: number;
  }> {
    const allProgress = await StorageService.getAllWeeklyProgramProgressForUser(userId, dndClass);
    
    const completedWeeks = allProgress.filter((p: WeeklyProgramProgress) => p.weekCompleted);
    const totalXP = allProgress.reduce((sum: number, p: WeeklyProgramProgress) => sum + p.totalXPEarned, 0);
    
    const allBossAttempts = allProgress.flatMap((p: WeeklyProgramProgress) => p.bossAttempts);
    const avgCompletionRate = allBossAttempts.length > 0 
      ? allBossAttempts.reduce((sum: number, a: BossAttempt) => sum + a.completionRate, 0) / allBossAttempts.length
      : 0;
    
    const bossWins = allBossAttempts.filter((a: BossAttempt) => a.completed).length;
    const bossWinRate = allBossAttempts.length > 0 ? (bossWins / allBossAttempts.length) * 100 : 0;

    return {
      totalWeeksCompleted: completedWeeks.length,
      currentStreak: await this.getCurrentStreak(userId, dndClass),
      totalXPEarned: totalXP,
      averageCompletionRate: avgCompletionRate,
      bossWinRate
    };
  }

  /**
   * Get recommended next workout for current week
   */
  static async getNextRecommendedWorkout(
    userId: string, 
    dndClass: DnDClass
  ): Promise<Workout | BossChallenge | null> {
    const progress = await this.getCurrentWeeklyProgress(userId, dndClass);
    if (!progress) return null;

    const program = getWeeklyProgram(dndClass);
    if (!program) return null;

    // If all workouts are done and can attempt boss
    if (this.canAttemptBoss(progress) && !this.wasBossDefeated(progress)) {
      return program.bossChallenge;
    }

    // Find next workout to complete
    const completedIds = new Set(progress.completedWorkouts);
    const nextWorkout = program.weeklyWorkouts.find(w => !completedIds.has(w.id));
    
    return nextWorkout || null;
  }

  /**
   * Check if user has completed this week and can start a new one
   */
  static async canStartNewWeek(userId: string, dndClass: DnDClass): Promise<boolean> {
    const progress = await this.getCurrentWeeklyProgress(userId, dndClass);
    
    // No current week, can start new one
    if (!progress) return true;
    
    // Current week is completed, can start new one
    if (progress.weekCompleted) return true;
    
    // Check if week has expired (older than 7 days)
    const startDate = new Date(progress.startDate);
    const now = new Date();
    const daysDiff = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    
    return daysDiff > 7;
  }
}