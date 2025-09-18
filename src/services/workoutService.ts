import { WORKOUTS_BY_CLASS } from '../data/exercises';
import { Workout } from '../types';


export async function getFirstSessionWorkout(): Promise<Workout> {

  return WORKOUTS_BY_CLASS['Fighter'];
}
