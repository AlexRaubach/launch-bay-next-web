import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Dorsal Turret',
    limited: 0,
    xws: 'dorsalturret',
    sides: [
      {
        title: 'Dorsal Turret',
        type: 'Turret',
        ability: 'Attack',
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_31.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_31.jpg',
        ffg: 260,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Ion Cannon Turret',
    limited: 0,
    xws: 'ioncannonturret',
    sides: [
      {
        title: 'Ion Cannon Turret',
        type: 'Turret',
        ability:
          'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_32.png',
        slots: ['Turret'],
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_32.jpg',
        ffg: 261,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
];

export default t;
