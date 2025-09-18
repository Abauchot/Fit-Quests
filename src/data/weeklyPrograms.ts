import { DnDClass, WeeklyProgram } from '../types';

/*
 * ⚠️  ATTENTION - PROGRAMMES D'EXERCICES GÉNÉRÉS PAR IA
 * 
 * Ces programmes d'entraînement ont été générés par intelligence artificielle 
 * dans le cadre du développement du MVP (Minimum Viable Product).
 * 
 * ⚠️  IMPORTANT : Ces exercices n'ont pas été validés par un coach sportif professionnel.
 * 
 * 🔮 ROADMAP FUTURE :
 * - Consultation avec un(e) véritable coach sportif certifié(e)
 * - Validation médicale des exercices et modifications
 * - Personnalisation avancée selon les profils utilisateurs
 * - Programmes progressifs adaptés aux niveaux
 * 
 * En attendant, ces programmes offrent une expérience gamifiée cohérente
 * avec les thèmes D&D pour tester le concept et les fonctionnalités.
 */

/*
 * 📊 TABLEAU RÉCAPITULATIF DES CLASSES D&D
 * 
 * | Classe      | Thème Principal              | Difficulté    | Boss Fight Final          | XP Total |
 * |-------------|------------------------------|---------------|---------------------------|----------|
 * | Bard        | Performance & Inspiration    | Intermédiaire | The Grand Performance     | 1,185 XP |
 * | Fighter     | Combat Militaire             | Avancé        | Ancient Dragon Battle     | 1,950 XP |
 * | Wizard      | Focus & Concentration        | Débutant      | Archmage's Trial          | 1,590 XP |
 * | Monk        | Arts Martiaux & Méditation   | Intermédiaire | Trial of Grand Master     | 1,825 XP |
 * | Rogue       | Agilité & Furtivité          | Intermédiaire | The Ultimate Heist        | 1,740 XP |
 * | Ranger      | Endurance & Nature           | Avancé        | Hunt of Ancient Beast     | 1,895 XP |
 * | Paladin     | Force Divine & Justice       | Avancé        | Demon Lord's Challenge    | 2,015 XP |
 * | Barbarian   | Puissance Primitive          | Avancé        | Clash of the Titans       | 1,265 XP |
 * | Cleric      | Endurance Divine & Guérison  | Intermédiaire | The Undead Plague         | 1,145 XP |
 * | Druid       | Connexion Nature & Éléments  | Intermédiaire | Elemental Convergence     | 1,155 XP |
 * | Sorcerer    | Énergie Chaotique & Contrôle | Intermédiaire | Chaos Lord's Challenge    | 840 XP   |
 * | Warlock     | Pacte Sombre & Discipline    | Avancé        | The Patron's Final Test   | 1,716 XP |
 * 
 * 🎯 CARACTÉRISTIQUES COMMUNES :
 * - 3 jours d'entraînement thématiques par semaine
 * - 1 boss fight épique en fin de semaine
 * - Modifications pour blessures (genoux/épaules)
 * - Système de progression et streaks
 * - Immersion totale dans l'univers D&D
 */

