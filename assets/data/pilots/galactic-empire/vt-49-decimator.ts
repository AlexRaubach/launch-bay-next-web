import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'VT-49 Decimator',
  xws: 'vt49decimator',
  ffg: 28,
  size: 'Large',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Decimator.png',
  pilots: [
    {
      name: 'Captain Oicunn',
      caption: 'Inspired Tactician',
      initiative: 3,
      limited: 1,
      cost: 74,
      xws: 'captainoicunn',
      ability: 'You can perform primary attacks at range 0.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_146.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_146.jpg',
      ffg: 146,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Patrol Leader',
      initiative: 2,
      limited: 0,
      cost: 67,
      xws: 'patrolleader',
      text:
        'To be granted command of a VT-49 Decimator is seen as a significant promotion for a middling officer of the Imperial Navy.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_148.png',
      slots: [
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_148.jpg',
      ffg: 148,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Rear Admiral Chiraneau',
      caption: 'Advisor to Admiral Piett',
      initiative: 5,
      limited: 1,
      cost: 76,
      xws: 'rearadmiralchiraneau',
      ability:
        'While you perform an attack, if you are reinforced and the defender is in the [Full Front Arc] or [Full Rear Arc] matching your reinforce token, you may change 1 of your [Focus] results to a [Critical Hit] result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_147.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_147.jpg',
      ffg: 147,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Morna Kee',
      caption: 'Determined Attaché',
      initiative: 4,
      limited: 1,
      cost: 75,
      xws: 'mornakee',
      ability:
        'During the End Phase, you may spend 1 [Charge] to flip 1 of your reinforce tokens to your other full arc instead of removing it.',
      charges: { value: 3, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Crew',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Title',
      ],
      hyperspace: true,
      epic: true,
      ffg: 634,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/5a913f54447ec375ccc1403769438f81.png',
    },
  ],
};

export default t;
