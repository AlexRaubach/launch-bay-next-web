import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ln Fighter',
    de: 'TIE/ln-Jäger',
    fr: 'Chasseur TIE/ln',
    it: 'Caccia TIE/ln',
    pl: 'Myśliwiec TIE/ln',
    pt: 'TIE/ln Fighter',
    zh: 'TIE/ln战斗机',
    es: 'Caza TIE/ln',
  },
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
      name: {
        en: '"Howlrunner"',
        de: '„Howlrunner"',
        fr: '"Howlrunner"',
        es: '"Aullador Veloz"',
        it: '"Howlrunner"',
        pl: '„Howlrunner"',
        pt: '"Howlrunner"',
        zh: '"嗜血犬"',
      },
      caption: {
        en: 'Obsidian Leader',
        de: 'Obsidian Eins',
        fr: 'Leader Obsidian',
        es: 'Jefe Obsidiana',
        it: 'Capo Obsidian',
        pl: 'Dowódca Obsydianowych',
        pt: 'Líder Obsidiana',
        zh: '黑曜石领队',
      },
      initiative: 5,
      limited: 1,
      cost: 46,
      xws: 'howlrunner',
      ability: {
        en:
          'While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 einen Primärangriff durchführt, darf jenes Schiff 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 effectue une attaque principale, il peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-1 efectúa un ataque principal, esa nave puede volver a tirar 1 dado de ataque.',
        it:
          'Mentre una nave amica a gittata 0-1 effettua un attacco primario, quella nave può ripetere il tiro di 1 dado di attacco.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-1 wykonuje atak podstawowy, może przerzucić 1 ze swoich kości ataku.',
        pt:
          'Quando uma nave amiga emalcance 0-1 realizar um ataqueprimário, ela pode rerrolar1 dado de ataque.',
        zh: '与你距离为0~1的友方战机执行基础攻击时，该战机可以重投1个攻击骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_81.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/790acab18be205b4275e8b53af7c008a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/54c02dc6d5332ef529396239306df487.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1146b76276a14dfc7ba10fe085cfa368.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/586d69cab2fe05b23fbdc0dbde522098.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3885fa54531b3ca63b5a0a259dcdbac7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8817234508e020b54796a917024c96bc.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_81.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_81.jpg',
      ffg: 81,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Mauler" Mithel',
        de: '„Mauler" Mithel',
        fr: '"Mauler" Mithel',
        es: '"Mutilador" Mithel',
        it: '"Mauler" Mithel',
        pl: 'Mithel „Mauler"',
        pt: '"Mauler" Mithel',
        zh: '"重击兵"米泽尔',
      },
      caption: {
        en: 'Black Two',
        de: 'Schwarz Zwei',
        fr: 'Black Deux',
        es: 'Negro Dos',
        it: 'Nero Due',
        pl: 'Czarny Dwa',
        pt: 'Preto Dois',
        zh: '黑色2号',
      },
      initiative: 5,
      limited: 1,
      cost: 31,
      xws: 'maulermithel',
      ability: {
        en:
          'While you perform an attack at attack range 1, roll 1 additional attack die.',
        de:
          'Solange du einen Angriff in Angriffsreichweite 1 durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque à portée d'attaque 1, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque a alcance de ataque 1, tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco a gittata di attacco 1, tira 1 dado di attacco aggiuntivo.',
        pl: 'Gdy wykonujesz atak w zasięgu 1, rzuć 1 dodatkową kością ataku.',
        pt:
          'Quando você realizar um ataque com alcance de ataque 1, role 1 dado de ataque adicional.',
        zh: '当你执行攻击距离为1的攻击时，额外投1个攻击骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_80.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c3401c8bcf46df2cf1e0132cbd8226fd.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/51f62c937a3cee94f243dc4965ab22f6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5a3f1d8c2af807d03a9c43588a67322d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/25d8fcfd8b003decc84ce0db04d1b959.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/21d53e762ae48cf47a8a300bd86bdf38.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7092a9b749869eabcd12fbadfe8b4ad8.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_80.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_80.jpg',
      ffg: 80,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Night Beast"',
        de: '„Nachtbestie"',
        fr: '"Night Beast"',
        es: '"Bestia Nocturna"',
        it: '"Night Beast"',
        pl: '„Nocny Potwór"',
        pt: '"Night Beast"',
        zh: '"夜兽"',
      },
      caption: {
        en: 'Obsidian Two',
        de: 'Obsidian Zwei',
        fr: 'Obsidian Deux',
        es: 'Obsidiana Dos',
        it: 'Obsidian Due',
        pl: 'Obsydianowy Dwa',
        pt: 'Obsidiana Dois',
        zh: '黑曜石2号',
      },
      initiative: 2,
      limited: 1,
      cost: 25,
      xws: 'nightbeast',
      ability: {
        en:
          'After you fully execute a blue maneuver, you may perform a [Focus] action.',
        de:
          'Nachdem du ein blaues Manöver vollständig ausgeführt hast, darfst du eine [Focus]-Aktion durchführen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre bleue, vous pouvez effectuer une action [Focus].',
        es:
          'Después de que ejecutes completamente una maniobra azul, puedes realizar una acción [Focus].',
        it:
          'Dopo che hai eseguito completamente una manovra blu, puoi effettuare 1 azione [Focus].',
        pl:
          'Gdy wykonasz pełny niebieski manewr, możesz wykonać akcję [Focus].',
        pt:
          'Após executar completamenteuma manobra azul, você poderealizar uma ação [Focus].',
        zh: '在你完全地执行1个蓝色移动后，你可以执行1个[Focus]行动。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_88.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3e747c53c0aaeb1ba251334ba42b8164.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/725c68171d310433107908a3e477cb2a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f9b4393f8fe01c85c2f081c737eddb96.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/df4c9eb74765a0661b7adb8553a0e731.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9b0a52c0e8108f01c18737c90863f5bb.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/37b069a74cdb5f8519fa27bb2851dff9.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_88.png',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_88.jpg',
      ffg: 88,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Scourge" Skutu',
        de: '„Geißel" Skutu',
        fr: '"Scourge" Skutu',
        es: '"Azote" Skutu',
        it: '"Scourge" Skutu',
        pl: '„Plaga" Skutu',
        pt: '"Scourge" Skutu',
        zh: '"灾祸"斯库图',
      },
      caption: {
        en: 'Seasoned Veteran',
        de: 'Kampferprobter Veteran',
        fr: 'Vétéran Chevronné',
        es: 'Veterano curtido',
        it: 'Veterano Esperto',
        pl: 'Doświadczony weteran',
        pt: 'Veterano Experiente',
        zh: '熟练老兵',
      },
      initiative: 5,
      limited: 1,
      cost: 31,
      xws: 'scourgeskutu',
      ability: {
        en:
          'While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.',
        de:
          'Solange du einen Angriff gegen einen Verteidiger in deinem [Bullseye Arc] durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque contre un défenseur dans votre [Bullseye Arc], lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque contra un defensor situado en tu [Bullseye Arc], tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco contro un difensore nel tuo [Bullseye Arc], tira 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak przeciwko obrońcy w twojej [Bullseye Arc], rzuć 1 dodatkową kością ataku.',
        pt:
          'Quando você realizar um ataquecontra um defensor em seu [Bullseye Arc],role 1 dado de ataque adicional.',
        zh: '当你执行攻击，且防御方位于你的[Bullseye Arc]时，额外投1个攻击骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_82.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/dac572113d5ead40d25018786af97cc3.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7bd07cbe7ae11cc7d0eb58eeee3f346c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/86c4ebdecfeaeafa3e01f7a21885f6cd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/fa14048c38cf0feccead813241f5000b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d3d7a545bd1ae2ff5b2e2ea7f5be211c.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/02c8dc57c3a04d0e6cf37b088ca73d84.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_82.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_82.jpg',
      ffg: 82,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Wampa"',
        de: '„Wampa"',
        fr: '"Wampa"',
        es: '"Wampa"',
        it: '"Wampa"',
        pl: '„Wampa"',
        pt: '"Wampa"',
        zh: '"万帕"',
      },
      caption: {
        en: 'Black Eleven',
        de: 'Schwarz Elf',
        fr: 'Black Onze',
        es: 'Negro Once',
        it: 'Nero Undici',
        pl: 'Czarny Jedenaście',
        pt: 'Preto Onze',
        zh: '黑色11号',
      },
      initiative: 1,
      limited: 1,
      cost: 29,
      xws: 'wampa',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Charge] ausgeben, um 1 zusätzlichen Angriffswürfel zu werfen. Nach dem Verteidigen, verliere 1 [Charge].',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépenser 1 [Charge] pour lancer 1 dé d'attaque supplémentaire Après avoir défendu, perdez 1 [Charge].",
        es:
          'Mientras efectúas un ataque, puedes gastar 1 [Charge] para tirar 1 dado de ataque adicional. Después de que te defiendas, pierdes 1 [Charge].',
        it:
          'Mentre effettui un attacco, puoi spendere 1 [Charge] per tirare 1 dado di attacco aggiuntivo. Dopo aver difeso, perdi 1 [Charge].',
        pl:
          'Gdy wykonujesz atak, możesz wydać 1 [Charge], aby rzucić 1 dodatkową kością ataku. Po zakończeniu obrony tracisz 1 [Charge].',
        pt:
          'Quando realizar um ataque, vocêpode gastar 1 [Charge] para rolar1 dado de ataque adicional. Após defender, perca 1 [Charge].',
        zh:
          '当你执行攻击时，你可以花费1[Charge]来额外投1个攻击骰。 在你防御之后，失去1[Charge]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_89.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fa71ddf2276a2b62b6d61ff3fdd896b8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f65989e67fb14fe4b046f130c9b3df75.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/029484a6f5f84ad6ab71bb4d5e467e7e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/572db4ea25b0f8a330e029bd5dcb0a1a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/b6967300dbac4204fcd4ad35e2f0c39f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/1672456e987ff91be12414d259baca64.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_89.png',
      },
      charges: { value: 1, recovers: 1 },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_89.jpg',
      ffg: 89,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Academy Pilot',
        de: 'Pilot der Akademie',
        fr: "Pilote de l'Académie",
        es: 'Piloto de la Academia',
        it: 'Pilota di Accademia',
        pl: 'Pilot z akademii',
        pt: 'Piloto da Academia',
        zh: '帝国军校飞行员',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'academypilot',
      text: {
        en:
          'The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.',
        de:
          'Was Sternenjäger betrifft, setzt das Galaktische Imperium hauptsächlich auf den schnellen und wendigen TIE/ln von Sienar Flottensysteme und lässt ihn in erstaunlicher Stückzahl produzieren.',
        fr:
          "Produit en masse, rapide et maniable, le TIE/ln développé par Sienar Fleet Systems est le principal chasseur de l'Empire Galactique.",
        es:
          'El Imperio Galáctico utiliza como principal caza estelar de combate el rápido y ágil TIE/ln diseñado por Sistemas de Flota Sienar y producido en cantidades asombrosas por las fábricas imperiales.',
        it:
          "L'Impero Galattico usa il rapido e agile TIE/ln, sviluppato dalla Sienar Fleet Systems e prodotto in quantità smisurate, come suo astrocaccia primario.",
        pl:
          'Podstawowym myśliwcem Imperium Galaktycznego jest opracowany przez Sienar Fleet Systems i produkowany na masową skalę TIE/ln.',
        pt:
          'Desenvolvida pela Sienar Fleet Systemse produzida em uma escala assustadora,a rápida e ágil TIE/ln é utilizada pelo Império Galático como seu principal caça estelar.',
        zh:
          '银河帝国委托西纳舰队系统公司制造的TIE/In战机，与其主要的星际战斗机一样，飞行速度快且十分敏捷，投入生产的战机数量多得令人咋舌。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_92.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6caf42290b995f8765090c3da476198f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/44ad0de56bc04e539146ed4f349fa520.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/d0e9c6314202123f5f49b2805ba3723d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1e8421dae5c055fb969a2c38f117126f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f27094fbca4fc583c59c918341e13288.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/ad7626e8178c1051194335873d51111a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_92.png',
      },
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
      name: {
        en: 'Black Squadron Ace',
        de: 'Fliegerass der schwarzen Staffel',
        fr: "As de l'Escadron Noir",
        es: 'As del Escuadrón Negro',
        it: 'Asso dellaSquadriglia Nera',
        pl: 'As Eskadry Czarnych',
        pt: 'Ás do Esquadrão Preto',
        zh: '黑色中队王牌飞行员',
      },
      initiative: 3,
      limited: 0,
      cost: 25,
      xws: 'blacksquadronace',
      text: {
        en:
          'The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.',
        de:
          'In der Schlacht von Yavin begleiteten die Elite­-piloten der schwarzen Staffel mit ihren TIE/ln-Jägern Darth Vader auf seinem vernichtenden Schlag gegen die Rebellion.',
        fr:
          "Au cours de la Bataille de Yavin, les pilotes d'élite des chasseurs TIE/ln de l'Escadron Noir escortèrent Dark Vador lors d'une attaque dévastatrice contre les forces Rebelles.",
        es:
          'Durante la batalla de Yavin, los selectos pilotos de TIE/ln del Escuadrón Negro efectuaron junto a Darth Vader un devastador ataque contra las fuerzas de la Alianza Rebelde.',
        it:
          'I piloti scelti dei Caccia TIE/In della Squadriglia Nera seguirono Darth Vader in un assalto devastante alle forze Ribelli durante la Battaglia di Yavin.',
        pl:
          'Elitarni piloci myśliwców TIE/ln z Eskadry Czarnych towarzyszyli Darthowi Vaderowi w niszczycielskim ataku przeciwko siłom Rebeliantów podczas Bitwy o Yavin.',
        pt:
          'O pilotos de TIE/ln de elite do EsquadrãoPreto acompanharam Darth Vader emum ataque devastador contra as forçasRebeldes na Batalha de Yavin.',
        zh:
          '黑色中队的精英TIE/ln战斗机飞行员，在雅文战役中跟随达斯·维德进行作战，给予反抗军势力毁灭性打击。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_90.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/165f136ea10f7a71e4597d029e05f215.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8c8d1b131b5642167beffe0ab59f5e5e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/a5caabca58fe69c730efa68605428fcf.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e86a0a2269cabf4380effcd1277d7ac5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3a7eb828e81a6cc588ff4f54016d9160.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/99739f8ab010b351632acfdc95fcf3c3.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_90.png',
      },
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
      name: {
        en: 'Del Meeko',
        de: 'Del Meeko',
        fr: 'Del Meeko',
        es: 'Del Meeko',
        it: 'Del Meeko',
        pl: 'Del Meeko',
        pt: 'Del Meeko',
        zh: '戴·米克',
      },
      caption: {
        en: 'Inferno Three',
        de: 'Inferno Drei',
        fr: 'Inferno Trois',
        es: 'Infernal Tres',
        it: 'Inferno Tre',
        pl: 'Inferno Trzy',
        pt: 'Inferno Três',
        zh: '地狱3号',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'delmeeko',
      ability: {
        en:
          'While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 gegen einen beschädigten Angreifer verteidigt, darf der Verteidiger 1 Verteidigungswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 défend contre un attaquant endommagé, le défenseur peut relancer 1 dé de défense.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 se defiende contra un atacante dañado, el defensor puede volver a tirar 1 dado de defensa.',
        it:
          'Mentre una nave amica a gittata 0-2 difende contro un attaccante danneggiato, il difensore può ripetere il tiro di 1 dado di difesa.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 broni się przed uszkodzonym atakującym, obrońca może przerzucić 1 kość obrony.',
        pt:
          'Quando uma nave amiga emalcance 0-2 defender de umatacante danificado, o defensorpode rerrolar 1 dado de defesa.',
        zh:
          '当一架与你距离0~2的友方战机正进行防御，且攻击方已受伤时，该友方战机可以重投1个防御骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_85.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5405237583fe461dbdc568a0a757a787.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/83f53c975dee4fb86cce89087b05687e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6af83b7c27aff8e14853d95c4819c887.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/338ce5af7928bf3975bcb4b9ff1b61a9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/7c33f865671a81cb26b7a84e09fe6f16.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8b685021a8219a89199f37c496997aeb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_85.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_85.jpg',
      ffg: 85,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gideon Hask',
        de: 'Gideon Hask',
        fr: 'Gideon Hask',
        es: 'Gideon Hask',
        it: 'Gideon Hask',
        pl: 'Gideon Hask',
        pt: 'Gideon Hask',
        zh: '基德昂·哈斯克',
      },
      caption: {
        en: 'Inferno Two',
        de: 'Inferno Zwei',
        fr: 'Inferno Deux',
        es: 'Infernal Dos',
        it: 'Inferno Due',
        pl: 'Inferno Dwa',
        pt: 'Inferno Dois',
        zh: '地狱2号',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'gideonhask',
      ability: {
        en:
          'While you perform an attack against a damaged defender, roll 1 additional attack die.',
        de:
          'Solange du einen Angriff gegen einen beschädigten Verteidiger durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque contre un défenseur endommagé, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque contra un defensor dañado, tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco contro un difensore danneggiato, tira 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak przeciwko uszkodzonemu obrońcy, rzucasz 1 dodatkową kością ataku.',
        pt:
          'Quando você realizar um ataquecontra um defensor danificado,role 1 dado de ataque adicional.',
        zh: '当你执行攻击，且防御方已受伤时，额外投1个攻击骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_84.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/edbb77d56994cfb88db58f8ae9422e8c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f15a4d3ca39299cbf7f3e0f0a52ed2f6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/0b6b2b45a71175ed849d0c6f9771d7d0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/98b7524b0711f1ae0014cafa6d24fced.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/1a43487d45a1e9bc73647297baaf74b7.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/b6423ff726000f41f326400f574af7eb.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_84.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_84.jpg',
      ffg: 84,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Iden Versio',
        de: 'Iden Versio',
        fr: 'Iden Versio',
        es: 'Iden Versio',
        it: 'Iden Versio',
        pl: 'Iden Versio',
        pt: 'Iden Versio',
        zh: '伊达·瓦西奥',
      },
      caption: {
        en: 'Inferno Leader',
        de: 'Inferno Eins',
        fr: 'Leader Inferno',
        es: 'Jefe Infernal',
        it: 'Capo Inferno',
        pl: 'Dowódca Inferno',
        pt: 'Líder Inferno',
        zh: '地狱领队',
      },
      initiative: 4,
      limited: 1,
      cost: 41,
      xws: 'idenversio',
      ability: {
        en:
          'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
        de:
          'Bevor ein befreundeter TIE/ln-Jäger in Reichweite 0-1 1 oder mehr Schaden erleiden würde, darfst du 1 [Charge] ausgeben. Falls du das tust, verhindere jenen Schaden.',
        fr:
          "Avant qu'un chasseur TIE/ln allié à portée 0-1 ne subisse 1 ou plusieurs dégâts, vous pouvez dépenser 1 [Charge]. Dans ce cas, prévenez ce dégât.",
        es:
          'Antes de que un caza TIE/ln aliado que tengas a alcance 0 -1 vaya a sufrir 1 o más de daño, puedes gastar 1 [Charge]. Si lo haces, impides ese daño.',
        it:
          'Prima che un Caccia TIE/ln a gittata 0-1 stia per subire 1 o più danni, puoi spendere 1 [Charge]. Se lo fai, previeni quei danni.',
        pl:
          'Zanim przyjazny myśliwiec TIE/ln w zasięgu 0-1 przyjmie 1 albo więcej uszkodzeń, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, zapobiegasz tym uszkodzeniom.',
        pt:
          'Antes de uma TIE/ln fighter amigaem alcance 0-1 sofrer 1 ou maisdanos, pode gastar 1 [Charge]. Se fizerisso, evite esse dano.',
        zh:
          '在一架距离0~1的友方TIE/ln 战斗机将遭受1点或更多的伤害之前，你可以花费1[Charge]。如果你如此做，阻止该伤害。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_83.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f949e1b7de94191120a6e8f55425b868.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/83996688c496eff2e231ee3a125b80c8.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6897be730026951e0278a45ae64e6524.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f0102a90669b12d36483bd91c42cbe71.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/8c298ffded4b88d7a794be00cd89ffc4.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/89bc94ed64029fa1b854c23df043ecd7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_83.png',
      },
      charges: { value: 1, recovers: 0 },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_83.jpg',
      ffg: 83,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Obsidian Squadron Pilot',
        de: 'Pilot der Obsidian-Staffel',
        fr: "Pilote de l'Escadron Obsidian",
        es: 'Piloto del Escuadrón Obsidiana',
        it: 'Pilota dellaSquadriglia Obsidian',
        pl: 'Pilot Eskadry Obsydianowych',
        pt: 'Piloto do Esq. Obsidiana',
        zh: '黑曜石中队飞行员',
      },
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'obsidiansquadronpilot',
      text: {
        en:
          "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
        de:
          'Der Zwillingsionenantrieb des TIE-Jägers war auf Geschwindigkeit optimiert und machte den TIE/ln zu einem der wendigsten Raumschiffe, die je in Massen produziert wurden.',
        fr:
          'Le moteur ionique jumelé des chasseurs TIE a été conçu pour la vitesse, ce qui classe ces derniers parmi les vaisseaux les plus maniables jamais produits.',
        es:
          'El sistema de motor iónico doble del caza TIE fue diseñado para dotarlo de una gran velocidad; gracias a él, el TIE/ln es una de las naves estelares más maniobrables que se hayan llegado a producir en masa.',
        it:
          'Il sistema a motori ionici gemelli del Caccia TIE era basato sulla velocità e faceva del TIE/ln uno degli astrocaccia più manovrabili mai prodotti in massa.',
        pl:
          'System myśliwców z dwoma silnikami jonowymi (Twin Ion Engine - TIE) został zaprojektowany z myślą o prędkości, dlatego TIE/In to jeden z najbardziej zwrotnych statków kosmicznych produkowanych na masową skalę.',
        pt:
          'O sistema do Motor Iônico Gêmeoda TIE fighter foi projetado para entregar velocidade, fazendo da TIE/ln uma dasmais ágeis naves estelares já produzidas.',
        zh:
          'TIE系列战机在设计时追求极致的速度，采用双离子引擎系统并以此命名，使得TIE/ln战斗机成为机动性最强的量产型星际飞船。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_91.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3f731f1c6886bdcf3b5d463139025f4f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0fc6eb1efaf7fd09fd7e7d98449b6a22.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/78f579f494e0442f6d83ff8f86361c40.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9989b0f3da7c27a3755c3cfc489b6776.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/19865697998d3fe28f241a2438949983.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/95b05489c79076e27508c16f0226cf54.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_91.png',
      },
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
      name: {
        en: 'Seyn Marana',
        de: 'Seyn Marana',
        fr: 'Seyn Marana',
        es: 'Seyn Marana',
        it: 'Seyn Marana',
        pl: 'Seyn Marana',
        pt: 'Seyn Marana',
        zh: '赛因·玛拉那',
      },
      caption: {
        en: 'Inferno Four',
        de: 'Inferno Vier',
        fr: 'Inferno Quatre',
        es: 'Infernal Cuatro',
        it: 'Inferno Quattro',
        pl: 'Inferno Cztery',
        pt: 'Inferno Quatro',
        zh: '地狱4号',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'seynmarana',
      ability: {
        en:
          'While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.',
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Critical Hit]-Ergebnis ausgeben. Falls du das tust, teile dem Verteidiger 1 verdeckte Schadenskarte zu, dann negiere deine übrigen Ergebnisse.',
        fr:
          'Tant que vous effectuez une attaque, vous pouvez dépenser 1 résultat [Critical Hit]. Dans ce cas, attribuez 1 carte de dégât face cachée au défenseur, puis annuler vos résultats restants.',
        es:
          'Mientras efectúas un ataque, puedes gastar 1 resultado [Critical Hit]. Si lo haces, inflige 1 carta de Daño boca abajo al defensor, y luego anula tus resultados restantes.',
        it:
          'Mentre effettui un attacco, puoi spendere 1 risultato [Critical Hit]. Se lo fai, infliggi 1 carta danno a faccia in giù al difensore, poi annulla i tuoi risultati rimanenti.',
        pl:
          'Gdy wykonujesz atak, możesz wydać 1 wynik [Critical Hit]. Jeżeli tak zrobisz, obrońca otrzymuje 1 zakrytą kartę uszkodzenia, a ty anulujesz swoje pozostałe wyniki.',
        pt:
          'Quando realizar um ataque,você pode gastar 1 resultado [Critical Hit].Se fizer isso, cause 1 carta de dano virada para baixo no defensor, então cancele o restante dos seus resultados.',
        zh:
          '当你执行攻击时，你可以花费掷骰结果中的1[Critical Hit]。如果你如此做，防御方拿取1张面朝下的伤害卡，然后取消你剩余的掷骰结果。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_86.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/0d7cd0004faed5ce93c1b29d5274d1b9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0365604de4e8c6abf63a040b1d354b3d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/71d125750a94f3f6e3eabf784456fd17.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/96152e536518365e8c0a0b00db1661cd.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/09959ee76f824f177c1c60027fca0e7a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/44c95b4f26d7cc398644b1e10dc0aa4e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_86.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_86.jpg',
      ffg: 86,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Valen Rudor',
        de: 'Valen Rudor',
        fr: 'Valen Rudor',
        es: 'Valen Rudor',
        it: 'Valen Rudor',
        pl: 'Valen Rudor',
        pt: 'Valen Rudor',
        zh: '瓦伦·鲁多尔',
      },
      caption: {
        en: 'Braggadocious Baron',
        de: 'Angeberischer Baron',
        fr: 'Baron Orgueilleux',
        es: 'Barón presuntuoso',
        it: 'Barone Vanaglorioso',
        pl: 'Brylujący Baron',
        pt: 'Barão Exibido',
        zh: '傲慢男爵',
      },
      initiative: 3,
      limited: 1,
      cost: 27,
      xws: 'valenrudor',
      ability: {
        en:
          'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-1 verteidigt hat (nachdem ggf. Schaden abgehandelt worden ist), darfst du eine Aktion durchführen.',
        fr:
          "Après qu'un vaisseau allié à portée 0-1 a défendu (après la résolution des dégâts, s'il y en a), vous pouvez effectuer une action.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-1 se defienda (después de resolver el daño, si lo hay), puedes realizar una acción.',
        it:
          'Dopo che una nave amica a gittata 0-1 ha difeso (dopo che i danni sono stati risolti, se ce ne sono), puoi effettuare 1 azione.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-1 zakończy obronę (po rozpatrzeniu uszkodzeń, o ile takie były), możesz wykonać akcję.',
        pt:
          'Após uma nave amiga em alcance0-1 defender (após o dano serresolvido, se houver), você poderealizar uma ação.',
        zh: '在距离0~1的1架友方战机完成防御时(结算伤害后)，你可以执行1个行动。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_87.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/a04793121c41be162e06689ef95147e2.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7a05d1de1e15a5937617b6052860f8ec.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/7667a816b410e954d74b21d7ccc8f18d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/6c6c782c1cdef2d332953d2e4c2e935c.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c96a01bb3233cfd705d400cd4f4477d9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/3142532b93ac33dd7d76772318076c29.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_87.png',
      },
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
