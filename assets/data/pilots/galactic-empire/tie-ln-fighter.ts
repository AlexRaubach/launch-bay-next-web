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
  faction: 'Galactic Empire',
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
      name: '"Howlrunner"',
      caption: 'Obsidian Leader',
      initiative: 5,
      limited: 1,
      cost: 46,
      xws: 'howlrunner',
      ability:
        'While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_81.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_81.jpg',
      ffg: 81,
      hyperspace: false,
      epic: true,
    },
    {
      name: '"Mauler" Mithel',
      caption: 'Black Two',
      initiative: 5,
      limited: 1,
      cost: 31,
      xws: 'maulermithel',
      ability:
        'While you perform an attack at attack range 1, roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_80.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_80.jpg',
      ffg: 80,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Night Beast"',
      caption: 'Obsidian Two',
      initiative: 2,
      limited: 1,
      cost: 25,
      xws: 'nightbeast',
      ability:
        'After you fully execute a blue maneuver, you may perform a [Focus] action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_88.png',
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_88.jpg',
      ffg: 88,
      hyperspace: false,
      epic: true,
    },
    {
      name: '"Scourge" Skutu',
      caption: 'Seasoned Veteran',
      initiative: 5,
      limited: 1,
      cost: 31,
      xws: 'scourgeskutu',
      ability:
        'While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_82.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_82.jpg',
      ffg: 82,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Wampa"',
      caption: 'Black Eleven',
      initiative: 1,
      limited: 1,
      cost: 29,
      xws: 'wampa',
      ability:
        'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_89.png',
      charges: { value: 1, recovers: 1 },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_89.jpg',
      ffg: 89,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Academy Pilot',
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'academypilot',
      text:
        'The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_92.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/c9/4e/c94efa45-9cf7-4167-8e41-50d27d300f12/op066-academy-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_92.jpg',
      ffg: 92,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Black Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 25,
      xws: 'blacksquadronace',
      text:
        'The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_90.png',
      slots: ['Talent', 'Modification'],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/fe/2b/fe2b0b19-b983-4665-aa8a-769fc2e03f64/op086-obsidian-squadron-pilot.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_90.jpg',
      ffg: 90,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Del Meeko',
      caption: 'Inferno Three',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'delmeeko',
      ability:
        'While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_85.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_85.jpg',
      ffg: 85,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Gideon Hask',
      caption: 'Inferno Two',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'gideonhask',
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_84.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_84.jpg',
      ffg: 84,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Iden Versio',
      caption: 'Inferno Leader',
      initiative: 4,
      limited: 1,
      cost: 41,
      xws: 'idenversio',
      ability:
        'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_83.png',
      charges: { value: 1, recovers: 0 },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_83.jpg',
      ffg: 83,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Obsidian Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'obsidiansquadronpilot',
      text:
        "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_91.png',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/12/55/12552f53-decc-49ff-8fe2-e4285d4ff31e/op066-obsidian-squadron-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_91.jpg',
      ffg: 91,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Seyn Marana',
      caption: 'Inferno Four',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'seynmarana',
      ability:
        'While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_86.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_86.jpg',
      ffg: 86,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Valen Rudor',
      caption: 'Braggadocious Baron',
      initiative: 3,
      limited: 1,
      cost: 27,
      xws: 'valenrudor',
      ability:
        'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_87.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_87.jpg',
      ffg: 87,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;