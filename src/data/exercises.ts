import { DnDClass, Exercise, Workout } from '../types';

// Exercices de base par classe D&D
export const EXERCISE_DATABASE: Record<DnDClass, Exercise[]> = {
  'Guerrier': [
    {
      id: 'guerrier_1',
      name: 'Pompes murales',
      description: 'Renforcement du haut du corps pour les guerriers',
      duration: 45,
      instructions: [
        'Placez-vous face à un mur, bras tendus',
        'Effectuez des pompes contre le mur',
        'Gardez le corps droit'
      ],
      modifications: {
        shoulder: 'Réduisez l\'amplitude du mouvement'
      },
      xpReward: 10
    },
    {
      id: 'guerrier_2',
      name: 'Squats au poids du corps',
      description: 'Renforcement des jambes',
      duration: 60,
      instructions: [
        'Pieds écartés largeur d\'épaules',
        'Descendez comme pour vous asseoir',
        'Remontez en poussant sur les talons'
      ],
      modifications: {
        knee: 'Descendez moins bas, utilisez une chaise pour vous aider'
      },
      xpReward: 10
    }
  ],

  'Moine': [
    {
      id: 'moine_1',
      name: 'Étirements chat-chien',
      description: 'Mobilité de la colonne vertébrale',
      duration: 45,
      instructions: [
        'À quatre pattes, alternez dos rond et dos creusé',
        'Mouvement lent et contrôlé',
        'Respirez profondément'
      ],
      xpReward: 10
    },
    {
      id: 'moine_2',
      name: 'Rotations de hanches',
      description: 'Mobilité des hanches',
      duration: 30,
      instructions: [
        'Debout, mains sur les hanches',
        'Effectuez des cercles avec le bassin',
        'Alternez sens horaire et anti-horaire'
      ],
      modifications: {
        knee: 'Appuyez-vous sur une chaise pour l\'équilibre'
      },
      xpReward: 10
    }
  ],

  'Roublard': [
    {
      id: 'roublard_1',
      name: 'Équilibre sur une jambe',
      description: 'Amélioration de l\'équilibre et proprioception',
      duration: 30,
      instructions: [
        'Tenez-vous sur une jambe',
        'Maintenez la position',
        'Alternez les jambes'
      ],
      modifications: {
        knee: 'Utilisez un support pour vous tenir'
      },
      xpReward: 10
    },
    {
      id: 'roublard_2',
      name: 'Marche talon-pointe',
      description: 'Coordination et équilibre dynamique',
      duration: 45,
      instructions: [
        'Marchez en ligne droite',
        'Placez le talon devant la pointe de l\'autre pied',
        'Gardez les bras écartés pour l\'équilibre'
      ],
      xpReward: 10
    }
  ],

  'Barde': [
    {
      id: 'barde_1',
      name: 'Respiration 4-7-8',
      description: 'Technique de respiration relaxante',
      duration: 120,
      instructions: [
        'Inspirez par le nez pendant 4 temps',
        'Retenez votre souffle pendant 7 temps',
        'Expirez par la bouche pendant 8 temps'
      ],
      xpReward: 10
    },
    {
      id: 'barde_2',
      name: 'Méditation guidée',
      description: 'Relaxation et centrage',
      duration: 180,
      instructions: [
        'Asseyez-vous confortablement',
        'Fermez les yeux',
        'Concentrez-vous sur votre respiration'
      ],
      xpReward: 10
    }
  ],

  'Clerc': [
    {
      id: 'clerc_1',
      name: 'Élévations d\'épaules',
      description: 'Renforcement et stabilisation des épaules',
      duration: 45,
      instructions: [
        'Bras le long du corps',
        'Soulevez les épaules vers les oreilles',
        'Relâchez lentement'
      ],
      modifications: {
        shoulder: 'Amplitude réduite, mouvement très doux'
      },
      xpReward: 10
    },
    {
      id: 'clerc_2',
      name: 'Rotations d\'épaules',
      description: 'Mobilité des épaules',
      duration: 30,
      instructions: [
        'Effectuez des cercles avec les épaules',
        'Vers l\'avant puis vers l\'arrière',
        'Mouvement lent et contrôlé'
      ],
      modifications: {
        shoulder: 'Cercles très petits'
      },
      xpReward: 10
    }
  ],

  'Druide': [
    {
      id: 'druide_1',
      name: 'Torsions spinales',
      description: 'Mobilité de la colonne vertébrale',
      duration: 60,
      instructions: [
        'Assis, tournez le tronc vers la droite',
        'Maintenez puis tournez vers la gauche',
        'Respirez profondément'
      ],
      xpReward: 10
    },
    {
      id: 'druide_2',
      name: 'Flexions latérales',
      description: 'Étirement des flancs',
      duration: 45,
      instructions: [
        'Debout, inclinez-vous sur le côté',
        'Maintenez l\'étirement',
        'Alternez les côtés'
      ],
      xpReward: 10
    }
  ],

  'Mage': [
    {
      id: 'mage_1',
      name: 'Cercles de bras',
      description: 'Mobilité des épaules et concentration',
      duration: 45,
      instructions: [
        'Bras tendus sur les côtés',
        'Effectuez des petits cercles',
        'Concentrez-vous sur le mouvement'
      ],
      modifications: {
        shoulder: 'Bras plus bas, cercles très petits'
      },
      xpReward: 10
    },
    {
      id: 'mage_2',
      name: 'Étirements nuque',
      description: 'Détente cervicale',
      duration: 30,
      instructions: [
        'Inclinez doucement la tête sur le côté',
        'Maintenez l\'étirement',
        'Alternez les côtés'
      ],
      xpReward: 10
    }
  ],

  'Paladin': [
    {
      id: 'paladin_1',
      name: 'Fentes statiques',
      description: 'Renforcement des jambes et équilibre',
      duration: 60,
      instructions: [
        'Position de fente, jambe avant fléchie',
        'Maintenez la position',
        'Alternez les jambes'
      ],
      modifications: {
        knee: 'Maintenez-vous à un support'
      },
      xpReward: 10
    },
    {
      id: 'paladin_2',
      name: 'Gainage ventral',
      description: 'Renforcement du core',
      duration: 45,
      instructions: [
        'Position de planche sur les avant-bras',
        'Maintenez le corps droit',
        'Respirez normalement'
      ],
      modifications: {
        shoulder: 'Gainage sur les genoux'
      },
      xpReward: 10
    }
  ],

  'Rôdeur': [
    {
      id: 'rodeur_1',
      name: 'Marche sur place',
      description: 'Échauffement et endurance',
      duration: 90,
      instructions: [
        'Marchez sur place en levant les genoux',
        'Balancez les bras naturellement',
        'Maintenez un rythme régulier'
      ],
      modifications: {
        knee: 'Levez moins haut les genoux'
      },
      xpReward: 10
    },
    {
      id: 'rodeur_2',
      name: 'Étirements mollets',
      description: 'Assouplissement des jambes',
      duration: 45,
      instructions: [
        'Appuyez-vous contre un mur',
        'Tendez une jambe derrière',
        'Poussez le talon au sol'
      ],
      xpReward: 10
    }
  ],

  'Sorcier': [
    {
      id: 'sorcier_1',
      name: 'Visualisation créative',
      description: 'Exercice mental et relaxation',
      duration: 120,
      instructions: [
        'Fermez les yeux et visualisez un lieu apaisant',
        'Imaginez tous les détails',
        'Respirez calmement'
      ],
      xpReward: 10
    },
    {
      id: 'sorcier_2',
      name: 'Mouvements fluides',
      description: 'Coordination et grâce',
      duration: 60,
      instructions: [
        'Effectuez des mouvements lents et fluides',
        'Comme si vous lanciez des sorts',
        'Concentrez-vous sur la fluidité'
      ],
      xpReward: 10
    }
  ],

  'Warlock': [
    {
      id: 'warlock_1',
      name: 'Contractions isométriques',
      description: 'Renforcement statique',
      duration: 45,
      instructions: [
        'Contractez tous vos muscles en même temps',
        'Maintenez la tension',
        'Relâchez lentement'
      ],
      xpReward: 10
    },
    {
      id: 'warlock_2',
      name: 'Respiration énergisante',
      description: 'Technique de respiration dynamisante',
      duration: 60,
      instructions: [
        'Inspirations courtes et rapides',
        'Expirations courtes et rapides',
        'Terminez par une respiration profonde'
      ],
      xpReward: 10
    }
  ],

  'Barbare': [
    {
      id: 'barbare_1',
      name: 'Montées de genoux',
      description: 'Exercice cardio intense',
      duration: 60,
      instructions: [
        'Courez sur place en montant les genoux',
        'Rythme soutenu',
        'Balancez les bras'
      ],
      modifications: {
        knee: 'Montez moins haut les genoux, rythme plus lent'
      },
      xpReward: 10
    },
    {
      id: 'barbare_2',
      name: 'Burpees modifiés',
      description: 'Exercice complet du corps',
      duration: 45,
      instructions: [
        'Accroupi, mains au sol',
        'Tendez les jambes en arrière',
        'Revenez en position accroupie'
      ],
      modifications: {
        knee: 'Éliminez le saut, mouvements plus lents',
        shoulder: 'Restez debout, pas de position au sol'
      },
      xpReward: 10
    }
  ]
};

// Création des séances par classe
export const WORKOUTS_BY_CLASS: Record<DnDClass, Workout> = Object.entries(EXERCISE_DATABASE).reduce((acc, [className, exercises]) => {
  const dndClass = className as DnDClass;
  
  acc[dndClass] = {
    id: `workout_${className.toLowerCase()}`,
    name: `Séance ${className}`,
    dndClass,
    description: `Séance d'entraînement thématique pour la classe ${className}`,
    segments: [
      {
        id: `${className.toLowerCase()}_segment_1`,
        name: 'Échauffement',
        exercises: [exercises[0]],
        restTime: 30
      },
      {
        id: `${className.toLowerCase()}_segment_2`, 
        name: 'Exercice principal',
        exercises: [exercises[1]],
        restTime: 60
      }
    ],
    totalDuration: exercises.reduce((total, ex) => total + ex.duration, 0) + 90, // + temps de repos
    xpReward: 50
  };
  
  return acc;
}, {} as Record<DnDClass, Workout>);