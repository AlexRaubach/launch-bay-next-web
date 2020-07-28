import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Delta-7 Aethersprite',
  xws: 'delta7aethersprite',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
    '5FW',
    '5KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Purple', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  pilots: [
    {
      name: 'Jedi Knight',
      initiative: 3,
      limited: 0,
      xws: 'jediknight',
      text:
        'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/13d08d0d1131e7a11f6d10fd1626bff9.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      cost: 37,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 515,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d3bf6f2f5482c2b68a4d3d02cd758a68.jpg',
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Guardian of the Republic',
      initiative: 5,
      limited: 1,
      xws: 'obiwankenobi',
      ability:
        'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/fcf515534a722b581bc2f85f36cb5c30.png',
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      cost: 49,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 511,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f449693ccfd6529244ea7765eed2f83f.jpg',
    },
    {
      name: 'Plo Koon',
      caption: 'Serene Mentor',
      initiative: 5,
      limited: 1,
      xws: 'plokoon',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/c0936c57c897ea7bacadf723cfcbd0b6.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      cost: 45,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 513,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/a4f58c67ecedcb9fcfa6ee45613c002e.jpg',
    },
    {
      name: 'Saesee Tiin',
      caption: 'Prophetic Pilot',
      initiative: 4,
      limited: 1,
      xws: 'saeseetiin',
      ability:
        'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/e0fdedf1af8fd1e5b36c2fba17b4f6b0.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 43,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 514,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/e36d5e616e0b0135b0faa1c9f46992a1.jpg',
    },
    {
      name: 'Mace Windu',
      caption: 'Harsh Traditionalist',
      initiative: 4,
      limited: 1,
      xws: 'macewindu',
      ability: 'After you fully execute a red maneuver, recover 1 [Force].',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/f0c905f162de8d77dd78c3d49cca77f1.png',
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 46,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 512,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ba6c851af3b8f650d8dcb865a05636f2.jpg',
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Hero of the Republic',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d60f4eca355471465ca3f6b99fb98e56.png',
      cost: 62,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 507,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dc121e1b285f30e4708bda6c0594b55f.jpg',
    },
    {
      name: 'Ahsoka Tano',
      caption: '"Snips"',
      initiative: 3,
      limited: 1,
      xws: 'ahsokatano',
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/15f6bf84f63970c982dd722a5473217f.png',
      cost: 44,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 510,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/0fc229b9b79c9f6c750a587614729293.jpg',
    },
    {
      name: 'Barriss Offee',
      caption: 'Conflicted Padawan',
      initiative: 4,
      limited: 1,
      xws: 'barrissoffee',
      ability:
        'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/f8f58005da18d7041b1ec2374701465c.png',
      cost: 38,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 509,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6eb248dfda52dc29a8aa4fda7e414eab.jpg',
    },
    {
      name: 'Luminara Unduli',
      caption: 'Wise Protector',
      initiative: 4,
      limited: 1,
      xws: 'luminaraunduli',
      ability:
        "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
      shipAbility: {
        name: 'Fine-tuned Controls',
        text:
          'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/7f87b6c12631687bedf75a18582af0b0.png',
      cost: 43,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 508,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/22519908330c72696863815565a2beda.jpg',
    },
  ],
  ffg: 61,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Delta-7.png',
};

export default t;
