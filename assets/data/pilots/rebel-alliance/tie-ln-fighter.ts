import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ln Fighter',
  xws: 'tielnfighter',
  ffg: 11,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
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
    '3KR',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEFighter.png',
  pilots: [
    {
      name: '"Zeb" Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 24,
      xws: 'zeborrelios-tielnfighter',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_49.png',
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_49.jpg',
      ffg: 49,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Captain Rex',
      caption: 'Clone Wars Veteran',
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'captainrex',
      ability:
        'After you perform an attack, assign the Suppressive Fire condition to the defender.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_48.png',
      conditions: ['suppressivefire'],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_48.jpg',
      ffg: 48,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'ezrabridger-tielnfighter',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_46.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Force Power', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_46.jpg',
      ffg: 46,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Sabine Wren',
      caption: 'Spectre-5',
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'sabinewren-tielnfighter',
      ability:
        'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_47.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_47.jpg',
      ffg: 47,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
