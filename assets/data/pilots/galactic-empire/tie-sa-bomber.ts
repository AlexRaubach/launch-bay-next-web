import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/sa Bomber',
    de: 'TIE/sa-Bomber',
    fr: 'Bombardier TIE/sa',
    it: 'Bombardiere TIE/sa',
    pl: 'Bombowiec TIE/sa',
    pt: 'TIE/sa Bomber',
    zh: 'TIE/sa Bomber',
    es: 'Bombardero TIE/sa',
  },
  xws: 'tiesabomber',
  ffg: 19,
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
    '3KR',
    '4FW',
    '5KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Nimble Bomber',
      de: 'Wendiger Bomber',
      fr: 'Bombardier Agile',
      es: 'Bombardero ágil',
      it: 'Bombardiere Agile',
      pl: 'Zwrotny bombowiec',
      pt: 'Bombardeiro Ágil',
      zh: 'Nimble Bomber',
    },
    text: {
      en:
        'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      de:
        'Falls du unter Verwendung einer [Straight]-Schablone ein Gerät abwerfen würdest, darfst du stattdessen eine [Bank Left]- oder [Bank Right]-Schablone derselben Geschwindigkeit verwenden.',
      fr:
        'si vous devez utiliser un gabarit [Straight] pour larguer un engin, vous pouvez utiliser un gabarit [Bank Left] ou [Bank Right] de même vitesse à la place.',
      es:
        'Si vas a soltar un dispositivo utilizando una plantilla [Straight], en vez de esa plantilla puedes utilizar una plantilla [Bank Left] o [Bank Right] con la misma velocidad.',
      it:
        'Se stai per sganciare un congegno usando un modello [Straight], puoi invece usare un modello [Bank Left] o [Bank Right] con la stessa velocità.',
      pl:
        'Jeżeli masz zrzucić urządzenie przy pomocy wzornika [Straight], możesz zamiast tego skorzystać z wzornika [Bank Left] albo [Bank Right] o tej samej prędkości.',
      pt:
        'Se for soltar um dispositivo usando um gabarito [Straight], você pode, em vez disso, usar um gabarito[Bank Left] ou [Bank Right] de mesma velocidade.',
      zh:
        'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEBomber.png',
  pilots: [
    {
      name: {
        en: '"Deathfire"',
        de: '„Todesfeuer"',
        fr: '"Deathfire"',
        es: '"Muerte Ígnea"',
        it: '"Deathfire"',
        pl: '„Deathfire"',
        pt: '"Deathfire"',
        zh: '"Deathfire"',
      },
      caption: {
        en: 'Unflinching Diehard',
        de: 'Unverwüstlich und unerschrocken',
        fr: 'Fanatique Inébranlable',
        es: 'Desafiante hasta el final',
        it: 'Impassibile e Incrollabile',
        pl: 'Niezłomny twardziel',
        pt: 'Obstinado Inabalável',
        zh: 'Unflinching Diehard',
      },
      initiative: 2,
      limited: 1,
      cost: 32,
      xws: 'deathfire',
      ability: {
        en:
          'After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.',
        de:
          'Nachdem du zerstört worden bist, bevor du entfernt wirst, darfst du einen Angriff durchführen und 1 Gerät abwerfen oder starten.',
        fr:
          'Après avoir été détruit et avant de retirer votre figurine, vous pouvez effectuer une attaque et larguer ou lancer 1 engin.',
        es:
          'Después de que seas destruido, antes de ser retirado de la zona de juego, puedes efectuar un ataque y soltar o lanzar 1 dispositivo.',
        it:
          'Dopo che sei stato distrutto, puoi effettuare un attacco e sganciare o lanciare 1 congegno.',
        pl:
          'Gdy zostaniesz zniszczony, zanim zostaniesz usunięty, możesz wykonać atak i zrzucić albo wystrzelić 1 urządzenie.',
        pt:
          'Após ser destruído, antes de ser removido, você pode realizar umataque e soltar ou lançar 1 dispositivo.',
        zh:
          'After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_110.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/b1a3d55064e777aafa55ba705ce41048.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/92c75ee6a8f6b833b78d3c55eb4dd586.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5ae43e2bbd57098f2b53c9a50ef5576b.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f082f6b20d339d08831f91233f4c41ed.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6831ec0b6917eec297cc90c20545e8f6.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7ccc98b2ad1081ab88c5299ba85be45d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_110.png',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_110.jpg',
      ffg: 110,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Captain Jonus',
        de: 'Captain Jonus',
        fr: 'Captain Jonus',
        es: 'Capitán Jonus',
        it: 'Capitano Jonus',
        pl: 'Kapitan Jonus',
        pt: 'Capitão Jonus',
        zh: 'Captain Jonus',
      },
      caption: {
        en: 'Disciplined Instructor',
        de: 'Disziplinierter Ausbilder',
        fr: 'Instructeur Rigoureux',
        es: 'Instructor disciplinado',
        it: 'Istruttore Disciplinato',
        pl: 'Zdyscyplinowany instruktor',
        pt: 'Instrutor Disciplinado',
        zh: 'Disciplined Instructor',
      },
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'captainjonus',
      ability: {
        en:
          'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 einen [Torpedo]- oder [Missile]-Angriff durchführt, darf jenes Schiff bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 effectue une attaque [Torpedo] ou [Missile], il peut relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 0−1 efectúa un ataque [Torpedo] o [Missile], esa nave puede volver a tirar hasta 2 dados de ataque.',
        it:
          'Mentre una nave amica a gittata 0-1 effettua un attacco [Torpedo] o [Missile], può ripetere il tiro di un massimodi 2 dadi di attacco.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-1 wykonuje atak [Torpedo] albo [Missile], może przerzucić maksymalnie 2 ze swoich kości ataku.',
        pt:
          'Quando uma nave amiga em alcance 0-1 realizar um ataque [Torpedo] ou [Missile], ela pode rerrolar até 2 dados de ataque.',
        zh:
          'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_108.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ff0bd479a467ebcce510f89fadafbe36.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ccc95536091d8265ef64507d83e6ab5a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/42f9b62925de517a4b29e0d8eb18e890.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/dea031657e4c873eb3af9b9dfc70d6e9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/79ffebb44f977bdaed5cc6457d1385b2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/42204e602bf0bfdc37ff69d6a33c553e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_108.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_108.jpg',
      ffg: 108,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Gamma Squadron Ace',
        de: 'Fliegerass der Gamma-Staffel',
        fr: "As de l'Escadron Gamma",
        es: 'As del Escuadrón Gamma',
        it: 'Asso dellaSquadriglia Gamma',
        pl: 'As Eskadry Gamma',
        pt: 'Ás do Esquadrão Gama',
        zh: 'Gamma Squadron Ace',
      },
      initiative: 3,
      limited: 0,
      cost: 30,
      xws: 'gammasquadronace',
      text: {
        en:
          "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
        de:
          'Der TIE-Bomber ist zwar nicht so schnell und wendig wie ein TIE/ln, dafür besitzt er genügend Feuerkraft, um praktisch jedes feindliche Ziel auszulöschen.',
        fr:
          "Bien qu'il ne soit pas aussi maniable et rapide qu'un TIE/ln, le Bombardier TIE a une puissance de feu suffisante pour détruire à peu près n'importe quelle cible.",
        es:
          'Aunque no son tan veloces ni maniobrables como el modelo TIE/ln, el compartimento de munición incorporado a los bombarderos TIE les permite acarrear suficiente potencia de fuego para destruir prácticamente cualquier objetivo enemigo.',
        it:
          'Anche se deve sacrificare parte della sua velocità e manovrabilità rispetto a un TIE/ln, il Bombardiere TIE vanta armamenti in abbondanza, sufficienti a distruggere praticamente ogni bersaglio nemico.',
        pl:
          'Choć bombowiec TIE ma mniejszą prędkość w porównaniu do TIE/ln, to zwiększony udźwig pozwala mu na przenoszenie dostatecznej ilości uzbrojenia, aby zniszczyć praktycznie każdy cel.',
        pt:
          'Apesar de sacrificar boa parte de sua velocidade e agilidade se comparada com uma TIE/ln, a capacidade de carga aumentada da TIE bomber pode carregar poder de fogo para destruir virtualmente qualquer alvo inimigo.',
        zh:
          "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_111.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fc6797429ff39a4526ff3a0b9966c583.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fc8f0b65eeed63d9f6d489d26c90c0eb.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8425597927055038ecbbac5ae03b24cd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7d30318e00db524452be00bc4669370a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/dab82a84a1d3562fbcdf1fae79627809.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/6841597779382492d92e99c86be887c4.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_111.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_111.jpg',
      ffg: 111,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Major Rhymer',
        de: 'Major Rhymer',
        fr: 'Major Rhymer',
        es: 'Mayor Rhymer',
        it: 'Maggiore Rhymer',
        pl: 'Major Rhymer',
        pt: 'Major Rhymer',
        zh: 'Major Rhymer',
      },
      caption: {
        en: 'Scimitar Leader',
        de: 'Scimitar Eins',
        fr: 'Leader Cimeterre',
        es: 'Jefe Cimitarra',
        it: 'Capo Scimitar',
        pl: 'Dowódca Sejmitarów',
        pt: 'Líder Cimitarra',
        zh: 'Scimitar Leader',
      },
      initiative: 4,
      limited: 1,
      cost: 37,
      xws: 'majorrhymer',
      ability: {
        en:
          'While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.',
        de:
          'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, darfst du die Reichweitenbedingung um 1 erhöhen oder verringern, bis zu einem Limit von 0-3.',
        fr:
          'Tant que vous effectuez une attaque [Torpedo] ou [Missile], vous pouvez augmenter ou réduire de 1 le prérequis de portée, dans une limite de 0-3.',
        es:
          'Mientras efectúas un ataque [Torpedo] o [Missile], puedes incrementar o reducir en 1 el requisito de alcance, hasta un límite de 0−3.',
        it:
          'Mentre effettui un attacco [Torpedo] o [Missile], puoi aumentare o ridurre di 1 il requisito di gittata, fino a un limite di 0-3.',
        pl:
          'Gdy wykonujesz atak [Torpedo] albo [Missile], możesz zwiększyć albo zmniejszyć o 1 wymagania dotyczące zasięgu, ale nie przekraczając przedziału 0-3.',
        pt:
          'Quando realizar um ataque [Torpedo] ou [Missile], você pode aumentar ou diminuir o requisito de alcance em 1, até um limite de 0-3.',
        zh:
          'While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_109.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7d87de755c7e33cbe2b1a864a33930de.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/de17eed9983ac3439e8f58c731efe50e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6e55845aad9f3f6acf8435f9e31b1545.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f1684c61fb4ea8df4eb6523e8089f3b0.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/2e5c0b26bf6374645240879a8215abd1.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/fdfcba6a7b32d5ab20c44827790f81b6.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_109.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_109.jpg',
      ffg: 109,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Scimitar Squadron Pilot',
        de: 'Pilot der Scimitar-Staffel',
        fr: 'Scimitar Squadron Pilot',
        es: 'Piloto del Escuadrón Cimitarra',
        it: 'Pilota dellaSquadriglia Scimitar',
        pl: 'Pilot Eskadry Sejmitarów',
        pt: 'Piloto do Esq. Cimitarra',
        zh: 'Scimitar Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 27,
      xws: 'scimitarsquadronpilot',
      text: {
        en:
          'The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.',
        de:
          'Der TIE/sa ist außergewöhnlich wendig für einen Bomber und kann sein Ziel mit absoluter Präzision anvisieren, um den Kollateralschaden zu minimieren.',
        fr:
          "Le TIE/sa est particulièrement précis pour un bombardier, lui permettant des frappes ciblées tout en évitant d'infliger des dommages collatéraux excessifs à la zone environnante.",
        es:
          'El TIE/sa es excepcionalmente ágil para tratarse de un bombardero, lo que le permite localizar y destruir un blanco minimizando los daños colaterales en la zona circundante.',
        it:
          "Il TIE/sa è straordinariamente agile per essere un bombardiere ed è in grado di puntare con precisione un bersaglio anche mentre evita gli ingenti danni collaterali nell'area circostante.",
        pl:
          'TIE/sa jest wyjątkowo zwrotny jak na bombowiec, dzięki czemu może wykonywać ataki z chirurgiczną precyzją, unikając niezamierzonych zniszczeń w pobliżu celu.',
        pt:
          'A TIE/sa é excepcionalmente ágil paraum bombardeiro, permitindo que ela localizeseu alvo enquanto evita danos colaterais excessivos da área ao seu redor.',
        zh:
          'The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_112.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2552398e485f9461a79124dfcbe8743e.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/d5678a40db94b9780662d5d45a8ce151.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/16aae36739bb99f294a9d32aba62f510.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/adffd0e64585c4908e16139700c57d39.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0f5019dde35afe10dbf9c589a8b52075.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/700b35b3ccd02aee19833c5fe33370b8.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_112.png',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_112.jpg',
      ffg: 112,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Tomax Bren',
        de: 'Tomax Bren',
        fr: 'Tomax Bren',
        es: 'Tomax Bren',
        it: 'Tomax Bren',
        pl: 'Tomax Bren',
        pt: 'Tomax Bren',
        zh: 'Tomax Bren',
      },
      caption: {
        en: 'Brash Maverick',
        de: 'Ungestümer Einzelkämpfer',
        fr: 'Franc-Tireur Impétueux',
        es: 'Inconformista impetuoso',
        it: 'Irruento Cane Sciolto ',
        pl: 'Lekkomyślny indywidualista',
        pt: 'Dissidente Atrevido',
        zh: 'Brash Maverick',
      },
      initiative: 5,
      limited: 1,
      cost: 35,
      xws: 'tomaxbren',
      ability: {
        en:
          'After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.',
        de:
          'Nachdem du eine [Reload]-Aktion durchgeführt hast, darfst du 1 [Charge] von 1 deiner ausgerüsteten [Talent]-Aufwertungskarten wiederherstellen.',
        fr:
          "Après avoir effectué une action [Reload], vous pouvez récupérer 1 marqueur [Charge] sur 1 de vos cartes d'amélioration [Talent] équipée.",
        es:
          'Después de que efectúes una acción [Reload], puedes recuperar 1 ficha [Charge] que esté sobre 1 de tus cartas de Mejora [Talent] equipadas.',
        it:
          "Dopo che hai effettuato un'azione [Reload], puoi recuperare 1 [Charge] su 1 carta miglioria [Talent] di cui sei dotato.",
        pl:
          'Gdy wykonasz akcję [Reload], możesz odzyskać 1 [Charge] z 1 z kart rozwinięć [Talent], w które jesteś wyposażony.',
        pt:
          'Após realizar uma ação [Reload], você pode recuperar 1 [Charge] em 1 de suas cartas de melhoria [Talent] equipadas.',
        zh:
          'After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_107.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3b89f1b149e197026cfe57d512067620.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/30fcd1fe59db0cc6cd036fd8aed84c69.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/035099c017637a284f3f0386f9cd94a0.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/fa70a3eb4b84be7a97da410a25f7dd8f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3a554d241072bdca8e09383eab28b746.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/24924432d9562a649556982c55f48ddf.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_107.png',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_107.jpg',
      ffg: 107,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
