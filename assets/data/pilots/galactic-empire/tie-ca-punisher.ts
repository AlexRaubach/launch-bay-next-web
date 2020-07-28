import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ca Punisher',
  xws: 'tiecapunisher',
  ffg: 20,
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Boost',
    },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPunisher.png',
  pilots: [
    {
      name: '"Deathrain"',
      caption: 'Dexterous Bombardier',
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'deathrain',
      ability: 'After you drop or launch a device, you may perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_140.png',
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_140.jpg',
      ffg: 140,
      hyperspace: false,
      epic: true,
    },
    {
      name: '"Redline"',
      caption: 'Adrenaline Junkie',
      initiative: 5,
      limited: 1,
      cost: 51,
      xws: 'redline',
      ability:
        'You can maintain up to 2 locks. After you perform an action, you may acquire a lock.',
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_139.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_139.jpg',
      ffg: 139,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Cutlass Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 35,
      xws: 'cutlasssquadronpilot',
      text:
        "The TIE punisher's design builds upon the success of the TIE bomber, adding shielding, a second bomb chute, and three additional ordnance pods, each equipped with a twin ion engine.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_141.png',
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_141.jpg',
      ffg: 141,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
