import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'ARC-170 Starfighter',
    de: 'ARC-170-Sternenjäger',
    fr: 'Chasseur ARC-170',
    it: 'Astrocaccia ARC-170',
    pl: 'Myśliwiec gwiezdny ARC-170',
    pt: 'Caça Estelar ARC-170',
    zh: 'ARC-170 Starfighter',
    es: 'Caza estelar ARC-170',
  },
  xws: 'arc170starfighter',
  size: 'Medium',
  ffg: 31,
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
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
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: {
        en: '"Sinker"',
        de: '„Sinker"',
        fr: '"Sinker"',
        es: '"Sinker"',
        it: '"Sinker"',
        pl: '„Cwaniak"',
        pt: '"Sinker"',
        zh: '"Sinker"',
      },
      caption: {
        en: 'Wolfpack Veteran',
        de: 'Veteran des Wolfsrudels',
        fr: 'Vétéran de la Meute',
        es: 'Veterano del Escuadrón Manada',
        it: 'Veterano del Branco di Lupi',
        pl: 'Weteran Watahy',
        pt: 'Wolfpack Veteran',
        zh: 'Wolfpack Veteran',
      },
      initiative: 3,
      limited: 1,
      xws: 'sinker',
      ability: {
        en:
          'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 1-2 in deinem [Left Arc] oder [Right Arc] einen Primärangriff durchführt, darf es 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 1-2 situé dans votre [Left Arc] ou [Right Arc] effectue une attaque principale, il peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 1-2 en tu [Left Arc] or [Right Arc] efectúa un ataque principal, esa nave puede volver a tirar 1 dado de ataque.',
        it:
          'Mentre una nave amica a gittata 1-2 nel tuo [Left Arc] o [Right Arc] effettua un attacco primario, può ripetere il tiro di 1 dado di attacco.',
        pl:
          'Gdy przyjazny statek w zasięgu 1-2 w twojej [Left Arc] albo [Right Arc] wykonuje atak podstawowy, może przerzucić 1 kość ataku.',
        pt:
          'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
        zh:
          'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8297fc7d58ec0a5e6068f8dabbbc00f1.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a84654883c555e203868e4bb7e43b737.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9bd64787e58edce9c8b7699975dadfb9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/941a190a048927ff7ecc6fa06fc3efca.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1cee0790e48d2e41b8456cd17485fa20.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c9ecb68d0cb75b7022d6f107a9800949.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8297fc7d58ec0a5e6068f8dabbbc00f1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8297fc7d58ec0a5e6068f8dabbbc00f1.png',
      },
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      hyperspace: false,
      epic: true,
      cost: 54,
      ffg: 526,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/04b3e18c19a0843f89353949c9ffcb77.jpg',
    },
    {
      name: {
        en: '"Jag"',
        de: '„Jag"',
        fr: '"Jag"',
        es: '"Jag"',
        it: '"Jag"',
        pl: '„Kosa"',
        pt: '"Jag"',
        zh: '"Jag"',
      },
      xws: 'jag',
      cost: 48,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      ffg: 525,
      caption: {
        en: 'CT-55/11-9009',
        de: 'CT-55/11-9009',
        fr: 'CT-55/11-9009',
        es: 'CT-55/11-9009',
        it: 'CT-55/11-9009',
        pl: 'CT-55/11-9009',
        pt: 'CT-55/11-9009',
        zh: 'CT-55/11-9009',
      },
      initiative: 3,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/124b11dde89cf986fcd8bc8e89094cf5.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/28152f1d6ee09d27a4afd2459947dc3d.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d8ee62c07bb156aa67628975f9d6e170.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e0c2438be91850caf003a7deb19b159b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e516e29bc82c8619737b5506fcf759d6.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9d69e8df65c5894df7544b0a74e0f063.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ba72e66b46023ce023bd612b1d22c20e.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/28152f1d6ee09d27a4afd2459947dc3d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/28152f1d6ee09d27a4afd2459947dc3d.png',
      },
      ability: {
        en:
          'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 1-2 in deinem [Left Arc] oder [Right Arc] verteidigt hat, darfst du den Angreifer als Ziel erfassen.',
        fr:
          "Après qu'un vaisseau allié à portée 1-2 situé dans votre [Left Arc] ou [Right Arc] a défendu, vous pouvez verrouiller l'attaquant.",
        es:
          'Después de que una nave aliada que tengas a alcance 1-2 en tu [Left Arc] o [Right Arc] se defienda, puedes obtener un Blanco fijado sobre el atacante.',
        it:
          "Dopo che una nave amica a gittata 1-2 nel tuo [Left Arc] o [Right Arc] ha difeso, puoi acquisire l'attaccante come bersaglio.",
        pl:
          'Gdy przyjazny statek w zasięgu 1-2 w twojej [Left Arc] albo [Right Arc] się broni, możesz namierzyć atakującego.',
        pt:
          'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
        zh:
          'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
      },
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Odd Ball"',
        de: '„Odd Ball"',
        fr: '"Odd Ball"',
        es: '"Odd Ball"',
        it: '"Odd Ball"',
        pl: '„Szajbus"',
        pt: '"Odd Ball"',
        zh: '"Odd Ball"',
      },
      xws: 'oddball-arc170starfighter',
      cost: 49,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 523,
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
      initiative: 5,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/597ace7e901187c88d9ff75bb34a1301.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0e39e35b57982a9cdffe663ff47b2dc.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ebc02cb982fd07d5af8f2d99152e0c6c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8d2d7feb2cb28484831b32f85824fde5.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/3fc7c982b5ebd88b867edb0f1e98f266.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/0f1bdd4efc67c9169af53dd33a7f383e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f7b10bc7434760031655127ce66a503f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0e39e35b57982a9cdffe663ff47b2dc.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0e39e35b57982a9cdffe663ff47b2dc.png',
      },
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si hay una nave enemiga en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
        it:
          "Dopo che hai eseguito completamente una manovra rossa o hai effettuato un'azione rossa, se ci sono navi nemiche nel tuo [Bullseye Arc], puoi acquisire 1 di quelle navi come bersaglio.",
        pl:
          'Gdy wykonasz pełny czerwony manewr albo czerwoną akcję, jeśli w twoim [Bullseye Arc] jest wrogi statek, możesz go namierzyć.',
        pt:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        zh:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      },
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Wolffe"',
        de: '„Wolffe"',
        fr: '"Wolffe"',
        es: '"Wolffe"',
        it: '"Wolffe"',
        pl: '„Wilczur"',
        pt: '"Wolffe"',
        zh: '"Wolffe"',
      },
      xws: 'wolffe',
      cost: 50,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 524,
      caption: {
        en: 'CC-3636',
        de: 'CC-3636',
        fr: 'CC-3636',
        es: 'CC-3636',
        it: 'CC-3636',
        pl: 'CC-3636',
        pt: 'CC-3636',
        zh: 'CC-3636',
      },
      initiative: 4,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/933ef28f6a8fda0c5741bd6a9a5f308d.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/2a15fd003a7fc1d475b562a958c6c263.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/00974054c2f0504d70a84ecadff80f88.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/4900ed57113343d8e381f3f6f9d9ff6b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f410e696e42a2c027e97cc59f391d922.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/589bbeb3a617c8403b82adc12401e97d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f1f26f8b8985715349ed498a469432ff.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/2a15fd003a7fc1d475b562a958c6c263.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/2a15fd003a7fc1d475b562a958c6c263.png',
      },
      charges: { value: 1, recovers: 0 },
      ability: {
        en:
          'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
        de:
          'Solange du einen [Front Arc]-Primärangriff durchführst, darfst du 1 [Charge] ausgeben, um 1 Angriffswürfel neu zu werfen. Solange du einen [Rear Arc]-Primärangriff durchführst, darfst du 1 [Charge] wiederherstellen, um 1 zusätzlichen Angriffswürfel zu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale [Front Arc], vous pouvez dépenser 1 [Charge] pour relancer 1 dé d'attaque. Tant que vous effectuez une attaque principale [Rear Arc], vous pouvez récupérer 1 [Charge] pour lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal [Front Arc], puedes gastar 1 [Charge] para volver a tirar 1 dado de ataque. Mientras efectúas un ataque principal [Rear Arc], puedes recuperar 1 [Charge] para tirar 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario [Front Arc], puoi spendere 1 [Charge] per ripetere il tiro di 1 dado di attacco. Mentre effettui un attacco primario [Rear Arc], puoi recuperare 1 [Charge] per tirare 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy [Front Arc], możesz wydać 1 [Charge], aby przerzucić 1 kość ataku. Gdy wykonujesz atak podstawowy [Rear Arc], możesz odzyskać 1 [Charge] , aby rzucić 1 dodatkową kością ataku.',
        pt:
          'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
        zh:
          'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      },
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '104th Battalion Pilot',
        de: 'Pilot des 104. Bataillons',
        fr: 'Pilote du 104ème Bataillon',
        es: 'Piloto del Batallón 104',
        it: 'Pilota del 104° Battaglione',
        pl: 'Pilot 104. Batalionu',
        pt: '104th Battalion Pilot',
        zh: '104th Battalion Pilot',
      },
      xws: '104thbattalionpilot',
      cost: 42,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      ffg: 528,
      initiative: 2,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5081daee997a2a55de474dad2e8e4a07.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1798ea30f603f073200326864ef9424c.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/96cd21c19a71df67e3f68d18ba51cacb.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8f2505ca153df67a2aa112ea8345ccca.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/7429964b7f9c666e7ac81aeb8b9cdbd0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/fa4b564ee017ea31ab664c01ffe7e17f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f8608c64c32ab73e0b15e2804881f750.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1798ea30f603f073200326864ef9424c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1798ea30f603f073200326864ef9424c.png',
      },
      text: {
        en:
          "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
        de:
          'Der ARC-170 ist ein überragender schwerer Begleitjäger, ausgestattet mit Bug- und Heckgeschützen, Sprengkörpern sowie einem Astromechdroiden zur Navigation. Wo auch immer diese mächtigen Schiffe zum Einsatz kommen, stärken sie die Präsenz der Republikanischen Flotte.',
        fr:
          "L'ARC-170 a été conçu en tant que chasseur d'escorte lourd, armé de canons laser à l'avant et à l'arrière, d'artillerie et d'un astromech de navigation. Les escadrons de ces redoutables chasseurs renforcent les forces de la Marine Républicaine au cours des batailles dans lesquelles ils sont déployés.",
        es:
          'El ARC-170 se diseñó como un caza pesado de escolta de altas prestaciones provisto de una potente combinación de láseres frontales y posteriores, cabezas de guerra y un droide astromecánico para tareas de navegación. Los escuadrones de estas impresionantes naves afianzaban la presencia de la Armada de la República en toda batalla en la que intervinieran.',
        it:
          "L'ARC-170, concepito come caccia pesante di scorta, era dotato di potenti laser anteriori, posteriori e armamenti, nonché di un droide astromeccanico come navigatore. Le squadriglie di queste potenti navi rafforzano la presenza della Flotta della Repubblica in ogni battaglia in cui vengono schierate.",
        pl:
          'ARC-170 zaprojektowano jako ciężki myśliwiec eskortowy z potężnym uzbrojeniem laserowym na dziobie i rufie oraz astromechem do nawigacji. Eskadry ciężkich jednostek tego typu znacząco wzmacniają siły Floty Republiki w bitwach.',
        pt:
          "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
        zh:
          "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
      },
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Squad Seven Veteran',
        de: 'Veteran von Trupp Sieben',
        fr: "Vétéran de l'Escadron Sept",
        es: 'Veterano del Escuadrón Siete',
        it: 'Veterano della Squadriglia Sette',
        pl: 'Weteran Siódmej Eskadry',
        pt: 'Squad Seven Veteran',
        zh: 'Squad Seven Veteran',
      },
      xws: 'squadsevenveteran',
      cost: 44,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 527,
      initiative: 3,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3c9cad4a6c8cdb6a7749a76e1b42ec23.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0e0fb59b2806b41214275255986965f2.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d215359a50223322270a7a478b84f820.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/dba16c6989b137cde52bd700a5b1f6f7.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6eb3323d8ba28e11afc3e490bef646df.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1b913176336ea9ec24ab63968d7d259b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/fea64018180a906c33a1f86b4404250f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0e0fb59b2806b41214275255986965f2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0e0fb59b2806b41214275255986965f2.png',
      },
      text: {
        en:
          'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
        de:
          'Klontrupp Sieben ist eine Spezialeinheit der Doppelbogen-Flotte, die unter dem Kommando legendärer Jedi-Generäle wie Plo Koon und Obi-Wan Kenobi in den Schlachten von Coruscant und Cato Neimoidia großen Ruhm erlangte.',
        fr:
          "Le Vol Clone Sept en tant qu'unité de la flotte Open Circle a servi auprès de généraux Jedi légendaires comme Plo Koon ou Obi-Wan Kenobi et a obtenu ses titres de gloire au cours des batailles de Coruscant et de Cato Neimoidia.",
        es:
          'La Escuadrilla Clon Siete forma parte de la Flota del Círculo Abierto bajo el mando de generales jedi legendarios como Plo Koon y Obi-Wan Kenobi, y sirvió con distinción en las batallas de Coruscant y Cato Neimoidia.',
        it:
          'La Squadriglia Clone Sette fa parte della Flotta del Cerchio Aperto: comandata da alcuni leggendari Generali Jedi come Plo Koon e Obi-Wan Kenobi, si è coperta di gloria nelle battaglie di Coruscant e Cato Neimoidia.',
        pl:
          'Siódma Eskadra Klonów wchodzi w skład Floty Otwartego Okręgu i znajduje się pod komendą legendarnych generałów Jedi takich jak Plo Koon czy Obi-Wan Kenobi. Eskadra ta wsławiła się w bitwach o Coruscant oraz Cato Neimoidię.',
        pt:
          'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
        zh:
          'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
      },
      hyperspace: true,
      epic: true,
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png',
};

export default t;
