import { useEffect, useState } from 'react';
import { getFirstSessionWorkout } from '../services/workoutService';
import { Workout } from '../types';

export function useFirstSession() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFirstSessionWorkout().then(w => {
      setWorkout(w);
      setIsLoading(false);
    });
  }, []);

  return { workout, isLoading };
}
