import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Heightened Perception',
    limited: 0,
    xws: 'heightenedperception',
    sides: [
      {
        title: 'Heightened Perception',
        type: 'Force Power',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Force]. If you do, engage at initiative 7 instead of your standard initiative value this phase.',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_19.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_19.jpg',
        ffg: 248,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Instinctive Aim',
    limited: 0,
    xws: 'instinctiveaim',
    sides: [
      {
        title: 'Instinctive Aim',
        type: 'Force Power',
        ability:
          'While you perform a special attack, you may spend 1 [Force] to ignore the [Focus] or [Lock] requirement.',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_20.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_20.jpg',
        ffg: 249,
      },
    ],
    cost: { value: 1 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Sense',
    limited: 0,
    xws: 'sense',
    sides: [
      {
        title: 'Sense',
        type: 'Force Power',
        ability:
          'During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 [Force], you may choose a ship at range 0-3 instead.',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_21.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_21.jpg',
        ffg: 250,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Supernatural Reflexes',
    limited: 0,
    xws: 'supernaturalreflexes',
    sides: [
      {
        title: 'Supernatural Reflexes',
        type: 'Force Power',
        ability:
          'Before you activate, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, suffer 1 [Hit] damage.',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_22.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_22.jpg',
        ffg: 251,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 8, '4': 16, '5': 24, '6': 32 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Brilliant Evasion',
    limited: 0,
    xws: 'brilliantevasion',
    sides: [
      {
        title: 'Brilliant Evasion',
        type: 'Force Power',
        ability:
          "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/24b175ad35d035f33a35056b0d1d7a36.png',
        ffg: 536,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Hate',
    limited: 0,
    xws: 'hate',
    sides: [
      {
        title: 'Hate',
        type: 'Force Power',
        ability:
          'After you suffer 1 or more damage, recover that many [Force].',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4a10b5c8a3d796116163a741d145f4e9.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a373c947f0a56ee4bcf4223250326dc0.jpg',
        ffg: 489,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 3, Medium: 6, Large: 9, Huge: 200 },
    },
    restrictions: [
      {
        sides: ['dark'],
        factions: [
          'Galactic Empire',
          'First Order',
          'Scum and Villainy',
          'Separatist Alliance',
        ],
      },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Predictive Shot',
    limited: 0,
    xws: 'predictiveshot',
    sides: [
      {
        title: 'Predictive Shot',
        type: 'Force Power',
        ability:
          'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/53ceabb0e2e66e61c077145475b18dab.jpg',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e0100c63b2753daf68a9d3948824b086.png',
        ffg: 490,
      },
    ],
    cost: { value: 1 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Battle Meditation',
    xws: 'battlemeditation',
    limited: 0,
    sides: [
      {
        title: 'Battle Meditation',
        type: 'Force Power',
        ability:
          'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
        slots: ['Force Power'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d0641df31a0fc40c501055dcd34094f6.png',
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 545,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 0, '2': 2, '3': 4, '4': 6, '5': 8, '6': 10 },
    },
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Foresight',
    xws: 'foresight',
    limited: 0,
    sides: [
      {
        title: 'Foresight',
        type: 'Force Power',
        ability:
          'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack.\n\n<strong>Attack</strong>: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
        slots: ['Force Power'],
        attack: {
          arc: 'Bullseye Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 613,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/12c948b9a0fe9f619ecda00f9fdcc437.png',
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Precognitive Reflexes',
    xws: 'precognitivereflexes',
    limited: 0,
    sides: [
      {
        title: 'Precognitive Reflexes',
        type: 'Force Power',
        ability:
          'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token.\n\nIf you do, you cannot perform another action during your activation.',
        slots: ['Force Power'],
        ffg: 614,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/931c84c3e1b3afe5d078f6b3dd4f677a.png',
      },
    ],
    restrictions: [{ baseSizes: ['Small'] }],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 4, '4': 7, '5': 10, '6': 13 },
    },
    hyperspace: false,
    epic: true,
  },
];

export default t;
