import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ag Aggressor',
  xws: 'tieagaggressor',
  ffg: 29,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAggressor.png',
  pilots: [
    {
      name: '"Double Edge"',
      caption: 'Contingency Planner',
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'doubleedge',
      ability:
        'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_128.png',
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_128.jpg',
      ffg: 128,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Lieutenant Kestal',
      caption: 'Innate Deadeye',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'lieutenantkestal',
      ability:
        "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_127.png',
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_127.jpg',
      ffg: 127,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Onyx Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'onyxsquadronscout',
      text:
        'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_129.png',
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Gunner',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_129.jpg',
      ffg: 129,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Sienar Specialist',
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'sienarspecialist',
      text:
        'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_130.png',
      slots: ['Turret', 'Missile', 'Missile', 'Gunner', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_130.jpg',
      ffg: 130,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
