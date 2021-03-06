import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-B Y-wing',
    de: 'BTL-B-Y-Flügler',
    fr: 'Y-wing BTL-B',
    it: 'BTL-B Y-wing',
    pl: 'Y-wing BTL-B',
    pt: 'BTL-B Y-wing',
    zh: 'BTL-B Y-wing',
    es: 'BTL-B Ala-Y',
  },
  xws: 'btlbywing',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Plated Hull',
      de: 'Gepanzerte Hülle',
      fr: 'Coque Blindée',
      es: 'Fuselaje blindado',
      it: 'Plated Hull',
      pl: 'Opancerzony kadłub',
      pt: 'Plated Hull',
      zh: 'Plated Hull',
    },
    text: {
      en:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      de:
        'Solange du verteidigst, falls du nicht kritisch beschädigt bist, ändere 1 [Critical Hit] -Ergebnis in ein [Hit] -Ergebnis.',
      fr:
        "tant que vous défendez, si vous n'êtes pas critiquement endommagé, changez 1 résultat [Critical Hit] en un résultat [Hit].",
      es:
        'Mientras te defiendes, si no estás dañado críticamente, cambia 1 resultado [Critical Hit] por un resultado [Hit] .',
      it:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      pl:
        'Gdy się bronisz i nie masz odkrytej karty uszkodzenia, zmień 1 wynik [Critical Hit] na wynik [Hit].',
      pt:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      zh:
        'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Shadow Squadron Veteran',
        de: 'Veteran der Schatten-Staffel',
        fr: "Vétéran de l'Escadron Shadow",
        es: 'Veterano del Escuadrón Sombra',
        it: 'Shadow Squadron Veteran',
        pl: 'Weteran Eskadry Cieni',
        pt: 'Shadow Squadron Veteran',
        zh: 'Shadow Squadron Veteran',
      },
      initiative: 3,
      limited: 0,
      xws: 'shadowsquadronveteran',
      text: {
        en:
          'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
        de:
          'Die Schatten-Staffel, ausgebildet von Jedi-Fliegerass Anakin Skywalker, ist seit Beginn der Klonkriege im Einsatz und hat bei Kadavo und gegen General Grievous‘ Flaggschiff, die Malevolencebedeutende Siege errungen.',
        fr:
          "l'Escadron Shadow, actif depuis les tout premiers jours de la Guerre des Clones, a remporté des victoires prestigieuses à Kadavo et contre le vaisseau amiral de Grievous, le Malveillance.",
        es:
          'El Escuadrón Sombra ha prestado servicio desde los primeros días de las Guerras Clon, obteniendo célebres victorias en Kadavo y contra la nave insignia de Grievous, el Malevolencia.',
        it:
          'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
        pl:
          'Eskadra Cieni wytrenowana przez wybitnego pilota Jedi, Anakina Skywalkera, walczy już od pierwszych dni Wojen Klonów i ma na swoim koncie kilka spektakularnych zwycięstw, jak choćby bitwa na Kadavo czy zniszczenie Malevolence, okrętu flagowego generała Grievousa.',
        pt:
          'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
        zh:
          'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/98d4c989af1003a323c9ebfc10dee9e3.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/89b1a131e3489409a3f360898b9962bc.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/23300586332b4c40ba8ddd6955e2f157.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 31,
      ffg: 602,
    },
    {
      name: {
        en: 'Anakin Skywalker',
        de: 'Anakin Skywalker',
        fr: 'Anakin Skywalker',
        es: 'Anakin Skywalker',
        it: 'Anakin Skywalker',
        pl: 'Anakin Skywalker',
        pt: 'Anakin Skywalker',
        zh: 'Anakin Skywalker',
      },
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-btlbywing',
      ability: {
        en:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, falls ein feindliches Schiff \nin deinem [Front Arc] in Reichweite 0-1 oder in deinem [Bullseye Arc], ist, darfst du 1 [Force] ausgeben, um 1 Stressmarker zu entfernen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, s'il y a un vaisseau ennemi dans votre [Front Arc] à portée 0-1 ou dans votre [Bullseye Arc], vous pouvez dépenser 1 [Force] pour retirer 1 marqueur de stress.",
        es:
          'Después de que ejecutes completamente una maniobra, si tienes alguna nave enemiga situada en tu [Front Arc] a alcance 0-1 o en tu [Bullseye Arc], puedes gastar 1 [Force] para retirar 1 ficha de Tensión.',
        it:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        pl:
          'Gdy wykonasz pełny manewr, jeśli w twojej [Front Arc] w zasięgu 0-1 albo w twoim [Bullseye Arc] jest wrogi statek, możesz wydać 1 [Force], aby usunąć 1 żeton stresu.',
        pt:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        zh:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
        'Force Power',
      ],
      cost: 55,
      ffg: 596,
      caption: {
        en: 'Hero of the Republic',
        de: 'Held der Republik',
        fr: 'Héros de la République',
        es: 'Héroe de la República',
        it: 'Hero of the Republic',
        pl: 'Bohater Republiki',
        pt: 'Hero of the Republic',
        zh: 'Hero of the Republic',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c0af46ff66129c780a13c24727c53c03.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/06f8a6230f77123472ab9a338fa7bc92.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/819eb13983960274e473b265805c4a9a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
      },
    },
    {
      name: {
        en: 'R2-D2',
        de: 'R2-D2',
        fr: 'R2-D2',
        es: 'R2-D2',
        it: 'R2-D2',
        pl: 'R2-D2',
        pt: 'R2-D2',
        zh: 'R2-D2',
      },
      xws: 'r2d2',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
        de:
          'Zu Beginn der Kampfphase, falls ein feindliches Schiff in deinem [Rear Arc] ist, erhalte 1 Berechnungsmarker.',
        fr:
          "Au début de la phase d'engagement, s'il y a un vaisseau ennemi dans votre [Rear Arc], gagnez 1 marqueur de calcul.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si tienes alguna nave enemiga situada en tu [Rear Arc], recibes 1 ficha de Cálculos.',
        it:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
        pl:
          'Na początku fazy walki, jeżeli w twojej [Rear Arc] jest wrogi statek, otrzymujesz ‭1 żeton obliczeń.',
        pt:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
        zh:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Reload' },
      ],
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Crew',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 32,
      ffg: 600,
      caption: {
        en: 'Bucket of Bolts',
        de: 'Schrotteimer',
        fr: 'Tas de Boulons',
        es: 'Montón de chatarra',
        it: 'Bucket of Bolts',
        pl: 'Kupa złomu',
        pt: 'Bucket of Bolts',
        zh: 'Bucket of Bolts',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/e8489ece1bda7c331fa3697ca16877f2.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/36ed45f014498d91384c73ffcf182669.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8c9f15dabae8190772ce2d28b75c4e3a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
      },
    },
    {
      name: {
        en: '"Odd Ball"',
        de: '"Oddball"',
        fr: '"Oddball"',
        es: '"Oddball"',
        it: '"Odd Ball"',
        pl: '„Szajbus"',
        pt: '"Odd Ball"',
        zh: '"Odd Ball"',
      },
      xws: 'oddball-btlbywing',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem[Bullseye Arc]ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si tienes alguna nave enemiga situada en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
        it:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        pl:
          'Gdy wykonasz czerwony manewr albo czerwoną akcję, jeśli w twoim [Bullseye Arc] jest wrogi statek, możesz go namierzyć.',
        pt:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        zh:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      },
      caption: {
        en: 'CC-2237',
        de: 'CC-2237',
        fr: 'CC-2237',
        es: 'CC-2237',
        it: 'CC-2237',
        pl: 'CC-2237',
        pt: 'CC-2237',
        zh: 'CC-2237',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 42,
      ffg: 597,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/8b69a3e697c598e210eb93af51463cd7.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e5a81d903f737c07a06cbac0bdee4781.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c8abfa1f277b2b01346c4e3037cd2a4d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8f1d65004c763b48293d1324a49c563a.png',
      },
    },
    {
      name: {
        en: '"Matchstick"',
        de: '"Matchstick"',
        fr: '"Matchstick"',
        es: '"Matchstick"',
        it: '"Matchstick"',
        pl: '„Zapałka"',
        pt: '"Matchstick"',
        zh: '"Matchstick"',
      },
      xws: 'matchstick',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
        de:
          'Solange du einen Primär- oder [Single Turret Arc] -Angriff durchführst, darfst du für jeden roten Marker, den du hast, 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale ou une attaque [Single Turret Arc], vous pouvez relancer 1 dé d'attaque pour chaque marqueur rouge que vous avez.",
        es:
          'Mientras efectúas un ataque principal o [Single Turret Arc], puedes volver a tirar 1 dado de ataque por cada ficha roja que tengas.',
        it:
          'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
        pl:
          'Gdy wykonujesz atak podstawowy albo [Single Turret Arc], możesz przerzucić 1 kość ataku za każdy czerwony żeton, jaki posiadasz.',
        pt:
          'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
        zh:
          'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 43,
      ffg: 598,
      caption: {
        en: 'Shadow Two',
        de: 'Schatten Zwei',
        fr: 'Shadow Deux',
        es: 'Sombra Dos',
        it: 'Shadow Two',
        pl: 'Cień Dwa',
        pt: 'Shadow Two',
        zh: 'Shadow Two',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b139cb76f1e45b0947f902491df34e83.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b8b733767dd3c0e7a634c1d92a382534.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f8452dafe25aa45da4a1a025c4c5de4c.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
      },
    },
    {
      name: {
        en: '"Broadside"',
        de: '"Broadside"',
        fr: '"Broadside"',
        es: '"Broadside"',
        it: '"Broadside"',
        pl: '„Salwa"',
        pt: '"Broadside"',
        zh: '"Broadside"',
      },
      xws: 'broadside',
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
        de:
          'Solange du einen [Single Turret Arc] Angriff durchführst, falls dein [Single Turret Arc] -Anzeiger in deinem [Left Arc] oder [Right Arc]ist, darfst du 1 Leerseiten-Ergebnis in ein [Focus] -Ergebnis ändern.',
        fr:
          'Tant que vous effectuez une attaque [Single Turret Arc], si votre indicateur [Single Turret Arc] est dans votre [Left Arc] ou [Right Arc], vous pouvez changer 1 résultat vierge en un résultat [Focus].',
        es:
          'Mientras efectúas un ataque [Single Turret Arc] , si tu indicador [Single Turret Arc] está en tu [Left Arc] o [Right Arc], puedes cambiar 1 resultado de cara vacía por un resultado [Focus] .',
        it:
          'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
        pl:
          'Gdy wykonujesz atak [Single Turret Arc] i twój wskaźnik [Single Turret Arc] jest ustawiony na twoją [Left Arc] albo [Right Arc], możesz zmienić 1 pusty wynik na wynik [Focus].',
        pt:
          'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
        zh:
          'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 36,
      ffg: 599,
      caption: {
        en: 'Shadow Three',
        de: 'Schatten Drei',
        fr: 'Shadow Trois',
        es: 'Sombra Tres',
        it: 'Shadow Three',
        pl: 'Cień Trzy',
        pt: 'Shadow Three',
        zh: 'Shadow Three',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b4895061c3161dfb7d194646aa14019c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/48b2ce247c8f704f053ce948f4074d9a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/16e070dad71b40df1651bbdeddd7d211.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
      },
    },
    {
      name: {
        en: '"Goji"',
        de: '"Goji"',
        fr: '"Goji"',
        es: '"Goji"',
        it: '"Goji"',
        pl: '„Goji"',
        pt: '"Goji"',
        zh: '"Goji"',
      },
      xws: 'goji',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-3 verteidigt, darf es für jede befreundete Bombe oder Mine, die in Reichweite 0-1 zu ihm ist, 1 zusätzlichen Verteidigungswürfel werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-3 défend, il peut lancer 1 dé de défense supplémentaire pour chaque bombe ou mine alliée à portée 0-1 de lui.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-3 se defiende, esa nave puede tirar 1 dado de defensa adicioan por cada bomba o mina aliada que tenga a alcance 0-1.',
        it:
          'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-3 się broni, może rzucić 1 dodatkową kością obrony za każdą przyjazną bombę i minę w zasięgu 0-1 od niego.',
        pt:
          'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
        zh:
          'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 29,
      ffg: 601,
      caption: {
        en: 'Payload Specialist',
        de: 'Bombenspezialist',
        fr: 'Spécialiste du Chargement',
        es: 'Especialista en cabezas explosivas',
        it: 'Payload Specialist',
        pl: 'Specjalista załadunku',
        pt: 'Payload Specialist',
        zh: 'Payload Specialist',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a0bf4943c2163958a5d6a9c362c876f4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8435d76a9b54dfe34388091740a95089.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0f00b59c211328aba5908fe32dc97aff.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3b34b6fc25db55b66654d355c7f514eb.png',
      },
    },
    {
      name: {
        en: 'Red Squadron Bomber',
        de: 'Bomber der Roten Staffel',
        fr: "Bombardier de l'Escadron Rouge",
        es: 'Bombardero del Escuadrón Rojo',
        it: 'Red Squadron Bomber',
        pl: 'Bombardier Eskadry Czerwonych',
        pt: 'Red Squadron Bomber',
        zh: 'Red Squadron Bomber',
      },
      xws: 'redsquadronbomber',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
        de:
          'Bei der Schlacht von Geonosis gab die rote Staffel den TFAT-Kanonenbooten Feuerschutz, damit sie sicher die Oberfläche erreichten.',
        fr:
          "Durant la bataille de Géonosis, l'Escadron Rouge a fourni une couverture indispensable aux canonnières TO/BA déployées pour sécuriser la surface.",
        es:
          'En la batalla de Geonosis, el Escuadrón Rojo proporcionó una cobertura indispensable a las cañoneras LAAT desplegadas para ocupar la superficie.',
        it:
          'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
        pl:
          'Eskadra Czerwonych odegrała kluczową rolę w bitwie o Geonosis, zapewniając osłonę wysłanym na planetę kanonierkom szturmowym LAAT.',
        pt:
          'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
        zh:
          'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      cost: 29,
      ffg: 603,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ca9a4cf728e707c32184a82537c39d17.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8395848e3f11df31bef84a2f0f412357.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/33ef3a4a05c001dcb318bec95cfd00d5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
      },
    },
  ],
  ffg: 68,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_BTL-B_Ywing.png',
};

export default t;