// ================================
// BARD - COLLEGE OF VALOR
// ================================
const BARD_PROGRAM: WeeklyProgram = {
  id: 'weekly_bard',
  name: 'College of Valor Training',
  dndClass: 'Bard',
  description: 'Versatile training that inspires your party and builds performance stamina',
  difficulty: 'Intermediate',
  theme: 'Musical Performance & Inspiration',
  weeklyWorkouts: [
    // Jour 1: Full Body Performance
    {
      id: 'bard_day1',
      name: 'Inspiring Strength',
      dndClass: 'Bard',
      description: 'Build strength to lead by example',
      segments: [
        {
          id: 'bard_warmup_1',
          name: 'Melodic Warm-up',
          exercises: [
            {
              id: 'bard_vocal_breathing',
              name: 'Vocal Breathing Exercise',
              description: 'Diaphragmatic breathing for performance endurance',
              duration: 180,
              instructions: [
                'Stand tall with shoulders relaxed',
                'Inhale deeply through nose for 4 counts',
                'Hold breath for 4 counts',
                'Exhale through mouth making "ahh" sound for 8 counts',
                'Move arms gracefully while breathing',
                'Focus on expanding ribcage, not just belly'
              ],
              xpReward: 15
            }
          ],
          restTime: 30
        },
        {
          id: 'bard_strength_1',
          name: 'Valor Training',
          exercises: [
            {
              id: 'bard_pushup_performance',
              name: 'Performance Push-ups',
              description: 'Push-ups with rhythm and theatrical flair',
              duration: 120,
              instructions: [
                'Start in plank position, engage your core',
                'Lower down while counting "1-and-2-and-3-and-4"',
                'Push up explosively on the beat',
                'Add a clap at the top if possible',
                'Maintain perfect form - you\'re performing!'
              ],
              modifications: {
                knee: 'Perform on knees, keep the musical rhythm',
                shoulder: 'Wall push-ups with musical counting'
              },
              xpReward: 25
            },
            {
              id: 'bard_squat_dance',
              name: 'Rhythmic Squats',
              description: 'Squats with dance-like movements for stage presence',
              duration: 150,
              instructions: [
                'Feet shoulder-width apart, chest proud',
                'Squat down while swaying side to side gracefully',
                'Rise up with arms reaching overhead dramatically',
                'Add a small hop at the top with jazz hands',
                'Imagine performing for an audience'
              ],
              modifications: {
                knee: 'Shallow squats, no hopping, focus on arm movements'
              },
              xpReward: 20
            }
          ],
          restTime: 60
        },
        {
          id: 'bard_cardio_1',
          name: 'Stage Presence',
          exercises: [
            {
              id: 'bard_dramatic_lunges',
              name: 'Dramatic Lunges',
              description: 'Lunges with theatrical poses',
              duration: 120,
              instructions: [
                'Step forward into deep lunge',
                'Hold pose dramatically for 2 seconds',
                'Add arm flourishes and facial expressions',
                'Step back with grace and control',
                'Alternate legs, maintain character'
              ],
              modifications: {
                knee: 'Shallow lunges, hold onto wall for balance'
              },
              xpReward: 20
            }
          ],
          restTime: 45
        }
      ],
      totalDuration: 735,
      xpReward: 80
    },
    
    // Jour 2: Cardio & Coordination
    {
      id: 'bard_day2',
      name: 'Dance Combat Training',
      dndClass: 'Bard',
      description: 'Improve coordination and cardiovascular endurance',
      segments: [
        {
          id: 'bard_dance_warmup',
          name: 'Performance Warm-up',
          exercises: [
            {
              id: 'bard_arm_circles',
              name: 'Graceful Arm Circles',
              description: 'Warm up shoulders with dancer-like movements',
              duration: 90,
              instructions: [
                'Extend arms out to sides',
                'Make large, controlled circles',
                'Focus on smooth, flowing movements',
                'Reverse direction halfway through',
                'Imagine conducting an orchestra'
              ],
              xpReward: 10
            }
          ],
          restTime: 30
        },
        {
          id: 'bard_cardio_dance',
          name: 'Combat Choreography',
          exercises: [
            {
              id: 'bard_burpee_cheer',
              name: 'Inspiring Burpees',
              description: 'Burpees with motivational self-talk',
              duration: 180,
              instructions: [
                'Start standing, declare "We can do this!"',
                'Drop to plank saying "Together we fight!"',
                'Jump feet forward saying "We rise!"',
                'Jump up with arms raised shouting "Victory!"',
                'Land softly and repeat with enthusiasm'
              ],
              modifications: {
                knee: 'Step back instead of jumping to plank',
                shoulder: 'Skip the overhead jump, focus on the cheer'
              },
              xpReward: 30
            },
            {
              id: 'bard_mountain_climbers',
              name: 'Rapid Spell Components',
              description: 'Mountain climbers mimicking fast spellcasting',
              duration: 120,
              instructions: [
                'Start in plank position',
                'Rapidly alternate bringing knees to chest',
                'Imagine gathering spell components quickly',
                'Keep core tight and hips level',
                'Breathe rhythmically with the movement'
              ],
              modifications: {
                knee: 'Slow the pace, focus on form',
                shoulder: 'Step instead of driving knees'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 510,
      xpReward: 65
    },
    
    // Jour 3: Recovery & Flexibility
    {
      id: 'bard_day3',
      name: 'Restorative Performance',
      dndClass: 'Bard',
      description: 'Active recovery with flexibility and mindfulness',
      segments: [
        {
          id: 'bard_flexibility',
          name: 'Performer\'s Stretch',
          exercises: [
            {
              id: 'bard_yoga_flow',
              name: 'Bardic Yoga Flow',
              description: 'Gentle yoga sequence for performers',
              duration: 300,
              instructions: [
                'Start in mountain pose, arms overhead',
                'Flow into forward fold gracefully',
                'Step back into warrior pose, hold',
                'Transition to downward dog',
                'Flow back to standing with intention',
                'Focus on breath and smooth transitions'
              ],
              modifications: {
                knee: 'Use chair for support, shallow poses',
                shoulder: 'Avoid overhead reaches, focus on legs'
              },
              xpReward: 20
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 360,
      xpReward: 40
    }
  ],
  
  bossChallenge: {
    id: 'bard_boss_performance',
    name: 'The Grand Performance',
    description: 'Face the Ancient Critic in an epic performance battle that tests all your skills',
    theme: 'Ancient Theatre Master',
    exercises: [
      {
        id: 'bard_boss_finale',
        name: 'Epic Performance Finale',
        description: 'Complete this multi-act performance while maintaining energy and perfect form',
        duration: 900,
        instructions: [
          'ACT I: 3 rounds of Performance Push-ups (15 reps each)',
          'ACT II: 2 minutes of continuous Rhythmic Squats',
          'ACT III: 5 rounds of Dramatic Lunges (10 each leg)',
          'FINALE: 1 minute of Inspiring Burpees',
          'ENCORE: 30 seconds of Victory Dance',
          'Must maintain character and enthusiasm throughout!'
        ],
        modifications: {
          knee: 'Reduce all reps by 30%, focus on form and character',
          shoulder: 'Focus on lower body movements and vocal performance'
        },
        xpReward: 300
      }
    ],
    timeLimit: 1200,
    requiredCompletionRate: 80,
    xpReward: 500,
    phases: [
      {
        id: 'bard_boss_act1',
        name: 'Opening Act',
        description: 'Demonstrate your strength',
        exercises: [],
        isOptional: false
      },
      {
        id: 'bard_boss_act2',
        name: 'The Main Performance',
        description: 'Show your endurance',
        exercises: [],
        isOptional: false
      },
      {
        id: 'bard_boss_finale_act',
        name: 'The Grand Finale',
        description: 'Bring it all together',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1185
};

// ================================
// FIGHTER - WARRIOR'S PATH
// ================================
const FIGHTER_PROGRAM: WeeklyProgram = {
  id: 'weekly_fighter',
  name: 'Warrior\'s Training Regiment',
  dndClass: 'Fighter',
  description: 'Build the strength, endurance, and combat readiness of a true warrior',
  difficulty: 'Advanced',
  theme: 'Military Combat Training',
  weeklyWorkouts: [
    // Jour 1: Combat Strength
    {
      id: 'fighter_day1',
      name: 'Combat Conditioning',
      dndClass: 'Fighter',
      description: 'Core strength training for battle readiness',
      segments: [
        {
          id: 'fighter_warmup_1',
          name: 'Battle Preparation',
          exercises: [
            {
              id: 'fighter_march',
              name: 'Warrior\'s March',
              description: 'High knees with military precision',
              duration: 120,
              instructions: [
                'Stand at attention, shoulders back',
                'March in place with high knees',
                'Pump arms in sync with legs',
                'Maintain military posture',
                'Count cadence: "Left, right, left, right!"'
              ],
              xpReward: 15
            }
          ],
          restTime: 30
        },
        {
          id: 'fighter_strength_1',
          name: 'Weapon Training',
          exercises: [
            {
              id: 'fighter_sword_swings',
              name: 'Sword Combat Forms',
              description: 'Shadow boxing with precise sword movements',
              duration: 240,
              instructions: [
                'Stand in fighting stance, feet shoulder-width apart',
                'Perform controlled sword swings in all directions',
                'Overhead strikes, diagonal cuts, thrusts',
                'Engage core with each movement for power',
                'Focus on form, control, and imaginary targets',
                'Alternate between offensive and defensive positions'
              ],
              modifications: {
                shoulder: 'Smaller range of motion, focus on footwork and stance'
              },
              xpReward: 35
            },
            {
              id: 'fighter_shield_wall',
              name: 'Shield Wall Defense',
              description: 'Planks simulating heavy shield holding',
              duration: 180,
              instructions: [
                'Hold plank position with perfect form',
                'Imagine holding a heavy shield against enemy attacks',
                'Keep core tight and back straight',
                'Breathe steadily like maintaining formation',
                'Feel the burn - this is battle endurance',
                'Hold the line, warrior!'
              ],
              modifications: {
                knee: 'Plank on knees, maintain shield visualization',
                shoulder: 'Wall plank standing, focus on core engagement'
              },
              xpReward: 30
            }
          ],
          restTime: 90
        },
        {
          id: 'fighter_combat_drills',
          name: 'Combat Maneuvers',
          exercises: [
            {
              id: 'fighter_combat_rolls',
              name: 'Tactical Combat Rolls',
              description: 'Rolling movements for dodging attacks',
              duration: 150,
              instructions: [
                'Start in squat position',
                'Roll sideways, protecting your head',
                'Come up ready for combat',
                'Alternate rolling directions',
                'Imagine dodging dragon fire or enemy strikes',
                'Stay low and agile'
              ],
              modifications: {
                knee: 'Step-dodge side to side instead of rolling',
                shoulder: 'Focus on footwork and ducking movements'
              },
              xpReward: 25
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 915,
      xpReward: 105
    },
    
    // Jour 2: Warrior Endurance
    {
      id: 'fighter_day2',
      name: 'Battle Endurance',
      dndClass: 'Fighter',
      description: 'Build the stamina needed for long battles',
      segments: [
        {
          id: 'fighter_cardio_1',
          name: 'Campaign March',
          exercises: [
            {
              id: 'fighter_battle_stance',
              name: 'Battle Stance Squats',
              description: 'Deep squats mimicking combat readiness',
              duration: 180,
              instructions: [
                'Feet wider than shoulder-width, warrior stance',
                'Squat down as if dodging under a weapon',
                'Hold bottom position for 2 seconds',
                'Power up like striking an enemy',
                'Keep chest proud, shoulders back',
                'This is functional combat training!'
              ],
              modifications: {
                knee: 'Shallow squats, focus on stance and posture'
              },
              xpReward: 30
            },
            {
              id: 'fighter_charge_run',
              name: 'Cavalry Charge',
              description: 'High-intensity running in place',
              duration: 120,
              instructions: [
                'Run in place with high intensity',
                'Pump arms like charging into battle',
                'Lift knees high, stay light on feet',
                'Imagine charging toward victory',
                'Maintain warrior\'s fierce expression',
                'This is your moment of glory!'
              ],
              modifications: {
                knee: 'March in place with intensity, focus on arm movement'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 390,
      xpReward: 55
    },
    
    // Jour 3: Tactical Recovery
    {
      id: 'fighter_day3',
      name: 'Tactical Recovery',
      dndClass: 'Fighter',
      description: 'Strategic rest and mobility for warriors',
      segments: [
        {
          id: 'fighter_mobility',
          name: 'Armor Flexibility',
          exercises: [
            {
              id: 'fighter_armor_stretch',
              name: 'Post-Battle Stretching',
              description: 'Stretches to maintain mobility in armor',
              duration: 300,
              instructions: [
                'Shoulder rolls and arm circles',
                'Hip circles and leg swings',
                'Gentle twisting for spine mobility',
                'Focus on areas that would be tight in armor',
                'Breathe deeply and visualize recovery',
                'Prepare your body for tomorrow\'s battles'
              ],
              modifications: {
                knee: 'All stretches can be done seated if needed',
                shoulder: 'Focus on lower body and gentle movements'
              },
              xpReward: 20
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 360,
      xpReward: 40
    }
  ],
  
  bossChallenge: {
    id: 'fighter_boss_dragon',
    name: 'The Ancient Dragon Battle',
    description: 'Face the mighty Ancient Red Dragon in an epic multi-phase combat encounter',
    theme: 'Ancient Red Dragon',
    exercises: [
      {
        id: 'fighter_dragon_battle',
        name: 'Epic Dragon Combat',
        description: 'Multi-phase boss battle requiring all warrior skills',
        duration: 1200,
        instructions: [
          'PHASE 1 - Opening Strike: 3 minutes of Sword Combat Forms',
          'PHASE 2 - Dragon\'s Breath: 2 minutes Shield Wall Defense',
          'PHASE 3 - Aerial Assault: 50 Combat Rolls (dodge attacks)',
          'PHASE 4 - Final Charge: 100 Battle Stance Squats',
          'VICTORY LAP: 1 minute Warrior\'s Victory March',
          'Complete all phases without stopping - show no weakness!'
        ],
        modifications: {
          knee: 'Reduce all reps and durations by 40%, focus on form',
          shoulder: 'Focus on lower body phases, modify upper body movements'
        },
        xpReward: 400
      }
    ],
    timeLimit: 1800,
    requiredCompletionRate: 85,
    xpReward: 750,
    phases: [
      {
        id: 'fighter_dragon_phase1',
        name: 'First Strike',
        description: 'Land the opening blow',
        exercises: [],
        isOptional: false
      },
      {
        id: 'fighter_dragon_phase2',
        name: 'Defend the Breath',
        description: 'Survive the dragon\'s fire',
        exercises: [],
        isOptional: false
      },
      {
        id: 'fighter_dragon_phase3',
        name: 'Aerial Combat',
        description: 'Battle the flying dragon',
        exercises: [],
        isOptional: false
      },
      {
        id: 'fighter_dragon_final',
        name: 'The Final Strike',
        description: 'Deliver the killing blow',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1950
};

// ================================
// WIZARD - ARCANE STUDIES
// ================================
const WIZARD_PROGRAM: WeeklyProgram = {
  id: 'weekly_wizard',
  name: 'Arcane Focus Training',
  dndClass: 'Wizard',
  description: 'Mental and physical conditioning for prolonged spellcasting and study',
  difficulty: 'Beginner',
  theme: 'Mystical Scholar Training',
  weeklyWorkouts: [
    // Jour 1: Focus & Concentration
    {
      id: 'wizard_day1',
      name: 'Spell Preparation',
      dndClass: 'Wizard',
      description: 'Focus and concentration exercises for magical studies',
      segments: [
        {
          id: 'wizard_meditation',
          name: 'Arcane Meditation',
          exercises: [
            {
              id: 'wizard_incantation_breathing',
              name: 'Incantation Breathing',
              description: 'Breath control for spellcasting endurance and mana focus',
              duration: 300,
              instructions: [
                'Sit in comfortable meditation pose, spine straight',
                'Breathe in for 6 counts while "gathering mana from the universe"',
                'Hold for 6 counts while "focusing magical energy in your core"',
                'Exhale for 8 counts while "shaping the spell in your mind"',
                'Visualize magical energy flowing through your body',
                'Feel your concentration deepening with each breath'
              ],
              xpReward: 25
            }
          ],
          restTime: 60
        },
        {
          id: 'wizard_dexterity',
          name: 'Somatic Components',
          exercises: [
            {
              id: 'wizard_component_dexterity',
              name: 'Precise Spell Gestures',
              description: 'Hand and finger dexterity for complex spellcasting',
              duration: 240,
              instructions: [
                'Practice precise hand movements for somatic components',
                'Trace magical symbols and runes in the air slowly',
                'Focus on smooth, controlled, deliberate motions',
                'Alternate between both hands for ambidexterity',
                'Imagine you\'re weaving reality with your gestures',
                'Precision over speed - mistakes ruin spells!'
              ],
              modifications: {
                shoulder: 'Use only wrist and finger movements, keep arms relaxed'
              },
              xpReward: 20
            },
            {
              id: 'wizard_balance_focus',
              name: 'Mystical Balance',
              description: 'Balance exercises to improve magical focus',
              duration: 180,
              instructions: [
                'Stand on one foot while maintaining spell pose',
                'Hold arms in casting position',
                'Focus on a fixed point (your "magical target")',
                'Switch feet halfway through',
                'Breathe steadily, don\'t let concentration waver',
                'Balance of body reflects balance of mind and magic'
              ],
              modifications: {
                knee: 'Use wall or chair for light support',
                shoulder: 'Keep arms at sides, focus on leg balance'
              },
              xpReward: 15
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 870,
      xpReward: 60
    },
    
    // Jour 2: Endurance for Long Study Sessions
    {
      id: 'wizard_day2',
      name: 'Scholar\'s Endurance',
      dndClass: 'Wizard',
      description: 'Build stamina for long hours of magical study and research',
      segments: [
        {
          id: 'wizard_posture',
          name: 'Study Posture Training',
          exercises: [
            {
              id: 'wizard_wall_sit',
              name: 'Meditation Wall Sit',
              description: 'Build leg strength for long meditation sessions',
              duration: 150,
              instructions: [
                'Sit against wall with thighs parallel to ground',
                'Keep back straight against wall',
                'Place hands in meditation mudra',
                'Breathe deeply and focus on magical theory',
                'Imagine you\'re in deep study in your tower',
                'Build the endurance to sit and study for hours'
              ],
              modifications: {
                knee: 'Sit higher up the wall, less knee bend',
                shoulder: 'Rest hands on thighs instead of mudra'
              },
              xpReward: 25
            },
            {
              id: 'wizard_desk_pushups',
              name: 'Scholar\'s Desk Push-ups',
              description: 'Counter hunched posture from long study sessions',
              duration: 120,
              instructions: [
                'Place hands on desk or elevated surface',
                'Walk feet back to create angle',
                'Perform push-ups with controlled movement',
                'Focus on opening chest and shoulders',
                'This counters the "hunched over books" posture',
                'Maintain scholarly dignity in your movement'
              ],
              modifications: {
                knee: 'Use higher surface for easier angle',
                shoulder: 'Very gentle range of motion'
              },
              xpReward: 20
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 360,
      xpReward: 45
    },
    
    // Jour 3: Gentle Movement & Recovery
    {
      id: 'wizard_day3',
      name: 'Restorative Magic',
      dndClass: 'Wizard',
      description: 'Gentle movement to restore energy after intense study',
      segments: [
        {
          id: 'wizard_restoration',
          name: 'Healing Stretches',
          exercises: [
            {
              id: 'wizard_gentle_flow',
              name: 'Arcane Energy Flow',
              description: 'Gentle yoga-like movements to restore magical energy',
              duration: 360,
              instructions: [
                'Start standing, reach arms up like channeling energy',
                'Gentle side bends like swaying magical auras',
                'Forward fold slowly, releasing tension',
                'Gentle spinal twists to "unwind magical knots"',
                'Cat-cow stretches to restore spinal flexibility',
                'End in child\'s pose, feeling magically restored'
              ],
              modifications: {
                knee: 'All movements can be done in chair if needed',
                shoulder: 'Skip overhead reaches, focus on gentle movements'
              },
              xpReward: 20
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 420,
      xpReward: 35
    }
  ],
  
  bossChallenge: {
    id: 'wizard_boss_archmage',
    name: 'The Archmage\'s Trial',
    description: 'Face the ancient Archmage in a test of magical endurance and precision',
    theme: 'Ancient Archmage\'s Sanctum',
    exercises: [
      {
        id: 'wizard_spell_duel',
        name: 'Epic Magical Duel',
        description: 'Sustained magical combat requiring focus, precision, and endurance',
        duration: 900,
        instructions: [
          'ROUND 1 - Mana Gathering: 4 minutes of Incantation Breathing',
          'ROUND 2 - Spell Weaving: 3 minutes of Precise Spell Gestures',
          'ROUND 3 - Endurance Test: 2 minutes Meditation Wall Sit while casting',
          'ROUND 4 - Final Spell: 3 minutes combining all previous movements',
          'VICTORY - Magical Restoration: 1 minute of gentle energy flow',
          'Maintain perfect concentration and form throughout!'
        ],
        modifications: {
          knee: 'All exercises can be done seated, focus on upper body',
          shoulder: 'Focus on breathing and mental concentration'
        },
        xpReward: 250
      }
    ],
    timeLimit: 1200,
    requiredCompletionRate: 75,
    xpReward: 450,
    phases: [
      {
        id: 'wizard_boss_gathering',
        name: 'Mana Gathering',
        description: 'Collect magical energy',
        exercises: [],
        isOptional: false
      },
      {
        id: 'wizard_boss_weaving',
        name: 'Spell Weaving',
        description: 'Shape the magical forces',
        exercises: [],
        isOptional: false
      },
      {
        id: 'wizard_boss_endurance',
        name: 'Magical Endurance',
        description: 'Maintain the spell under pressure',
        exercises: [],
        isOptional: false
      },
      {
        id: 'wizard_boss_finale',
        name: 'The Final Incantation',
        description: 'Cast the ultimate spell',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1590
};

// ================================
// MONK - WAY OF THE OPEN HAND
// ================================
const MONK_PROGRAM: WeeklyProgram = {
  id: 'weekly_monk',
  name: 'Way of the Open Hand',
  dndClass: 'Monk',
  description: 'Master body and mind through martial arts, meditation, and ki cultivation',
  difficulty: 'Intermediate',
  theme: 'Martial Arts & Inner Peace',
  weeklyWorkouts: [
    // Jour 1: Martial Arts Forms
    {
      id: 'monk_day1',
      name: 'Morning Forms',
      dndClass: 'Monk',
      description: 'Traditional martial arts kata and flowing movements',
      segments: [
        {
          id: 'monk_centering',
          name: 'Ki Centering',
          exercises: [
            {
              id: 'monk_standing_meditation',
              name: 'Standing Meditation',
              description: 'Center your ki before training',
              duration: 180,
              instructions: [
                'Stand with feet shoulder-width apart, knees slightly bent',
                'Arms relaxed at sides, spine straight but not rigid',
                'Close eyes and focus on your breath',
                'Feel your connection to the earth through your feet',
                'Visualize ki energy gathering in your lower dantian',
                'Find your center of balance and inner calm'
              ],
              xpReward: 20
            }
          ],
          restTime: 30
        },
        {
          id: 'monk_forms',
          name: 'Martial Arts Kata',
          exercises: [
            {
              id: 'monk_shadowboxing',
              name: 'Flowing Shadow Boxing',
              description: 'Martial arts forms with precise, flowing movements',
              duration: 300,
              instructions: [
                'Begin in neutral stance, centered and balanced',
                'Flow through punches, blocks, and kicks slowly',
                'Each movement should be deliberate and controlled',
                'Breathe with your movements - exhale on strikes',
                'Imagine you\'re demonstrating perfect technique',
                'Focus on form, balance, and internal energy flow'
              ],
              modifications: {
                knee: 'No kicks, focus on upper body movements and stances',
                shoulder: 'Gentle arm movements, focus on stepping and balance'
              },
              xpReward: 35
            },
            {
              id: 'monk_balance_training',
              name: 'Crane Stance Training',
              description: 'Single-leg balance poses to develop stability and focus',
              duration: 180,
              instructions: [
                'Stand on one leg in crane pose',
                'Raise other knee to waist height',
                'Hold arms in guard position',
                'Focus eyes on single point ahead',
                'Switch legs halfway through',
                'Feel the stability coming from your core and mind'
              ],
              modifications: {
                knee: 'Use wall for light support, raise leg less high',
                shoulder: 'Keep arms at sides for balance'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        },
        {
          id: 'monk_strength',
          name: 'Iron Body Training',
          exercises: [
            {
              id: 'monk_pushup_variations',
              name: 'Martial Arts Push-ups',
              description: 'Various push-up styles for functional strength',
              duration: 150,
              instructions: [
                'Start with standard push-ups, perfect form',
                'Add diamond push-ups for tricep focus',
                'Wide-grip push-ups for chest development',
                'Each rep should be controlled and mindful',
                'Think of building functional combat strength',
                'Quality over quantity - this isn\'t about ego'
              ],
              modifications: {
                knee: 'All variations can be done on knees',
                shoulder: 'Reduce range of motion, focus on core engagement'
              },
              xpReward: 30
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 1080,
      xpReward: 110
    },
    
    // Jour 2: Ki Cultivation & Cardio
    {
      id: 'monk_day2',
      name: 'Ki Flow Training',
      dndClass: 'Monk',
      description: 'Cardiovascular training with mindful movement',
      segments: [
        {
          id: 'monk_cardio_flow',
          name: 'Moving Meditation',
          exercises: [
            {
              id: 'monk_burpee_flow',
              name: 'Flowing Burpees',
              description: 'Burpees performed as continuous flowing movement',
              duration: 180,
              instructions: [
                'Perform burpees with smooth, controlled transitions',
                'Each movement flows into the next like water',
                'Breathe rhythmically with the movement',
                'No jarring or aggressive motions',
                'Find the meditation within the movement',
                'This is moving zen, not just exercise'
              ],
              modifications: {
                knee: 'Step back to plank instead of jumping',
                shoulder: 'Skip overhead reach, focus on flow'
              },
              xpReward: 35
            },
            {
              id: 'monk_high_knees',
              name: 'Dancing Crane Steps',
              description: 'High knees with martial arts precision',
              duration: 120,
              instructions: [
                'Lift knees high like a prancing crane',
                'Keep upper body upright and centered',
                'Arms move naturally but controlled',
                'Focus on light, springy steps',
                'Maintain awareness of your entire body',
                'Feel the ki energy rising with each step'
              ],
              modifications: {
                knee: 'Lower knee raises, focus on good posture'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 390,
      xpReward: 60
    },
    
    // Jour 3: Flexibility & Inner Peace
    {
      id: 'monk_day3',
      name: 'Inner Peace Cultivation',
      dndClass: 'Monk',
      description: 'Flexibility, meditation, and spiritual development',
      segments: [
        {
          id: 'monk_flexibility',
          name: 'Temple Stretching',
          exercises: [
            {
              id: 'monk_yoga_flow',
              name: 'Monastery Yoga Flow',
              description: 'Gentle yoga sequence for monks',
              duration: 450,
              instructions: [
                'Begin in child\'s pose, humbling yourself',
                'Flow into downward dog, creating space',
                'Step forward into warrior poses with intention',
                'Gentle twists to release tension and toxins',
                'Hip openers for long meditation sessions',
                'End in savasana, complete surrender and peace'
              ],
              modifications: {
                knee: 'Use bolsters and blocks, stay seated for twists',
                shoulder: 'Avoid arm weight-bearing poses'
              },
              xpReward: 30
            },
            {
              id: 'monk_meditation',
              name: 'Closing Meditation',
              description: 'Seated meditation to integrate the practice',
              duration: 300,
              instructions: [
                'Sit in comfortable meditation posture',
                'Hands in mudra of your choice',
                'Focus on natural breath, no forcing',
                'When thoughts arise, acknowledge and release',
                'Feel the ki energy you\'ve cultivated settling',
                'End with gratitude for your body and practice'
              ],
              xpReward: 25
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 810,
      xpReward: 55
    }
  ],
  
  bossChallenge: {
    id: 'monk_boss_master',
    name: 'Trial of the Grand Master',
    description: 'Face the ancient monastery Grand Master in the ultimate test of martial skill and inner peace',
    theme: 'Ancient Monastery Grand Master',
    exercises: [
      {
        id: 'monk_master_trial',
        name: 'The Four Pillars Trial',
        description: 'Master the four pillars of monastic training in sequence',
        duration: 1080,
        instructions: [
          'PILLAR 1 - Form: 4 minutes of perfect Flowing Shadow Boxing',
          'PILLAR 2 - Balance: 3 minutes of Crane Stance (alternating legs)',
          'PILLAR 3 - Strength: 5 minutes of Martial Arts Push-ups',
          'PILLAR 4 - Flow: 4 minutes of Flowing Burpees',
          'ENLIGHTENMENT: 2 minutes of Standing Meditation',
          'Complete with perfect mindfulness and form!'
        ],
        modifications: {
          knee: 'Reduce standing time, use support as needed',
          shoulder: 'Focus on lower body and meditation aspects'
        },
        xpReward: 350
      }
    ],
    timeLimit: 1500,
    requiredCompletionRate: 80,
    xpReward: 600,
    phases: [
      {
        id: 'monk_boss_form',
        name: 'Test of Form',
        description: 'Demonstrate perfect technique',
        exercises: [],
        isOptional: false
      },
      {
        id: 'monk_boss_balance',
        name: 'Test of Balance',
        description: 'Show your stability and focus',
        exercises: [],
        isOptional: false
      },
      {
        id: 'monk_boss_strength',
        name: 'Test of Strength',
        description: 'Prove your physical conditioning',
        exercises: [],
        isOptional: false
      },
      {
        id: 'monk_boss_flow',
        name: 'Test of Flow',
        description: 'Unite all elements in flowing movement',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1825
};

// ================================
// ROGUE - THIEF'S AGILITY
// ================================
const ROGUE_PROGRAM: WeeklyProgram = {
  id: 'weekly_rogue',
  name: 'Shadow Walker Training',
  dndClass: 'Rogue',
  description: 'Develop stealth, agility, and precision for the master infiltrator',
  difficulty: 'Intermediate',
  theme: 'Stealth & Precision Training',
  weeklyWorkouts: [
    // Jour 1: Agility & Stealth
    {
      id: 'rogue_day1',
      name: 'Stealth Training',
      dndClass: 'Rogue',
      description: 'Silent movement and agility exercises',
      segments: [
        {
          id: 'rogue_stealth_prep',
          name: 'Shadow Preparation',
          exercises: [
            {
              id: 'rogue_silent_steps',
              name: 'Silent Step Training',
              description: 'Practice moving without making sound',
              duration: 180,
              instructions: [
                'Walk in place, landing silently on balls of feet',
                'Focus on controlled, deliberate movements',
                'Keep upper body still and centered',
                'Imagine you\'re sneaking past sleeping guards',
                'Every step should be whisper-quiet',
                'Master the art of invisible movement'
              ],
              xpReward: 20
            }
          ],
          restTime: 30
        },
        {
          id: 'rogue_agility',
          name: 'Infiltration Skills',
          exercises: [
            {
              id: 'rogue_parkour_flow',
              name: 'Urban Parkour Simulation',
              description: 'Fluid movement over imaginary obstacles',
              duration: 240,
              instructions: [
                'Imagine navigating rooftops and alleyways',
                'Step-ups onto imaginary ledges',
                'Duck and weave through invisible obstacles',
                'Practice quick direction changes',
                'Low crawling under imaginary barriers',
                'Stay light on your feet, always ready to move'
              ],
              modifications: {
                knee: 'Reduce jumping, focus on upper body movements',
                shoulder: 'Skip crawling, focus on footwork and balance'
              },
              xpReward: 35
            },
            {
              id: 'rogue_quick_hands',
              name: 'Sleight of Hand Training',
              description: 'Dexterity exercises for nimble fingers',
              duration: 120,
              instructions: [
                'Rapid finger movements and hand coordination',
                'Practice picking imaginary locks',
                'Quick wrist rotations and finger stretches',
                'Simulate picking pockets (air movements)',
                'Focus on speed and precision together',
                'Your hands are your most valuable tools'
              ],
              modifications: {
                shoulder: 'Keep movements small and controlled'
              },
              xpReward: 20
            }
          ],
          restTime: 90
        },
        {
          id: 'rogue_core_stability',
          name: 'Acrobatic Core',
          exercises: [
            {
              id: 'rogue_core_twists',
              name: 'Evasion Twists',
              description: 'Core rotations for dodging attacks',
              duration: 150,
              instructions: [
                'Sit with knees bent, lean back slightly',
                'Rotate torso side to side rapidly',
                'Imagine dodging incoming attacks',
                'Keep core engaged throughout',
                'Add speed while maintaining control',
                'This is your evasion training'
              ],
              modifications: {
                knee: 'Keep feet on ground for stability',
                shoulder: 'Smaller range of motion, focus on core'
              },
              xpReward: 25
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 870,
      xpReward: 100
    },
    
    // Jour 2: Speed & Precision
    {
      id: 'rogue_day2',
      name: 'Precision Strike Training',
      dndClass: 'Rogue',
      description: 'Quick bursts of speed and accuracy',
      segments: [
        {
          id: 'rogue_speed_work',
          name: 'Lightning Reflexes',
          exercises: [
            {
              id: 'rogue_speed_punches',
              name: 'Rapid Strike Training',
              description: 'Fast, precise striking combinations',
              duration: 120,
              instructions: [
                'Stand in fighting stance',
                'Throw rapid punch combinations',
                'Focus on speed while maintaining accuracy',
                'Imagine hitting vital points precisely',
                'Each strike should be sharp and controlled',
                'Speed without accuracy is useless to a rogue'
              ],
              modifications: {
                shoulder: 'Reduce range of motion, focus on speed'
              },
              xpReward: 25
            },
            {
              id: 'rogue_sprint_intervals',
              name: 'Escape Sprint Intervals',
              description: 'Short bursts of maximum effort',
              duration: 180,
              instructions: [
                'Run in place at maximum intensity for 20 seconds',
                'Rest for 10 seconds (light jogging)',
                'Repeat this 6 times total',
                'Imagine you\'re escaping after a heist',
                'Each sprint is life or death',
                'Push your limits but stay controlled'
              ],
              modifications: {
                knee: 'March in place with high intensity instead of running'
              },
              xpReward: 30
            }
          ],
          restTime: 120
        }
      ],
      totalDuration: 420,
      xpReward: 55
    },
    
    // Jour 3: Flexibility & Recovery
    {
      id: 'rogue_day3',
      name: 'Shadow Recovery',
      dndClass: 'Rogue',
      description: 'Maintain flexibility for continued stealth operations',
      segments: [
        {
          id: 'rogue_flexibility',
          name: 'Thief\'s Stretching',
          exercises: [
            {
              id: 'rogue_cat_stretch',
              name: 'Cat Burglar Stretches',
              description: 'Feline-inspired flexibility routine',
              duration: 300,
              instructions: [
                'Cat-cow stretches for spinal flexibility',
                'Hip circles for fluid movement',
                'Wrist and ankle rotations for joint health',
                'Gentle twists to maintain core mobility',
                'Think like a cat - always limber and ready',
                'Your flexibility is your escape route'
              ],
              modifications: {
                knee: 'All stretches can be adapted for seated position',
                shoulder: 'Focus on lower body and gentle movements'
              },
              xpReward: 20
            },
            {
              id: 'rogue_meditation',
              name: 'Shadow Meditation',
              description: 'Mental preparation and stealth mindfulness',
              duration: 240,
              instructions: [
                'Sit quietly in dim lighting if possible',
                'Focus on your breath becoming silent',
                'Practice mental stillness and awareness',
                'Listen to every sound around you',
                'Cultivate the patience of the perfect thief',
                'In stillness, you become one with the shadows'
              ],
              xpReward: 15
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 600,
      xpReward: 35
    }
  ],
  
  bossChallenge: {
    id: 'rogue_boss_heist',
    name: 'The Ultimate Heist',
    description: 'Execute the perfect heist against the Master Thief of the Shadow Guild',
    theme: 'Master Thief\'s Fortress',
    exercises: [
      {
        id: 'rogue_perfect_heist',
        name: 'The Perfect Crime',
        description: 'Complete infiltration requiring all rogue skills',
        duration: 900,
        instructions: [
          'INFILTRATION: 3 minutes of Silent Step Training',
          'OBSTACLES: 4 minutes of Urban Parkour Simulation',
          'LOCKPICKING: 2 minutes of Sleight of Hand Training',
          'EVASION: 3 minutes of Evasion Twists',
          'ESCAPE: 3 minutes of Escape Sprint Intervals',
          'Complete without being "detected" (losing form)!'
        ],
        modifications: {
          knee: 'Reduce high-impact movements, focus on stealth aspects',
          shoulder: 'Focus on lower body and core movements'
        },
        xpReward: 300
      }
    ],
    timeLimit: 1200,
    requiredCompletionRate: 85,
    xpReward: 550,
    phases: [
      {
        id: 'rogue_boss_infiltrate',
        name: 'Silent Infiltration',
        description: 'Enter undetected',
        exercises: [],
        isOptional: false
      },
      {
        id: 'rogue_boss_navigate',
        name: 'Navigate Obstacles',
        description: 'Overcome security measures',
        exercises: [],
        isOptional: false
      },
      {
        id: 'rogue_boss_objective',
        name: 'Complete Objective',
        description: 'Achieve the mission goal',
        exercises: [],
        isOptional: false
      },
      {
        id: 'rogue_boss_escape',
        name: 'Perfect Escape',
        description: 'Leave without a trace',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1740
};

// ================================
// RANGER - WILDERNESS SURVIVOR
// ================================
const RANGER_PROGRAM: WeeklyProgram = {
  id: 'weekly_ranger',
  name: 'Wilderness Survival Training',
  dndClass: 'Ranger',
  description: 'Build endurance, tracking skills, and connection with nature',
  difficulty: 'Advanced',
  theme: 'Nature\'s Guardian Training',
  weeklyWorkouts: [
    // Jour 1: Endurance & Tracking
    {
      id: 'ranger_day1',
      name: 'Forest Patrol',
      dndClass: 'Ranger',
      description: 'Long-distance endurance and observation skills',
      segments: [
        {
          id: 'ranger_nature_prep',
          name: 'Nature Attunement',
          exercises: [
            {
              id: 'ranger_breathing',
              name: 'Forest Breathing',
              description: 'Connect with natural rhythms through breath',
              duration: 240,
              instructions: [
                'Stand tall like a tree, feet rooted',
                'Breathe deeply, imagining forest air',
                'Inhale the energy of growing things',
                'Exhale stress and urban toxins',
                'Feel your connection to the natural world',
                'This is where your true strength comes from'
              ],
              xpReward: 20
            }
          ],
          restTime: 30
        },
        {
          id: 'ranger_endurance',
          name: 'Trail Endurance',
          exercises: [
            {
              id: 'ranger_hiking_simulation',
              name: 'Long Trail Hike',
              description: 'Sustained cardio mimicking wilderness travel',
              duration: 480,
              instructions: [
                'March in place with hiking rhythm',
                'Pump arms like using trekking poles',
                'Vary intensity like traversing different terrain',
                'Imagine climbing hills, crossing streams',
                'Maintain steady pace you could keep for hours',
                'This is the ranger\'s foundation - endurance'
              ],
              modifications: {
                knee: 'Reduce intensity, focus on arm movements and rhythm'
              },
              xpReward: 40
            },
            {
              id: 'ranger_archery_stance',
              name: 'Archery Training',
              description: 'Build shoulder and back strength for bow work',
              duration: 180,
              instructions: [
                'Stand in archery stance, feet perpendicular to target',
                'Draw imaginary bow, engaging back muscles',
                'Hold draw for 3 seconds, focusing on target',
                'Release smoothly and follow through',
                'Each shot should be perfect, patient, precise',
                'Visualize your arrow flying true every time'
              ],
              modifications: {
                shoulder: 'Reduce range of motion, focus on posture'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        },
        {
          id: 'ranger_functional',
          name: 'Wilderness Skills',
          exercises: [
            {
              id: 'ranger_bear_crawl',
              name: 'Animal Movement Training',
              description: 'Move like the creatures you track',
              duration: 120,
              instructions: [
                'Bear crawl forward with control',
                'Keep core tight, move with purpose',
                'Imagine tracking dangerous prey',
                'Stay low and quiet like a predator',
                'Feel your primal movement patterns',
                'This is how our ancestors moved'
              ],
              modifications: {
                knee: 'Crawl on hands and knees instead',
                shoulder: 'Focus on leg movements, use wall for support'
              },
              xpReward: 20
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 1290,
      xpReward: 105
    },
    
    // Jour 2: Survival Skills
    {
      id: 'ranger_day2',
      name: 'Survival Training',
      dndClass: 'Ranger',
      description: 'Functional strength for wilderness survival',
      segments: [
        {
          id: 'ranger_survival',
          name: 'Bushcraft Training',
          exercises: [
            {
              id: 'ranger_wood_chopping',
              name: 'Axe Work Simulation',
              description: 'Overhead movements for chopping wood',
              duration: 180,
              instructions: [
                'Stand with feet wide, core engaged',
                'Raise arms overhead like holding an axe',
                'Chop down with control and power',
                'Engage your entire body in the movement',
                'Imagine splitting logs for survival',
                'Each swing must be efficient and strong'
              ],
              modifications: {
                shoulder: 'Reduce range of motion, focus on core engagement',
                knee: 'Use wall for balance if needed'
              },
              xpReward: 25
            },
            {
              id: 'ranger_heavy_carry',
              name: 'Pack Carrying Simulation',
              description: 'Strengthen back and legs for heavy loads',
              duration: 120,
              instructions: [
                'Squat down as if picking up a heavy pack',
                'Stand up with perfect posture',
                'Walk in place carrying imaginary weight',
                'Keep chest proud, shoulders back',
                'This simulates carrying game or supplies',
                'Rangers must be strong pack animals'
              ],
              modifications: {
                knee: 'Shallow squats, focus on posture'
              },
              xpReward: 20
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 390,
      xpReward: 45
    },
    
    // Jour 3: Natural Recovery
    {
      id: 'ranger_day3',
      name: 'Nature\'s Restoration',
      dndClass: 'Ranger',
      description: 'Recovery and connection with natural rhythms',
      segments: [
        {
          id: 'ranger_restoration',
          name: 'Forest Therapy',
          exercises: [
            {
              id: 'ranger_tree_pose',
              name: 'Ancient Tree Meditation',
              description: 'Balance and grounding like an ancient tree',
              duration: 300,
              instructions: [
                'Stand on one leg, other foot on ankle or thigh',
                'Reach arms up like branches',
                'Sway gently like a tree in the wind',
                'Feel your roots going deep into earth',
                'Switch legs and feel the other side',
                'Trees teach us patience and deep strength'
              ],
              modifications: {
                knee: 'Use wall for support, keep planted foot flat',
                shoulder: 'Keep arms at heart center instead of overhead'
              },
              xpReward: 25
            },
            {
              id: 'ranger_nature_walk',
              name: 'Mindful Nature Walking',
              description: 'Slow, mindful movement with nature awareness',
              duration: 360,
              instructions: [
                'Walk very slowly and deliberately',
                'Step heel-to-toe with perfect balance',
                'Notice everything - sounds, smells, sensations',
                'Move like you\'re in sacred forest',
                'Each step should be mindful and grateful',
                'Connect deeply with the earth beneath you'
              ],
              modifications: {
                knee: 'Can be done seated, focus on upper body awareness'
              },
              xpReward: 20
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 720,
      xpReward: 45
    }
  ],
  
  bossChallenge: {
    id: 'ranger_boss_beast',
    name: 'Hunt of the Ancient Beast',
    description: 'Track and face the legendary Ancient Forest Guardian in its domain',
    theme: 'Ancient Forest Guardian',
    exercises: [
      {
        id: 'ranger_ancient_hunt',
        name: 'The Great Hunt',
        description: 'Multi-phase wilderness encounter requiring all ranger skills',
        duration: 1200,
        instructions: [
          'TRACKING: 4 minutes of Mindful Nature Walking (find the trail)',
          'PURSUIT: 6 minutes of Long Trail Hike (chase through forest)',
          'CONFRONTATION: 5 minutes alternating Archery Training & Wood Chopping',
          'RESPECT: 3 minutes of Ancient Tree Meditation (honor the fallen)',
          'Complete the circle of nature - hunt with respect!'
        ],
        modifications: {
          knee: 'Reduce all high-impact movements, focus on upper body',
          shoulder: 'Focus on endurance and meditation aspects'
        },
        xpReward: 400
      }
    ],
    timeLimit: 1800,
    requiredCompletionRate: 85,
    xpReward: 700,
    phases: [
      {
        id: 'ranger_boss_track',
        name: 'The Tracking',
        description: 'Find the ancient beast\'s trail',
        exercises: [],
        isOptional: false
      },
      {
        id: 'ranger_boss_pursuit',
        name: 'The Pursuit',
        description: 'Chase through the deep forest',
        exercises: [],
        isOptional: false
      },
      {
        id: 'ranger_boss_confrontation',
        name: 'The Confrontation',
        description: 'Face the mighty guardian',
        exercises: [],
        isOptional: false
      },
      {
        id: 'ranger_boss_respect',
        name: 'The Circle Complete',
        description: 'Honor the natural order',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 1895
};

// ================================
// PALADIN - OATH OF DEVOTION
// ================================
const PALADIN_PROGRAM: WeeklyProgram = {
  id: 'weekly_paladin',
  name: 'Sacred Oath Training',
  dndClass: 'Paladin',
  description: 'Build divine strength and unwavering resolve to protect the innocent',
  difficulty: 'Advanced',
  theme: 'Divine Champion Training',
  weeklyWorkouts: [
    // Jour 1: Divine Strength
    {
      id: 'paladin_day1',
      name: 'Sacred Strength',
      dndClass: 'Paladin',
      description: 'Build the strength needed to be a divine champion',
      segments: [
        {
          id: 'paladin_prayer',
          name: 'Morning Prayer',
          exercises: [
            {
              id: 'paladin_devotion',
              name: 'Prayer of Dedication',
              description: 'Center yourself in divine purpose',
              duration: 180,
              instructions: [
                'Kneel in prayer position, hands clasped',
                'Breathe deeply and focus on your sacred oath',
                'Feel divine energy flowing through you',
                'Dedicate this training to protecting others',
                'Rise with renewed purpose and strength',
                'You are the shield between good and evil'
              ],
              xpReward: 20
            }
          ],
          restTime: 30
        },
        {
          id: 'paladin_strength',
          name: 'Divine Power Training',
          exercises: [
            {
              id: 'paladin_shield_work',
              name: 'Sacred Shield Training',
              description: 'Build strength to protect with divine power',
              duration: 240,
              instructions: [
                'Hold plank position like holding a massive shield',
                'Visualize protecting innocent villagers behind you',
                'Feel divine energy strengthening your resolve',
                'Every second you hold protects someone else',
                'Your strength is not for yourself but for others',
                'Channel the power of your deity through your body'
              ],
              modifications: {
                knee: 'Plank on knees, focus on divine purpose',
                shoulder: 'Wall plank, maintain sacred visualization'
              },
              xpReward: 35
            },
            {
              id: 'paladin_hammer_strikes',
              name: 'Divine Hammer Training',
              description: 'Overhead strikes with righteous power',
              duration: 180,
              instructions: [
                'Stand with feet wide, raise arms overhead',
                'Strike down with force like wielding a divine hammer',
                'Each strike banishes evil from the world',
                'Engage your entire body in righteous combat',
                'Feel the weight of divine justice in your blows',
                'Your strength serves the greater good'
              ],
              modifications: {
                shoulder: 'Reduce range, focus on core and leg engagement'
              },
              xpReward: 30
            }
          ],
          restTime: 90
        },
        {
          id: 'paladin_endurance',
          name: 'Steadfast Endurance',
          exercises: [
            {
              id: 'paladin_guardian_stance',
              name: 'Guardian\'s Wall Sit',
              description: 'Unwavering endurance to stand guard',
              duration: 150,
              instructions: [
                'Wall sit with perfect posture',
                'Imagine you\'re the last line of defense',
                'Feel your legs burning but stand firm',
                'Your endurance protects those who cannot protect themselves',
                'Pain is temporary, your duty is eternal',
                'Hold the line no matter what'
              ],
              modifications: {
                knee: 'Sit higher up the wall, reduce knee bend'
              },
              xpReward: 25
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 960,
      xpReward: 110
    },
    
    // Jour 2: Righteous Conditioning
    {
      id: 'paladin_day2',
      name: 'Righteous Conditioning',
      dndClass: 'Paladin',
      description: 'Cardiovascular training for sustained divine combat',
      segments: [
        {
          id: 'paladin_cardio',
          name: 'Divine Charge Training',
          exercises: [
            {
              id: 'paladin_charge_burpees',
              name: 'Divine Charge Burpees',
              description: 'Explosive burpees with righteous purpose',
              duration: 180,
              instructions: [
                'Perform burpees with divine conviction',
                'Each rep is a charge toward evil',
                'Explode up with righteous energy',
                'Land ready to protect and serve',
                'Your cardiovascular strength saves lives',
                'Fight fatigue like you fight darkness'
              ],
              modifications: {
                knee: 'Step back to plank instead of jumping',
                shoulder: 'Focus on the leg movements and divine purpose'
              },
              xpReward: 35
            },
            {
              id: 'paladin_holy_squats',
              name: 'Squats of Sacred Duty',
              description: 'Powerful squats with divine purpose',
              duration: 150,
              instructions: [
                'Squat with the weight of sacred responsibility',
                'Rise up with divine power flowing through you',
                'Each rep makes you stronger to serve others',
                'Feel your legs growing powerful like pillars of justice',
                'Your strength upholds the forces of good',
                'Every squat is an oath renewed'
              ],
              modifications: {
                knee: 'Shallow squats, focus on divine purpose'
              },
              xpReward: 25
            }
          ],
          restTime: 120
        }
      ],
      totalDuration: 450,
      xpReward: 60
    },
    
    // Jour 3: Sacred Recovery
    {
      id: 'paladin_day3',
      name: 'Divine Restoration',
      dndClass: 'Paladin',
      description: 'Recovery and spiritual renewal',
      segments: [
        {
          id: 'paladin_restoration',
          name: 'Sacred Healing',
          exercises: [
            {
              id: 'paladin_healing_flow',
              name: 'Divine Healing Flow',
              description: 'Gentle movements to channel healing energy',
              duration: 360,
              instructions: [
                'Move slowly and deliberately like channeling healing magic',
                'Reach up to gather divine energy from above',
                'Flow into gentle stretches that restore your body',
                'Feel divine healing flowing through every muscle',
                'Your body is a temple that must be maintained',
                'Recovery is as sacred as training'
              ],
              modifications: {
                knee: 'All movements can be adapted for seated position',
                shoulder: 'Focus on lower body and gentle breathing'
              },
              xpReward: 25
            },
            {
              id: 'paladin_meditation',
              name: 'Sacred Contemplation',
              description: 'Meditation on divine purpose and oath',
              duration: 300,
              instructions: [
                'Sit in quiet contemplation of your sacred oath',
                'Reflect on why you choose to protect others',
                'Feel the divine presence guiding your path',
                'Renew your commitment to justice and goodness',
                'Your spiritual strength is as important as physical',
                'In stillness, you connect with the divine'
              ],
              xpReward: 20
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 720,
      xpReward: 45
    }
  ],
  
  bossChallenge: {
    id: 'paladin_boss_demon',
    name: 'The Demon Lord\'s Challenge',
    description: 'Face the ancient Demon Lord in ultimate battle between good and evil',
    theme: 'Ancient Demon Lord',
    exercises: [
      {
        id: 'paladin_holy_war',
        name: 'The Final Battle',
        description: 'Epic confrontation requiring all divine powers',
        duration: 1200,
        instructions: [
          'DIVINE SHIELD: 4 minutes of Sacred Shield Training',
          'RIGHTEOUS FURY: 3 minutes of Divine Hammer Training',
          'HOLD THE LINE: 3 minutes of Guardian Wall Sit',
          'DIVINE CHARGE: 4 minutes of Divine Charge Burpees',
          'VICTORY PRAYER: 2 minutes of Sacred Contemplation',
          'Fight with divine purpose - good must triumph!'
        ],
        modifications: {
          knee: 'Reduce all high-impact movements, focus on spiritual aspects',
          shoulder: 'Focus on lower body and meditation components'
        },
        xpReward: 450
      }
    ],
    timeLimit: 1800,
    requiredCompletionRate: 90,
    xpReward: 800,
    phases: [
      {
        id: 'paladin_boss_shield',
        name: 'Divine Protection',
        description: 'Defend against demonic assault',
        exercises: [],
        isOptional: false
      },
      {
        id: 'paladin_boss_fury',
        name: 'Righteous Fury',
        description: 'Strike with divine wrath',
        exercises: [],
        isOptional: false
      },
      {
        id: 'paladin_boss_endurance',
        name: 'Unwavering Faith',
        description: 'Stand firm against darkness',
        exercises: [],
        isOptional: false
      },
      {
        id: 'paladin_boss_triumph',
        name: 'Divine Triumph',
        description: 'Victory of light over darkness',
        exercises: [],
        isOptional: false
      }
    ]
  },
  
  totalXPReward: 2015
};

// ================================
// BARBARIAN - PATH OF THE BERSERKER
// ================================
const BARBARIAN_PROGRAM: WeeklyProgram = {
  id: 'weekly_barbarian',
  name: 'Primal Fury Training',
  dndClass: 'Barbarian',
  description: 'Unleash your inner beast with raw, primal strength training',
  difficulty: 'Advanced',
  theme: 'Primal Warrior Training',
  weeklyWorkouts: [
    {
      id: 'barbarian_day1',
      name: 'Rage Training',
      dndClass: 'Barbarian',
      description: 'Channel your inner rage into pure strength',
      segments: [
        {
          id: 'barbarian_rage',
          name: 'Berserker\'s Fury',
          exercises: [
            {
              id: 'barbarian_primal_roar',
              name: 'Primal Battle Roar',
              description: 'Release your inner beast with power',
              duration: 120,
              instructions: [
                'Stand wide, beat chest like a gorilla',
                'Let out your most primal roar',
                'Feel the rage building in your core',
                'This is not civilized - this is pure power',
                'Channel your ancestral warrior spirit',
                'Be the storm, be the earthquake'
              ],
              xpReward: 20
            },
            {
              id: 'barbarian_berserker_pushups',
              name: 'Berserker Push-ups',
              description: 'Explosive push-ups with primal fury',
              duration: 180,
              instructions: [
                'Drop and explode up with each push-up',
                'Grunt and growl with each rep',
                'Feel the beast taking over',
                'Raw power, not pretty form',
                'Your rage fuels your strength',
                'Civilization is for the weak!'
              ],
              modifications: {
                knee: 'Maintain the intensity on knees',
                shoulder: 'Focus on the primal energy and core'
              },
              xpReward: 35
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 390,
      xpReward: 65
    }
  ],
  bossChallenge: {
    id: 'barbarian_boss_titan',
    name: 'Clash of the Titans',
    description: 'Face the Ancient Earth Titan in primal combat',
    theme: 'Ancient Earth Titan',
    exercises: [{
      id: 'barbarian_titan_clash',
      name: 'Titan Smash',
      description: 'All-out berserker assault',
      duration: 600,
      instructions: [
        'RAGE: Unlimited fury for 10 minutes',
        'Cycle through all barbarian exercises',
        'No rest, no mercy, no civilization',
        'Raw power until the titan falls!'
      ],
      xpReward: 300
    }],
    timeLimit: 900,
    requiredCompletionRate: 80,
    xpReward: 600
  },
  totalXPReward: 1265
};

// ================================
// CLERIC - DIVINE DOMAIN
// ================================
const CLERIC_PROGRAM: WeeklyProgram = {
  id: 'weekly_cleric',
  name: 'Divine Service Training',
  dndClass: 'Cleric',
  description: 'Build endurance to serve your deity and heal your allies',
  difficulty: 'Intermediate',
  theme: 'Divine Healer Training',
  weeklyWorkouts: [
    {
      id: 'cleric_day1',
      name: 'Healing Preparation',
      dndClass: 'Cleric',
      description: 'Build the stamina needed for long healing sessions',
      segments: [
        {
          id: 'cleric_service',
          name: 'Divine Service',
          exercises: [
            {
              id: 'cleric_healing_hands',
              name: 'Healing Hands Training',
              description: 'Build endurance for channeling divine energy',
              duration: 300,
              instructions: [
                'Hold arms extended like channeling healing',
                'Feel divine energy flowing through your hands',
                'Visualize healing light radiating outward',
                'Your endurance saves lives',
                'Hold steady - someone depends on you',
                'Divine power flows through willing vessels'
              ],
              modifications: {
                shoulder: 'Support arms on table, focus on divine connection'
              },
              xpReward: 30
            }
          ],
          restTime: 60
        }
      ],
      totalDuration: 360,
      xpReward: 45
    }
  ],
  bossChallenge: {
    id: 'cleric_boss_undead',
    name: 'The Undead Plague',
    description: 'Use divine power to cleanse an undead epidemic',
    theme: 'Lich Lord\'s Plague',
    exercises: [{
      id: 'cleric_mass_healing',
      name: 'Mass Healing Event',
      description: 'Channel divine energy to save everyone',
      duration: 900,
      instructions: [
        'Channel healing for 15 minutes straight',
        'No one dies on your watch',
        'Your faith is their salvation',
        'Divine endurance test!'
      ],
      xpReward: 400
    }],
    timeLimit: 1200,
    requiredCompletionRate: 85,
    xpReward: 700
  },
  totalXPReward: 1145
};

// ================================
// DRUID - CIRCLE OF THE MOON
// ================================
const DRUID_PROGRAM: WeeklyProgram = {
  id: 'weekly_druid',
  name: 'Natural Harmony Training',
  dndClass: 'Druid',
  description: 'Connect with nature\'s power through animal movements and elemental flow',
  difficulty: 'Intermediate',
  theme: 'Shapeshifter Training',
  weeklyWorkouts: [
    {
      id: 'druid_day1',
      name: 'Animal Forms',
      dndClass: 'Druid',
      description: 'Master the movements of wild creatures',
      segments: [
        {
          id: 'druid_wildshape',
          name: 'Wild Shape Training',
          exercises: [
            {
              id: 'druid_bear_crawl',
              name: 'Bear Form Training',
              description: 'Channel the power of the great bear',
              duration: 180,
              instructions: [
                'Move like a massive bear',
                'Feel the earth beneath your paws',
                'Raw power and primal strength',
                'You ARE the bear',
                'Protect the forest with bear strength',
                'Growl if it helps you connect'
              ],
              modifications: {
                knee: 'Crawl on hands and knees, maintain bear spirit'
              },
              xpReward: 25
            },
            {
              id: 'druid_eagle_pose',
              name: 'Eagle Soaring',
              description: 'Balance and grace of the soaring eagle',
              duration: 120,
              instructions: [
                'Balance on one leg with arms spread wide',
                'Soar like an eagle over the landscape',
                'Feel the wind beneath your wings',
                'Switch legs like changing flight patterns',
                'See the world from eagle\'s perspective',
                'Freedom and power of flight'
              ],
              modifications: {
                knee: 'Use wall for support'
              },
              xpReward: 20
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 390,
      xpReward: 55
    }
  ],
  bossChallenge: {
    id: 'druid_boss_elemental',
    name: 'The Elemental Convergence',
    description: 'Balance all four elements in ultimate natural harmony',
    theme: 'Primordial Elemental Lords',
    exercises: [{
      id: 'druid_elemental_balance',
      name: 'Master of Elements',
      description: 'Channel earth, air, fire, and water',
      duration: 960,
      instructions: [
        'EARTH: 4 minutes Bear Form (strength)',
        'AIR: 4 minutes Eagle Soaring (grace)',
        'FIRE: 4 minutes rapid movements (passion)',
        'WATER: 4 minutes flowing yoga (adaptation)',
        'Unite all elements in harmony!'
      ],
      xpReward: 350
    }],
    timeLimit: 1200,
    requiredCompletionRate: 75,
    xpReward: 550
  },
  totalXPReward: 1155
};

// ================================
// SORCERER - WILD MAGIC
// ================================
const SORCERER_PROGRAM: WeeklyProgram = {
  id: 'weekly_sorcerer',
  name: 'Chaotic Energy Training',
  dndClass: 'Sorcerer',
  description: 'Harness and control the wild magic flowing through your veins',
  difficulty: 'Intermediate',
  theme: 'Wild Magic Control',
  weeklyWorkouts: [
    {
      id: 'sorcerer_day1',
      name: 'Magic Surge Training',
      dndClass: 'Sorcerer',
      description: 'Learn to control unpredictable magical energy',
      segments: [
        {
          id: 'sorcerer_energy',
          name: 'Energy Control',
          exercises: [
            {
              id: 'sorcerer_energy_bursts',
              name: 'Magical Energy Bursts',
              description: 'Quick bursts of movement like magic surges',
              duration: 180,
              instructions: [
                'Perform explosive movements randomly',
                'Jumping jacks, squats, punches - mix it up',
                'Change movements every 10 seconds',
                'Like magic surging through your body',
                'Embrace the chaos of wild magic',
                'Control the uncontrollable'
              ],
              modifications: {
                knee: 'Reduce jumping, focus on arm movements'
              },
              xpReward: 30
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 270,
      xpReward: 40
    }
  ],
  bossChallenge: {
    id: 'sorcerer_boss_chaos',
    name: 'The Chaos Lord\'s Challenge',
    description: 'Master pure chaotic energy in ultimate magical duel',
    theme: 'Lord of Chaos',
    exercises: [{
      id: 'sorcerer_chaos_mastery',
      name: 'Chaos Magic Mastery',
      description: 'Control complete magical chaos',
      duration: 720,
      instructions: [
        'Random exercise every 30 seconds for 12 minutes',
        'No pattern, pure chaos',
        'Master the unpredictable',
        'Become one with wild magic!'
      ],
      xpReward: 300
    }],
    timeLimit: 900,
    requiredCompletionRate: 70,
    xpReward: 500
  },
  totalXPReward: 840
};

// ================================
// WARLOCK - THE FIEND PATRON
// ================================
const WARLOCK_PROGRAM: WeeklyProgram = {
  id: 'weekly_warlock',
  name: 'Pact Training',
  dndClass: 'Warlock',
  description: 'Fulfill your dark pact through disciplined, focused training',
  difficulty: 'Advanced',
  theme: 'Dark Pact Training',
  weeklyWorkouts: [
    {
      id: 'warlock_day1',
      name: 'Pact Obligation',
      dndClass: 'Warlock',
      description: 'Train to fulfill your end of the bargain',
      segments: [
        {
          id: 'warlock_pact',
          name: 'Dark Power',
          exercises: [
            {
              id: 'warlock_eldritch_blast',
              name: 'Eldritch Blast Training',
              description: 'Channel otherworldly power through focused strikes',
              duration: 240,
              instructions: [
                'Thrust forward with precision and dark intent',
                'Each movement channels eldritch energy',
                'Feel the patron\'s power flowing through you',
                'Precise, controlled, otherworldly',
                'This power comes with a price',
                'Your patron expects excellence'
              ],
              modifications: {
                shoulder: 'Reduce range, focus on precision'
              },
              xpReward: 35
            }
          ],
          restTime: 90
        }
      ],
      totalDuration: 330,
      xpReward: 50
    }
  ],
  bossChallenge: {
    id: 'warlock_boss_patron',
    name: 'The Patron\'s Final Test',
    description: 'Prove your worth to your otherworldly patron',
    theme: 'The Great Old One',
    exercises: [{
      id: 'warlock_final_pact',
      name: 'Ultimate Pact Fulfillment',
      description: 'Complete your dark bargain',
      duration: 666, // Thematic number
      instructions: [
        'Channel pure eldritch power for 11 minutes 6 seconds',
        'Your patron watches and judges',
        'Fail and lose your power',
        'Succeed and gain ultimate knowledge'
      ],
      xpReward: 666
    }],
    timeLimit: 900,
    requiredCompletionRate: 95, // Patrons are demanding
    xpReward: 1000
  },
  totalXPReward: 1716
};

// Export the programs (now complete with all classes)
export const WEEKLY_PROGRAMS: Partial<Record<DnDClass, WeeklyProgram>> = {
  'Bard': BARD_PROGRAM,
  'Fighter': FIGHTER_PROGRAM,
  'Wizard': WIZARD_PROGRAM,
  'Monk': MONK_PROGRAM,
  'Rogue': ROGUE_PROGRAM,
  'Ranger': RANGER_PROGRAM,
  'Paladin': PALADIN_PROGRAM,
  'Barbarian': BARBARIAN_PROGRAM,
  'Cleric': CLERIC_PROGRAM,
  'Druid': DRUID_PROGRAM,
  'Sorcerer': SORCERER_PROGRAM,
  'Warlock': WARLOCK_PROGRAM,
};

// Helper function to get program by class
export function getWeeklyProgram(dndClass: DnDClass): WeeklyProgram | undefined {
  return WEEKLY_PROGRAMS[dndClass];
}

// Get all available programs
export function getAllWeeklyPrograms(): WeeklyProgram[] {
  return Object.values(WEEKLY_PROGRAMS).filter(Boolean) as WeeklyProgram[];
}