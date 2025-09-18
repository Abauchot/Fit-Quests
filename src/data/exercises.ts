import { DnDClass, Exercise, Workout } from '../types';

// Basic exercises by D&D class
export const EXERCISE_DATABASE: Record<DnDClass, Exercise[]> = {
  'Fighter': [
    {
      id: 'guerrier_1',
      name: 'Wall Push-ups',
      description: 'Upper body strengthening for fighters',
      duration: 45,
      instructions: [
        'Stand facing a wall, arms extended',
        'Perform push-ups against the wall',
        'Keep your body straight'
      ],
      modifications: {
        shoulder: 'Reduce range of motion'
      },
      xpReward: 10
    },
    {
      id: 'guerrier_2',
      name: 'Bodyweight Squats',
      description: 'Leg strengthening',
      duration: 60,
      instructions: [
        'Feet shoulder-width apart',
        'Lower down as if sitting on a chair',
        'Rise up by pushing through your heels'
      ],
      modifications: {
        knee: 'Go down less, use a chair for support'
      },
      xpReward: 10
    }
  ],

  'Monk': [
    {
      id: 'moine_1',
      name: 'Cat-Cow Stretches',
      description: 'Spinal mobility',
      duration: 45,
      instructions: [
        'On hands and knees, alternate arched and rounded back',
        'Slow and controlled movement',
        'Breathe deeply'
      ],
      xpReward: 10
    },
    {
      id: 'moine_2',
      name: 'Hip Rotations',
      description: 'Hip mobility',
      duration: 30,
      instructions: [
        'Standing, hands on hips',
        'Make circles with your pelvis',
        'Alternate clockwise and counterclockwise'
      ],
      modifications: {
        knee: 'Lean on a chair for balance'
      },
      xpReward: 10
    }
  ],

  'Rogue': [
    {
      id: 'roublard_1',
      name: 'Single Leg Balance',
      description: 'Balance and proprioception improvement',
      duration: 30,
      instructions: [
        'Stand on one leg',
        'Hold the position',
        'Alternate legs'
      ],
      modifications: {
        knee: 'Use support to hold on'
      },
      xpReward: 10
    },
    {
      id: 'roublard_2',
      name: 'Heel-to-Toe Walk',
      description: 'Coordination and dynamic balance',
      duration: 45,
      instructions: [
        'Walk in a straight line',
        'Place heel in front of the toe of the other foot',
        'Keep arms spread out for balance'
      ],
      xpReward: 10
    }
  ],

  'Bard': [
    {
      id: 'barde_1',
      name: '4-7-8 Breathing',
      description: 'Relaxing breathing technique',
      duration: 120,
      instructions: [
        'Inhale through nose for 4 counts',
        'Hold your breath for 7 counts',
        'Exhale through mouth for 8 counts'
      ],
      xpReward: 10
    },
    {
      id: 'barde_2',
      name: 'Guided Meditation',
      description: 'Relaxation and centering',
      duration: 180,
      instructions: [
        'Sit comfortably',
        'Close your eyes',
        'Focus on your breathing'
      ],
      xpReward: 10
    }
  ],

  'Cleric': [
    {
      id: 'clerc_1',
      name: 'Shoulder Elevations',
      description: 'Shoulder strengthening and stabilization',
      duration: 45,
      instructions: [
        'Arms along your body',
        'Lift shoulders towards ears',
        'Release slowly'
      ],
      modifications: {
        shoulder: 'Reduced range, very gentle movement'
      },
      xpReward: 10
    },
    {
      id: 'clerc_2',
      name: 'Shoulder Rotations',
      description: 'Shoulder mobility',
      duration: 30,
      instructions: [
        'Make circles with your shoulders',
        'Forward then backward',
        'Slow and controlled movement'
      ],
      modifications: {
        shoulder: 'Very small circles'
      },
      xpReward: 10
    }
  ],

  'Druid': [
    {
      id: 'druide_1',
      name: 'Spinal Twists',
      description: 'Spinal mobility',
      duration: 60,
      instructions: [
        'Seated, rotate trunk to the right',
        'Hold then rotate to the left',
        'Breathe deeply'
      ],
      xpReward: 10
    },
    {
      id: 'druide_2',
      name: 'Side Bends',
      description: 'Side stretching',
      duration: 45,
      instructions: [
        'Standing, lean to the side',
        'Hold the stretch',
        'Alternate sides'
      ],
      xpReward: 10
    }
  ],

  'Wizard': [
    {
      id: 'mage_1',
      name: 'Arm Circles',
      description: 'Shoulder mobility and concentration',
      duration: 45,
      instructions: [
        'Arms extended to the sides',
        'Make small circles',
        'Focus on the movement'
      ],
      modifications: {
        shoulder: 'Lower arms, very small circles'
      },
      xpReward: 10
    },
    {
      id: 'mage_2',
      name: 'Neck Stretches',
      description: 'Neck relaxation',
      duration: 30,
      instructions: [
        'Gently tilt head to the side',
        'Hold the stretch',
        'Alternate sides'
      ],
      xpReward: 10
    }
  ],

  'Paladin': [
    {
      id: 'paladin_1',
      name: 'Static Lunges',
      description: 'Leg strengthening and balance',
      duration: 60,
      instructions: [
        'Lunge position, front leg bent',
        'Hold the position',
        'Alternate legs'
      ],
      modifications: {
        knee: 'Hold onto support'
      },
      xpReward: 10
    },
    {
      id: 'paladin_2',
      name: 'Plank',
      description: 'Core strengthening',
      duration: 45,
      instructions: [
        'Plank position on forearms',
        'Keep body straight',
        'Breathe normally'
      ],
      modifications: {
        shoulder: 'Plank on knees'
      },
      xpReward: 10
    }
  ],

  'Ranger': [
    {
      id: 'rodeur_1',
      name: 'Marching in Place',
      description: 'Warm-up and endurance',
      duration: 90,
      instructions: [
        'March in place lifting knees',
        'Swing arms naturally',
        'Maintain regular rhythm'
      ],
      modifications: {
        knee: 'Lift knees less high'
      },
      xpReward: 10
    },
    {
      id: 'rodeur_2',
      name: 'Calf Stretches',
      description: 'Leg flexibility',
      duration: 45,
      instructions: [
        'Lean against a wall',
        'Extend one leg behind',
        'Push heel to the ground'
      ],
      xpReward: 10
    }
  ],

  'Sorcerer': [
    {
      id: 'sorcier_1',
      name: 'Creative Visualization',
      description: 'Mental exercise and relaxation',
      duration: 120,
      instructions: [
        'Close your eyes and visualize a peaceful place',
        'Imagine all the details',
        'Breathe calmly'
      ],
      xpReward: 10
    },
    {
      id: 'sorcier_2',
      name: 'Fluid Movements',
      description: 'Coordination and grace',
      duration: 60,
      instructions: [
        'Perform slow and fluid movements',
        'As if casting spells',
        'Focus on fluidity'
      ],
      xpReward: 10
    }
  ],

  'Warlock': [
    {
      id: 'warlock_1',
      name: 'Isometric Contractions',
      description: 'Static strengthening',
      duration: 45,
      instructions: [
        'Contract all your muscles at the same time',
        'Hold the tension',
        'Release slowly'
      ],
      xpReward: 10
    },
    {
      id: 'warlock_2',
      name: 'Energizing Breathing',
      description: 'Energizing breathing technique',
      duration: 60,
      instructions: [
        'Short and rapid inhalations',
        'Short and rapid exhalations',
        'End with a deep breath'
      ],
      xpReward: 10
    }
  ],

  'Barbarian': [
    {
      id: 'barbare_1',
      name: 'High Knees',
      description: 'Intense cardio exercise',
      duration: 60,
      instructions: [
        'Run in place lifting knees high',
        'Sustained rhythm',
        'Swing your arms'
      ],
      modifications: {
        knee: 'Lift knees less high, slower rhythm'
      },
      xpReward: 10
    },
    {
      id: 'barbare_2',
      name: 'Modified Burpees',
      description: 'Full body exercise',
      duration: 45,
      instructions: [
        'Squat down, hands on floor',
        'Extend legs backward',
        'Return to squat position'
      ],
      modifications: {
        knee: 'Eliminate jump, slower movements',
        shoulder: 'Stay standing, no floor position'
      },
      xpReward: 10
    }
  ]
};

// Creating workouts by class
export const WORKOUTS_BY_CLASS: Record<DnDClass, Workout> = Object.entries(EXERCISE_DATABASE).reduce((acc, [className, exercises]) => {
  const dndClass = className as DnDClass;
  
  acc[dndClass] = {
    id: `workout_${className.toLowerCase()}`,
    name: `${className} Session`,
    dndClass,
    description: `Themed training session for ${className} class`,
    segments: [
      {
        id: `${className.toLowerCase()}_segment_1`,
        name: 'Warm-up',
        exercises: [exercises[0]],
        restTime: 30
      },
      {
        id: `${className.toLowerCase()}_segment_2`, 
        name: 'Main exercise',
        exercises: [exercises[1]],
        restTime: 60
      }
    ],
    totalDuration: exercises.reduce((total, ex) => total + ex.duration, 0) + 90, // + rest time
    xpReward: 50
  };
  
  return acc;
}, {} as Record<DnDClass, Workout>);