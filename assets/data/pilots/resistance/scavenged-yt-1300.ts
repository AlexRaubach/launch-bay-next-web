import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Scavenged YT-1300',
  xws: 'scavengedyt1300',
  ffg: 57,
  size: 'Large',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3PR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'Red', type: 'Rotate Arc' },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Falcon_Resistance.png',
  pilots: [
    {
      name: 'Resistance Sympathizer',
      initiative: 2,
      limited: 0,
      xws: 'resistancesympathizer',
      text:
        'After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/28411b84c1b15f0bfa9928f2206e44f5.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3e567923957881e9a4dbef46789c7fbf.jpg',
      cost: 59,
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 430,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Chewbacca',
      caption: 'Loyal Companion',
      initiative: 4,
      limited: 1,
      xws: 'chewbacca-scavengedyt1300',
      ability:
        'After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/209a8dece475a265aaf1b5318ba7f08a.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c40ec30b7df138c4510b08f4f02d54b5.jpg',
      cost: 61,
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 429,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Han Solo',
      caption: 'Jaded Smuggler',
      initiative: 6,
      limited: 1,
      xws: 'hansolo-scavengedyt1300',
      ability:
        'Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/5816bd53c272ed50096e22ae1af2b38a.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/15263defc98e4a54d76ae9224534dacf.jpg',
      cost: 63,
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 427,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Rey',
      caption: 'Resourceful Scavenger',
      initiative: 5,
      limited: 1,
      xws: 'rey',
      ability:
        'While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/0ee7006e6cc51d8c08b784c9b770f1b0.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1ff06aeff0d74773e9c9f3846b38b75d.jpg',
      force: { value: 2, recovers: 1, side: ['light'] },
      cost: 68,
      slots: [
        'Force Power',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 428,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
