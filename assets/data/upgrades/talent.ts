import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'composure',
    sides: [
      {
        title: {
          en: 'Composure',
          de: 'Gelassenheit',
          fr: 'Maîtrise de Soi',
          es: 'Sangre fría',
          it: 'Compostezza',
          pl: 'Opanowanie',
          pt: 'Compostura',
          zh: '镇静',
        },
        type: 'Talent',
        ability: {
          en:
            'After you fail an action, if you have no green tokens, you may perform a [Focus] action. If you do, you cannot perform additional actions this round.',
          de:
            'Nachdem eine deiner Aktionen scheitert, falls du keine grünen Marker hast, darfst du eine [Focus]-Aktion durchführen.',
          es:
            'Después de que una acción tuya fracase, si no tienes ninguna ficha verde, puedes realizar una acción [Focus].',
          fr:
            "Après avoir échoué à une action, si vous n'avez aucun marqueur vert, vous pouvez effectuer une action [Focus].",
          it:
            "Dopo che hai fallito un'azione, se non possiedi segnalini verdi, puoi effettuare 1 azione [Focus].",
          pl:
            'Gdy nie uda ci się jakaś akcja i nie masz zielonych żetonów, możesz wykonać akcję [Focus].',
          pt:
            'Após falhar em uma ação, se vocênão tiver fichas verdes, você pode realizar uma ação [Focus].',
          zh:
            '当你执行行动失败后，如果此时你没有绿色标记，你可以执行一个[Focus]行动。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/73927eb0dc7bc2bb0de194f1af1dead2.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/5a6ce1b1eb6b4aed3a39bdeee4a83e47.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/73927eb0dc7bc2bb0de194f1af1dead2.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/508312cf826dd4caaf98f6a372092024.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/61bbaef2b03ed97e9e49cec7094ea598.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/00ff1d8a061599bebd672e3d05bb0796.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/cca64806a9abaa6f19dc49598c0d65b3.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/73927eb0dc7bc2bb0de194f1af1dead2.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_156.jpg',
        ffg: 381,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'crackshot',
    sides: [
      {
        title: {
          en: 'Crack Shot',
          de: 'Meisterhafter Schuss',
          fr: 'Tireur Hors Pair',
          es: 'Tiro certero',
          it: 'Colpo da Maestro',
          pl: 'Celny strzał',
          pt: 'Tiro Certeiro',
          zh: '击球把戏',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], before the Neutralize Results step, you may spend 1 [Charge] to cancel 1 [Evade] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, vor dem Schritt „Ergebnisse neutralisieren", darfst du 1 [Charge] ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está en tu [Bullseye Arc], antes del paso de "Neutralizar los resultados", puedes gastar 1 [Charge] para anular 1 resultado [Evade].',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], avant l'étape « Neutraliser les résultats », vous pouvez dépenser 1 [Charge] pour annuler 1 résultat [Evade].",
          it:
            'Mentre effettui un attacco primario, prima del passo "Neutralizzare i Risultati", se il difensore è nel tuo [Bullseye Arc],puoi spendere 1 [Charge] per annullare 1 risultato [Evade].',
          pl:
            'Gdy wykonujesz atak podstawowy i obrońca znajduje się w twojej [Bullseye Arc], przed etapem neutralizacji wyników możesz wydać 1 [Charge], aby anulować 1 wynik [Evade].',
          pt:
            'Quando realizar um ataque primário, se o defensor estiver em seu [Bullseye Arc], antes da etapa Neutralizar Resultados, você pode gastar 1 [Charge] paracancelar 1 resultado [Evade].',
          zh:
            '当你执行基础攻击时，如果防御方在你的[Bullseye Arc]内，在抵消结果环节之前，你可以花费1[Charge]来取消1[Evade]。',
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_1.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/a85e4f8c8e9888366a88b56cf5a56006.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_1.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/7c16f63073911d61acde3c6ea895fe13.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/813fd0a1f3d75c893cd09e084ba42c94.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/37799c839271aef46552a7eced0ae741.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/2f98b815459e81874d82cadc16a81d59.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_1.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_1.jpg',
        ffg: 230,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'daredevil',
    sides: [
      {
        title: {
          en: 'Daredevil',
          de: 'Draufgänger',
          fr: 'Casse-Cou',
          es: 'Temerario',
          it: 'Temerario',
          pl: 'Śmiałek',
          pt: 'Audacioso',
          zh: '铤而走险',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a white [Boost] action, you may treat it as red to use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
          de:
            'Solange du eine weiße [Boost]-Aktion durchführst, darfst du sie behandeln, als wäre sie rot, um stattdessen die (1 [Turn Left])- oder (1 [Turn Right])-Schablone zu verwenden.',
          es:
            'Mientras realizas una acción [Boost] blanca, puedes considerarla como si fuera roja para usar la plantilla (1 [Turn Left]) o (1 [Turn Right]) en vez de una de las plantillas normales para esta acción.',
          fr:
            "Tant que vous effectuez une action [Boost] blanche, vous pouvez considérer qu'elle est rouge pour utiliser le gabarit (1 [Turn Left]) ou (1 [Turn Right]) à la place.",
          it:
            "Mentre effettui un'azione [Boost] bianca, puoi considerarla come se fosse rossa per usare invece il modello (1 [Turn Left]) o (1 [Turn Right]).",
          pl:
            'Gdy wykonujesz białą akcję [Boost], możesz ją traktować jak czerwoną, aby zamiasttego wykonać ją z użyciem wzornika (1 [Turn Left]) albo (1 [Turn Right]).',
          pt:
            'Quando realizar uma ação [Boost]branca, você pode tratá-lacomo se fosse vermelha parausar o gabarito (1 [Turn Left]) ou (1 [Turn Right]).',
          zh:
            '你执行白色[Boost]行动时，你可以将其视为红色移动并使用(1[Turn Left])或(1 [Turn Right])移动条。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_2.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/1907bb1391a2f85f2f6b55597a18a198.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_2.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/e0cad78330bdaf878de041039ece4187.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/c9cba77b36d7cbbe54549b156979b2af.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/9b2ee70e16ac19eb8083ab7f4f038432.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/e7a8a7383802dedcfc2b1eb475a75be7.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_2.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_2.jpg',
        ffg: 231,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Small'] },
      { action: { type: 'Boost', difficulty: 'White' } },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'debrisgambit',
    sides: [
      {
        title: {
          en: 'Debris Gambit',
          de: 'Trümmertanz',
          fr: 'Gambit des Astéroïdes',
          es: 'Treta de los desechos',
          it: 'Azzardo dei Detriti',
          pl: 'Fortel z przeszkodą',
          pt: 'Contornar Destroços',
          zh: 'Debris Gambit',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
          de:
            'Solange du eine rote [Evade]-Aktion durchführst, falls ein Hindernis in Reichweite 0-1 ist, behandle die Aktion stattdessen, als wäre sie weiß.',
          es:
            'Mientras realizas una acción [Evade] roja, si tienes algún obstáculo a alcance 0-1, considera esa acción como blanca en vez de roja.',
          fr:
            "Tant que vous effectuez une action [Evade] rouge, s'il y a un obstacle à portée 0-1, considérez cette action comme blanche à la place.",
          it:
            "Mentre effettui un'azione [Evade] rossa, se ci sono ostacoli a gittata 0-1, considera invece l'azione come se fosse bianca.",
          pl:
            'Gdy wykonujesz czerwoną akcję [Evade] i w zasięgu 0-1 znajduje się przeszkoda, traktuj tę akcję, jak gdyby była biała.',
          pt:
            'Quando você realizar uma ação [Evade] vermelha, se houver um obstáculo em alcance 0-1, trate a ação comose ela fosse branca.',
          zh:
            'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
        },
        slots: ['Talent'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_3.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/aaad8ab47faf39b120dd7681e808b656.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_3.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/029d3d3dd27ee8136270f512825236f1.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/7a6591eb400e61209f3147780afa9fff.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/abc7b10b44086b3194c18d8f85d7cd66.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/7c96885fe23bf634c4c0fd657f25bc40.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_3.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_3.jpg',
        ffg: 232,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'elusive',
    sides: [
      {
        title: {
          en: 'Elusive',
          de: 'Schwer zu treffen',
          fr: 'Insaisissable',
          es: 'Escurridizo',
          it: 'Elusivo',
          pl: 'Nieuchwytny',
          pt: 'Manobra Evasiva',
          zh: '神出鬼没',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
          de:
            'Solange du verteidigst, darfst du 1 [Charge] ausgeben, um 1 Verteidigungswürfel neu zu werfen. Nachdem du ein rotes Manöver vollständig ausgeführt hast, stelle 1 [Charge] wieder her.',
          es:
            'Mientras te defiendes, puedes gastar 1 [Charge] para volver a tirar 1 dado de defensa. Después de que ejecutes completamente una maniobra roja, recuperas 1 [Charge].',
          fr:
            'Tant que vous défendez, vous pouvez dépenser 1 [Charge] pour relancer 1 dé de défense. Après avoir entièrement exécuté une manœuvre rouge, récupérez 1 [Charge].',
          it:
            'Mentre difendi, puoi spendere 1 [Charge] per ripetere il tiro di 1 dado di difesa. Dopo che hai eseguito completamente una manovra rossa, recupera 1 [Charge].',
          pl:
            'Gdy się bronisz, możesz wydać 1 [Charge], aby przerzucić 1 kość obrony. Gdy wykonasz pełny czerwony manewr, odzyskaj 1 [Charge].',
          pt:
            'Quando defender, você pode gastar 1 [Charge] pararerrolar 1 dado de defesa. Após executar completamente uma manobra vermelha, recupere 1 [Charge].',
          zh:
            '当你防御时，你可以花费1[Charge]来重投1个防御骰。 你完全地执行一个红色移动后，恢复1[Charge]。',
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_4.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/b3d309bd53daa15b54d93dc4d10fe91d.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_4.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/c81728ee24beaf643877254a63b42c09.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/528668efdd4f4945521444ffe610f26b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/6ee629caa5746d14b18f4f381dcbb239.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/5c1522eeebecf8ca383e494f22c4ccb1.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_4.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_4.jpg',
        ffg: 233,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'experthandling',
    sides: [
      {
        title: {
          en: 'Expert Handling',
          de: 'Flugkunst',
          fr: "As de l'Espace",
          es: 'Pericia',
          it: 'Acrobazia Esperta',
          pl: 'Mistrzowski pilotaż',
          pt: 'Pilotagem Experiente',
          zh: '老手操作',
        },
        type: 'Talent',
        text: {
          en:
            'While heavy fighters can often be coaxed into a barrel roll, seasoned pilots know how to do it without putting undue stress on their craft or leaving themselves open to attack.',
          de:
            'Auch schwere Jäger können in eine Fassrolle gezwungen werden, wobei es einen erfahrenen Piloten braucht, um die Maschine nicht übermäßig zu belasten und dem Feind kein leichtes Ziel zu bieten.',
          fr:
            "Bien que les chasseurs lourds puissent être déportés lors d'un tonneau, les pilotes chevronnés savent comment s'y prendre sans malmener leur vaisseau ou se rendre vulnérable à une attaque.",
          es:
            'Aunque los toneles volados suelen ser una maniobra problemática para los cazas pesados, los pilotos experimentados saben cómo realizarlos sin que sus naves sufran una tensión excesiva ni queden expuestas a posibles ataques.',
          it:
            "Sebbene i caccia pesanti possano spesso essere obbligati a effettuare un avvitamento, i piloti più esperti sanno come farlo senza compromettere l'integrità strutturale della nave o senza restare esposti agli attacchi nemici.",
          pl:
            'Ciężkie myśliwce można zmusić do wykonania beczki, a doświadczeni piloci potrafią wykonać taki manewr bez zbytniego przeciążania statku albo wystawiania się na atak.',
          pt:
            'Apesar de caças pesados serem plenamente capazes de realizar uma pirueta, apenas os pilotos mais experientes sabem como executá-la sem exercer estresse indevido à nave ou sem deixá-la exposta a ataques.',
          zh:
            '操纵重型战斗机时通常需要掌握桶滚，经验老道的飞行员懂得如何操纵，既不会使战机承受过多的压力，也不会使战机被动进入攻击状态。',
        },
        slots: ['Talent'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_5.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/d214fe6fe7631cdd006ae11311ded99e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_5.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/4d59339de67ea5b8c9da07626a9327d1.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/7e9bf96e8c26854f9250dd2bc53ae8b4.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/7fe5bc87472724549b149cc536111d26.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/a2cc879909bc6be79dfe130b30db49cc.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_5.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_5.jpg',
        ffg: 234,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 3, Large: 4, Huge: 200 },
    },
    restrictions: [{ action: { type: 'Barrel Roll', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'fanatical',
    sides: [
      {
        title: {
          en: 'Fanatical',
          de: 'Fanatisch',
          fr: 'Fanatique',
          es: 'Fanático',
          it: 'Fanatico',
          pl: 'Fanatyzm',
          pt: 'Fanatical',
          zh: 'Fanatical',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
          de:
            'Solange du einen Primärangriff durchführst, falls du keine Schilde hast, darfst du 1 [Focus]-Ergebnis in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque principal, si no estás protegido por escudos, puedes cambiar 1 resultado [Focus] por un resultado [Hit].',
          fr:
            "Tant que vous effectuez une attaque principale, si vous n'êtes pas protégé, vous pouvez changer 1 résultat [Focus] en un résultat [Hit].",
          it:
            'Mentre effettui un attacco primario, se non possiedi scudi attivi, puoi cambiare 1 risultato [Focus] in 1 risultato [Hit].',
          pl:
            'Gdy wykonujesz atak podstawowy i nie masz aktywnych osłon, możesz zmienić 1 wynik [Focus] na wynik [Hit].',
          pt:
            'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
          zh:
            'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/8b164bdb2b401b6741519f6c6e067550.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/de3827c5fae3475e12b51dabdb9f28f4.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/a1142f6d53f23ac912bfb1a1e9ec41a7.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/3d7ec7028c17083e00240df4b5659d63.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/1a20ecc4086cf15a0cfa1951a22f498d.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/619e6a2d4ae9d4eaf6bbfcf7dfc9b241.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/8b164bdb2b401b6741519f6c6e067550.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/8b164bdb2b401b6741519f6c6e067550.png',
        },
        slots: ['Talent'],
        ffg: 459,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'fearless',
    sides: [
      {
        title: {
          en: 'Fearless',
          de: 'Furchtlos',
          fr: 'Intrépide',
          es: 'Intrépido',
          it: 'Senza Paura',
          pl: 'Nieustraszony',
          pt: 'Destemido',
          zh: '无所畏惧',
        },
        type: 'Talent',
        ability: {
          en:
            "While you perform a [Front Arc] primary attack, if the attack range is 1 and you are in the defender's [Front Arc], you may change 1 of your results to a [Hit] result.",
          de:
            'Solange du einen [Front Arc]-Primärangriff durchführst, falls die Angriffs­reichweite 1 ist und du im [Front Arc] des Verteidigers bist, darfst du 1 deiner Ergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque principal [Front Arc], si el alcance de ataque es 1 y estás en el [Front Arc] del defensor, puedes cambiar 1 de tus resultados por un resultado [Hit].',
          fr:
            "Tant que vous effectuez une attaque principale [Front Arc], si la portée d'attaque est 1 et que vous êtes dans l'[Front Arc] du défenseur, vous pouvez changer 1 de vos résultats en un résultat [Hit].",
          it:
            'Mentre effettui un attacco primario [Front Arc], se la gittata di attacco è 1 e sei nel [Front Arc] del difensore, puoi cambiare 1 tuo risultato in 1 risultato [Hit].',
          pl:
            'Gdy wykonujesz atak podstawowy [Front Arc], a zasięg ataku wynosi 1 i jesteś w strefie [Front Arc] obrońcy, możesz zmienić 1 z twoich wyników na wynik [Hit].',
          pt:
            'Quando realizar um ataque primário [Front Arc], se o alcance de ataque for 1 evocê estiver no [Front Arc] do defensor,você pode mudar 1 de seusresultados para um resultado [Hit].',
          zh:
            '当你执行[Front Arc]基础攻击时，如果本次攻击距离为1并且你位于防御方的[Front Arc]内，则你可以使你的1个掷骰结果变为[Hit]。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_6.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/197c61c6bf71b2fa9e9c600c2c906904.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_6.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/0e2dea15e7f8952107f2e02427b03a37.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/e6647e45a364e50b6da19ecc5e4f9877.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/dc561d6d462108d77d488727d338e336.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/236f51747611d43a00bae87b82f77a46.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_6.png',
        },
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_6.jpg',
        ffg: 235,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'heroic',
    sides: [
      {
        title: {
          en: 'Heroic',
          de: 'Heroisch',
          fr: 'Héroïque',
          es: 'Audaz',
          it: 'Eroico',
          pl: 'Heroizm',
          pt: 'Heroic',
          zh: 'Heroic',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, falls du nur Leerseiten-Ergebnisse hast und 2 oder mehr Ergebnisse hast, darfst du beliebig viele deiner Würfel neu werfen.',
          es:
            'Mientras te defiendes o efectúas un ataque, si sólo tienes resultados de cara vacía y tienes 2 o más resultados, puedes volver a tirar cualquier cantidad de tus dados.',
          fr:
            "Tant que vous défendez ou effectuez une attaque, si vous n'avez que des résultats vierges et au moins 2 résultats, vous pouvez relancer n'importe quel nombre de vos dés.",
          it:
            'Mentre difendi o effettui un attacco, se possiedi 2 o più risultati e solo risultati vuoto, puoi ripetere il tiro di un qualsiasi numero di tuoi dadi.',
          pl:
            'Gdy się bronisz albo wykonujesz atak, jeżeli uzyskałeś same puste wyniki (ale nie mniej niż 2), możesz przerzucić dowolną liczbę twoich kości.',
          pt:
            'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
          zh:
            'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/9f8baf4893cd90288df44b69b50fa788.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/da6094f8e4115ca85e9b3d67e02a17f5.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/10f4474c15cbaed4bb7d918af0d1b8b0.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/9e97d2659b5e2330181116838cb2be1e.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/f107bf5c9ce1e7d090c7bcecd0e6d143.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/845cbca4ac7078c3bbfbc29bd6fa8772.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/9f8baf4893cd90288df44b69b50fa788.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/9f8baf4893cd90288df44b69b50fa788.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/0f6d1677c35001248d7768047c10aa87.jpg',
        ffg: 471,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'intimidation',
    sides: [
      {
        title: {
          en: 'Intimidation',
          de: 'Furchteinflößend',
          fr: 'Intimidation',
          es: 'Intimidación',
          it: 'Intimidazione',
          pl: 'Zastraszanie',
          pt: 'Intimidação',
          zh: '威胁',
        },
        type: 'Talent',
        ability: {
          en:
            'While an enemy ship at range 0 defends, it rolls 1 fewer defense die.',
          de:
            'Solange ein feindliches Schiff in Reichweite 0 verteidigt, wirft es 1 Verteidigungswürfel weniger.',
          es:
            'Mientras una nave enemiga que tienes a alcance 0 se defiende, esa nave tira 1 dado de defensa menos.',
          fr:
            "Tant qu'un vaisseau ennemi à portée 0 défend, il lance un dé de défense en moins.",
          it:
            'Mentre una nave nemica a gittata 0 difende, tira 1 dado di difesa in meno.',
          pl:
            'Gdy wrogi statek w zasięgu 0 broni się, rzuca 1 kością obrony mniej.',
          pt:
            'Quando uma nave inimiga emalcance 0 defender, ela rola1 dado de defesa a menos.',
          zh: '一架距离为0的敌机进行防御时，其少投1个防御骰。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_7.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/5388daa0580fe85a9f43d1fddca67bf2.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_7.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/47b2b8c89db701933ed602f2f0cbec87.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/df95d2d33d51f0e69102a189a9dd341e.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/9aaa1bad32bde05685d71254b21c8271.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/154ad13f082435d43f7bade530db49fa.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_7.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_7.jpg',
        ffg: 236,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'juke',
    sides: [
      {
        title: {
          en: 'Juke',
          de: 'Finte',
          fr: 'Feinte',
          es: 'Finta',
          it: 'Galvanizzato',
          pl: 'Zmyłka',
          pt: 'Finta',
          zh: '假动作',
        },
        type: 'Talent',
        ability: {
          en:
            "While you perform an attack, if you are evading, you may change 1 of the defender's [Evade] results to a [Focus] result.",
          de:
            'Solange du einen Angriff durchführst, falls du ausweichst, darfst du 1 der [Evade]-Ergebnisse des Verteidigers in ein [Focus]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si estás evadiéndote, puedes cambiar 1 de los resultados [Evade] del defensor por un resultado [Focus].',
          fr:
            "Tant que vous effectuez une attaque, si vous avez un marqueur d'évasion, vous pouvez changer 1 des résultats [Evade] du défenseur en un résultat [Focus].",
          it:
            'Mentre effettui un attacco, se stai schivando, puoi cambiare 1 risultato [Evade] del difensore in 1 risultato [Focus].',
          pl:
            'Gdy wykonujesz atak i posiadasz żeton uniku, możesz zmienić 1 z wyników [Evade] obrońcy na wynik [Focus].',
          pt:
            'Quando realizar um ataque, seestiver desviando, você podemudar 1 dos resultados [Evade] dodefensor para um resultado [Focus].',
          zh:
            '当你执行攻击时，如果本轮你已获得1枚闪避标记，则你可以改变防御方的掷骰结果，使1[Evade]变成1[Focus]。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_8.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/a09e63b493ac9488a9bd2c5cfe7b7422.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_8.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/b6175948c46f73c6d156b3d53156bf4c.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/311e0c3f8af01e5983358398cd9d2b25.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/4dcb2c6eb1a3ea9b40fdd0242f315da4.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/e8fbe86157610b5b6f62fbf418bd35d9.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_8.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_8.jpg',
        ffg: 237,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'lonewolf',
    sides: [
      {
        title: {
          en: 'Lone Wolf',
          de: 'Einsamer Wolf',
          fr: 'Loup Solitaire',
          es: 'Lobo solitario',
          it: 'Lupo Solitario',
          pl: 'Samotny wilk',
          pt: 'Lobo Solitário',
          zh: '独狼',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend or perform an attack, if there are no other friendly ships at range 0-2, you may spend 1 [Charge] to reroll 1 of your dice.',
          de:
            'Solange du verteidigst oder einen Angriff durchführst, falls keine anderen befreundeten Schiffe in Reichweite 0-2 sind, darfst du 1 [Charge] ausgeben, um 1 deiner Würfel neu zu werfen.',
          es:
            'Mientras te defiendes o efectúas un ataque, si no tienes ninguna otra nave aliada a alcance 0-2, puedes gastar 1 [Charge] para volver a tirar 1 de tus dados.',
          fr:
            "Tant que vous défendez ou que vous effectuez une attaque, s'il n'y a aucun autre vaisseau allié à portée 0-2, vous pouvez dépenser 1 [Charge] pour relancer 1 de vos dés.",
          it:
            'Mentre difendi o effettui un attacco, se non ci sono altre navi amiche a gittata 0-2, puoi spendere 1 [Charge] per ripetere il tiro di 1 tuo dado.',
          pl:
            'Gdy się bronisz albo wykonujesz atak, jeżeli w zasięgu 0-2 nie ma innych przyjaznych statków, możesz wydać 1 [Charge], aby przerzucić 1 ze swoich kości.',
          pt:
            'Quando defender ou realizar um ataque,se não houver outranave amiga em alcance 0-2, você pode gastar1 [Charge] para rerrolar 1 de seus dados.',
          zh:
            '当你进行防御或执行攻击时，如果距离0~2内没有其他友方战机，你可以花费1[Charge]来重投1个骰子。',
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 1 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_9.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/6a22b6e114f0f12c9c74ef925c6d803e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_9.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/993d50e99044e3f56951784f717bd761.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/cf19d99109580176bdddea7f209ae6c4.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/a94b6ff73425d86c1f57992d31dc126e.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/57c647d992a20f94e378fe21f3aa645e.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_9.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_9.jpg',
        ffg: 238,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'marksmanship',
    sides: [
      {
        title: {
          en: 'Marksmanship',
          de: 'Treffsicherheit',
          fr: 'Adresse au Tir',
          es: 'Puntería',
          it: 'Mira Esperta',
          pl: 'Strzelec wyborowy',
          pt: 'Franco-Atirador',
          zh: '射手天赋',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Solange du einen Angriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, si el defensor está en tu [Bullseye Arc], puedes cambiar 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Tant que vous effectuez une attaque, si le défenseur est dans votre [Bullseye Arc], vous pouvez changer 1 résultat [Hit] en un résultat [Critical Hit].',
          it:
            'Mentre effettui un attacco, se il difensore è nel tuo [Bullseye Arc], puoi cambiare 1 risultato [Hit] in 1 risultato [Critical Hit].',
          pl:
            'Gdy wykonujesz atak i obrońca znajduje się w twojej [Bullseye Arc], możesz zmienić 1 wynik [Hit] na wynik [Critical Hit].',
          pt:
            'Quando realizar um ataque,se o defensor estiver em seu [Bullseye Arc],você pode mudar 1 resultado [Hit]para um resultado [Critical Hit].',
          zh:
            '当你执行攻击时，如果防御方在你的[Bullseye Arc]内，你可以使掷骰结果中的1[Hit]变为1[Critical Hit]。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_10.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/2abad05fab9d95d73e43adc1a3758431.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_10.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/842e6c4437c5eb7a2d9362d9013ed9e0.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/123fd027c33e56208a334039624854dc.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/c9a88003fe7af14666eba95af7e28aed.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/21171592b688e75d5d77714fb4a8ae13.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_10.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_10.jpg',
        ffg: 239,
      },
    ],
    cost: { value: 1 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'outmaneuver',
    sides: [
      {
        title: {
          en: 'Outmaneuver',
          de: 'Ausmanövrieren',
          fr: 'Manœuvre Improbable',
          es: 'Superioridad táctica',
          it: 'Manovrabilità Superiore',
          pl: 'Wymanewrowanie',
          pt: 'Perseguir',
          zh: '机动优势',
        },
        type: 'Talent',
        ability: {
          en:
            "While you perform a [Front Arc] attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die.",
          de:
            'Solange du einen [Front Arc]-Angriff durchführst, falls du nicht im Feuerwinkel des Verteidigers bist, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
          es:
            'Mientras efectúas un ataque [Front Arc], si no estás situado en el arco de fuego del defensor, éste tira 1 dado de defensa menos.',
          fr:
            "Tant que vous effectuez une attaque [Front Arc], si vous n'êtes pas dans l'arc de tir du défenseur, il lance 1 dé de défense en moins.",
          it:
            "Mentre effettui un attacco [Front Arc], se non sei nell'arco di fuoco del difensore, il difensore tira 1 dado di difesa in meno.",
          pl:
            'Gdy wykonujesz atak [Front Arc] i nie znajdujesz się w strefie rażenia obrońcy, obrońca rzuca 1 kością obrony mniej.',
          pt:
            'Quando realizar umataque [Front Arc], se você nãoestiver no arco de tirodo defensor, ele rola 1dado de defesa a menos.',
          zh:
            '当你执行一次[Front Arc]攻击时，如果你不在防御方的开火范围内，则防御方少投一个防御骰。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_11.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/81e19f92deea634d1ca6971a405b0afa.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_11.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/c6dafa6ce2838688141f04e89852c3d1.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/d219d105eb9f32d480c836f98fa6a9d8.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/4db1097c7843b1761782c69c092cee17.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/3285bc27ebbc370174d0cceab50406dc.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_11.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_11.jpg',
        ffg: 240,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'predator',
    sides: [
      {
        title: {
          en: 'Predator',
          de: 'Jagdinstinkt',
          fr: 'Prédateur',
          es: 'Depredador',
          it: 'Predatore',
          pl: 'Drapieżnik',
          pt: 'Predador',
          zh: '掠夺者',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 Angriffswürfel neu werfen.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc], puedes volver a tirar 1 dado de ataque.',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], vous pouvez relancer 1 dé d'attaque.",
          it:
            'Mentre effettui un attacco primario, se il difensore è nel tuo [Bullseye Arc], puoi ripetere il tiro di 1 dado di attacco.',
          pl:
            'Gdy wykonujesz atak podstawowy i obrońca znajduje się w twojej [Bullseye Arc], możesz przerzucić 1 kość ataku.',
          pt:
            'Quando realizar um ataque primário,se o defensor estiver em seu [Bullseye Arc],você pode rerrolar 1 dado de ataque.',
          zh:
            '当你执行一次基础攻击时，如果防御方在你的[Bullseye Arc]内，你可以重投一个攻击骰。',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_12.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/b71aa35192ce350b002767beadaaacbd.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_12.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/04fe5ab46fd1f24fa5a7895b003facb5.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/a533193984dfe36a9619f794e36f76fa.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/27110dd33a139e55d85a2f41f83ec163.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/2b1f90614cc15ec5ebf20d9dede14709.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_12.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_12.jpg',
        ffg: 241,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ruthless',
    sides: [
      {
        title: {
          en: 'Ruthless',
          de: 'Skrupellos',
          fr: 'Impitoyable',
          es: 'Cruel',
          it: 'Senza Pietà',
          pl: 'Bezwzględność',
          pt: 'Impiedoso',
          zh: '赶尽杀绝',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 [Hit] damage and you may change 1 of your die results to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du ein anderes befreundetes Schiff in Reichweite 0-1 zum Verteidiger wählen. Falls du das tust, erleidet jenes Schiff 1 [Hit]-Schaden und du darfst 1 deiner Würfelergebnisse in ein [Hit]-Ergebnis ändern.',
          es:
            'Mientras efectúas un ataque, puedes elegir otra nave aliada que esté situada a alcance 0-1 del defensor. Si lo haces, esa nave sufre 1 de daño [Hit] y puedes cambiar 1 de tus resultados de dado por un resultado [Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez choisir un autre vaisseau allié à portée 0-1 du défenseur. Dans ce cas, le vaisseau choisi subit 1 dégât [Hit] et vous pouvez changer 1 de vos résultats de dé en un résultat [Hit].',
          it:
            'Mentre effettui un attacco, puoi scegliere 1 altra nave amica a gittata 0-1 dal difensore. Se lo fai, quella nave subisce 1 danno [Hit] e puoi cambiare 1 tuo risultato in 1 risultato [Hit].',
          pl:
            'Gdy wykonujesz atak, możesz wskazać inny przyjazny statek w zasięgu 0-1 od obrońcy. Jeżeli tak zrobisz, wskazany statek przyjmuje 1 uszkodzenie [Hit] i możesz zmienić wynik rzutu 1 z twoich kości na [Hit].',
          pt:
            'Quando realizar um ataque, você pode escolher outra nave amiga em alcance 0-1 do defensor. Se fizer isso, a nave escolhida sofre 1 dano [Hit] e você pode mudar 1 dos resultados de seus dados para um resultado [Hit].',
          zh:
            '当你执行攻击时，你可以选择另一架与防御方距离为0~1的友方战机，使该战机承受1[Hit]伤害并且使你的1个掷骰结果变为[Hit]。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_13.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/7eacefeb09f800cea06be06edcd6c655.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_13.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/34c7f9376e79a41b9b12ac8c4183eb5c.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/65954107ae552e81f6c1e2470ca6d39b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/89eeb6199ee8d4abc259c9774f1d5432.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/18637b248aeece20c5765f4d8845da28.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_13.png',
        },
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_13.jpg',
        ffg: 242,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'saturationsalvo',
    sides: [
      {
        title: {
          en: 'Saturation Salvo',
          de: 'Flächenangriff',
          fr: 'Salve de Saturation',
          es: 'Andanada de saturación',
          it: 'Salva di Saturazione',
          pl: 'Zmasowana salwa',
          pt: 'Rajada Massiva',
          zh: 'Saturation Salvo',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
          de:
            'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, darfst du 1 [Charge] von jener Aufwertung ausgeben. Falls du das tust, wähle 2 Verteidigungswürfel. Der Verteidiger muss jene Würfel neu werfen.',
          es:
            'Mientras efectúas un ataque [Torpedo] o [Missile], puedes gastar 1 [Charge] de esa mejora. Si lo haces, elige dos dados de defensa. El defensor debe volver a tirar esos dados.',
          fr:
            'Tant que vous effectuez une attaque [Torpedo] ou [Missile], vous pouvez dépenser 1 [Charge] de cette amélioration. Dans ce cas, choisissez deux dés de défense. Le défenseur doit relancer ces dés.',
          it:
            'Mentre effettui un attacco [Torpedo] o [Missile], puoi spendere 1 [Charge] da quella miglioria. Se lo fai, scegli 2 dadi di difesa. Il difensore deve ripetere il tiro di quei dadi.',
          pl:
            'Gdy wykonujesz atak [Torpedo] albo [Missile], możesz wydać 1 [Charge] z tamtego rozwinięcia. Jeżeli tak zrobisz, wskaż dwie kości obrony. Obrońca musi przerzucić wskazane kości.',
          pt:
            'Quando realizar um ataque [Torpedo] ou [Missile], você pode gastar 1 [Charge] da melhoria utilizada. Se fizer isso, escolha dois dados de defesa. O defensor deve rerrolar os dados escolhidos.',
          zh:
            'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_14.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/a13e58919fa84f4cbb5e955aebefeecf.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_14.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/85b0e87855a38ab3c92cd1be6d69da48.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/79d3fd0504d01f0c7c9e3965c7898aa0.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/36aa6c7e944d186e0469eea6bd8f408c.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/74de7ba6afa51db4f181549d97a3afb0.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_14.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_14.jpg',
        ffg: 243,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ action: { type: 'Reload' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'selfless',
    sides: [
      {
        title: {
          en: 'Selfless',
          de: 'Selbstlos',
          fr: 'Altruisme',
          es: 'Autosacrificio',
          it: 'Altruista',
          pl: 'Ofiarność',
          pt: 'Altruísmo',
          zh: '奋不顾身',
        },
        type: 'Talent',
        ability: {
          en:
            'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
          de:
            'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, vor dem Schritt „Ergebnisse neutralisieren", falls du im Angriffswinkel bist, darfst du 1 [Critical Hit]-Schaden erleiden, um 1 [Critical Hit]-Ergebnis zu negieren.',
          es:
            'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, antes del paso de "Neutralizar los resultados", si estás en el arco de ataque, puedes sufrir 1 de daño [Critical Hit] para anular 1 resultado [Critical Hit].',
          fr:
            "Tant qu'un autre vaisseau allié à portée 0-1 défend, avant l'étape « Neutraliser les résultats », si vous êtes dans l'arc de l'attaque, vous pouvez subir 1 dégât [Critical Hit] pour annuler 1 résultat [Critical Hit].",
          it:
            'Mentre un\'altra nave amica a gittata 0-1 difende, prima del passo "Neutralizzare i Risultati", se sei nell\'arco di attacco, puoi subire 1 danno [Critical Hit]per annullare 1 risultato [Critical Hit].',
          pl:
            'Gdy inny przyjazny statek broni się w zasięgu 0-1, jeżeli znajdujesz się w strefie ataku atakującego, to przed etapem neutralizacji wyników możesz przyjąć 1 uszkodzenie [Critical Hit], aby anulować 1 wynik [Critical Hit].',
          pt:
            'Quando outra nave amiga em alcance 0-1 defender, antes da etapa Neutralizar Resultados, se você estiver no arco de ataque, você pode sofrer 1 dano [Critical Hit]para cancelar 1 resultado [Critical Hit].',
          zh:
            '与你距离为0~1的另一架友方战机进行防御时，在抵消结果的环节前，如果你在本次攻击范围内，你可以承受1[Critical Hit]伤害来取消掷骰结果中的1[Critical Hit]。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_15.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/06388326304a4cef29928d0d96902cb0.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_15.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/90c6b5c2708ea17b840aa148b34eb619.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/63aff9d00a828f754cda3a4f612c6025.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/3e022cf99b3f559a7975b502c5711e84.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/69275bdcaff6d1aee27fdd85dded81b1.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_15.png',
        },
        slots: ['Talent'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_15.jpg',
        ffg: 244,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'squadleader',
    sides: [
      {
        title: {
          en: 'Squad Leader',
          de: 'Staffelführer',
          fr: "Chef d'Escouade",
          es: 'Jefe de escuadrón',
          it: 'Caposquadra',
          pl: 'Dowódca eskadry',
          pt: 'Líder de Esquadrão',
          zh: '飞行中队领队',
        },
        type: 'Talent',
        ability: {
          en:
            'While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
          de:
            'Solange du koordinierst, kann das von dir gewählte Schiff eine Aktion nur dann durchführen, falls jene Aktion auch in deiner Aktionsleiste ist.',
          es:
            'Mientras realizas una coordinación, la nave que eliges sólo es capaz de realizar una acción si dicha acción figura también en tu barra de acciones.',
          fr:
            "Tant que vous coordonnez, le vaisseau que vous avez choisi peut effectuer une action seulement si celle-ci est également dans votre barre d'action.",
          it:
            "Mentre coordini, la nave che scegli può effettuare un'azione solo se quell'azione si trova anche nella tua barra delle azioni.",
          pl:
            'Gdy wykonujesz koordynację, wskazany przez ciebie statek może wykonać akcję tylko wtedy, gdy znajduje się ona także na twoim pasku akcji.',
          pt:
            'Quando você coordenar, a nave escolhida consegue realizar uma ação apenas se a ação em questão também estiver na sua barra de ações.',
          zh:
            '当你进行协同时，选中的战机只能执行同时存在于该战机与你的行动条上的行动。',
        },
        slots: ['Talent'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_16.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/ce8169ce4831ea606215a78d842a55f3.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_16.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/9c4bb9058ac6621a67da502b98b5a2ba.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/3ed0f5834a95b241c31346e06faacd89.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/8f60dca8418f649bed82e1e4a0b73df2.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/7e04d83faf4e9db0abe19cb36bdaf2cd.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_16.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_16.jpg',
        ffg: 245,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 4, '2': 6, '3': 8, '4': 10, '5': 12, '6': 14 },
    },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'swarmtactics',
    sides: [
      {
        title: {
          en: 'Swarm Tactics',
          de: 'Schwarmtaktik',
          fr: 'Tactique de Nuée',
          es: 'Tácticas de enjambre',
          it: 'Tattica dello Sciame',
          pl: 'Taktyka roju',
          pt: 'Tática de Enxame',
          zh: 'Swarm Tactics',
        },
        type: 'Talent',
        ability: {
          en:
            'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff in Reichweite 1 wählen. Falls du das tust, behandelt jenes Schiff seine Initiative bis zum Ende der Runde so, als würde sie deiner Initiative entsprechen.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 1. Si lo haces, esa nave considera su Iniciativa como idéntica a la tuya hasta el final de la ronda.',
          fr:
            "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 1. Dans ce cas, considérez que son initiative est égale à la vôtre jusqu'à la fin du round.",
          it:
            "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave amica a gittata 1. Se lo fai, quella nave considera la sua iniziativa pari alla tua fino alla fine del round.",
          pl:
            'Na początku fazy walki możesz wskazać 1 przyjazny statek w zasięgu 1. Jeżeli tak zrobisz, do końca rundy jego inicjatywa jest taka jak twoja.',
          pt:
            'No início da Fase de Engajamento,você pode escolher 1 nave amiga em alcance 1. Se fizer isso, trate a iniciativa da nave escolhida como se ela fosse igual à sua até o final da rodada.',
          zh:
            'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_17.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/d74d6b3e45721e86f79e6b909fdde85c.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_17.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/01ae44a7c57ea72757ef24051735b010.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/1f9524b3c1fb51948bc5cf675010fc6f.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/d7d46a413c95a1e6dd831f246b0e16a3.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/acea76bb15d721758c7ac57b12e9dbc2.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_17.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_17.jpg',
        ffg: 246,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 3, '4': 3, '5': 4, '6': 5 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'trickshot',
    sides: [
      {
        title: {
          en: 'Trick Shot',
          de: 'Trickschuss',
          fr: 'Tir Habile',
          es: 'Disparo inverosímil',
          it: 'Tiro a Sorpresa',
          pl: 'Popisowy  strzał',
          pt: 'Tiro Ardiloso',
          zh: 'Trick Shot',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
          de:
            'Solange du einen Angriff durchführst, der durch ein Hindernis versperrt ist, wirf 1 zusätzlichen Angriffswürfel.',
          es:
            'Mientras estás efectuando un ataque que está obstruido por un obstáculo, tira 1 dado de ataque adicional.',
          fr:
            "Tant que vous effectuez une attaque qui est gênée par un obstacle, lancez 1 dé d'attaque supplémentaire.",
          it:
            'Mentre effettui un attacco ostruito da un ostacolo, tira 1 dado di attacco aggiuntivo.',
          pl:
            'Gdy wykonujesz atak przesłonięty przez przeszkodę, rzuć 1 dodatkową kością ataku.',
          pt:
            'Quando você realizar um ataque obstruído por um obstáculo,role 1 dado de ataque adicional.',
          zh:
            'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_18.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/074401ae7cf9708f0c70d87680838fab.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_18.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/ff1d1f161a93bc8f17b90d1c2cbb00e4.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/d150b92e2a04dcfdc507796d6425030b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/d3c4004c5baab7abff35faeb4dba7f03.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/4176fd609d380f7a7be4db860be38fde.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_18.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_18.jpg',
        ffg: 247,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'treacherous',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Treacherous',
          de: 'Verräterisch',
          fr: 'Perfide',
          es: 'Traicionero',
          it: 'Infido',
          pl: 'Zdradziecki',
          pt: 'Treacherous',
          zh: 'Treacherous',
        },
        type: 'Talent',
        ability: {
          en:
            'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
          de:
            'Solange du verteidigst, darfst du ein Schiff wählen, das den Angriff versperrt, und 1 [Charge] ausgeben. Falls du das tust, negiere 1 [Hit]- oder [Critical Hit]-Ergebnis und das von dir gewählte Schiff erhält 1 Anstrengungsmarker. Nachdem ein Schiff in Reichweite 0-3 zerstört worden ist, stelle 1 [Charge] wieder her.',
          es:
            'Mientras te defiendes, puedes elegir una nave que obstruya el ataque y gastar 1 [Charge]. Si lo haces, anula 1 resultado [Hit] o [Critical Hit], y la nave elegida recibe 1 ficha de Sobresfuerzo. Después de que una nave que tengas a alcance 0-3 sea destruida, recuperas 1 [Charge].',
          fr:
            "Tant que vous défendez, vous pouvez choisir un vaisseau gênant l'attaque et dépenser 1 [Charge]. Dans ce cas, annulez 1 résultat [Hit] ou [Critical Hit] et le vaisseau que vous avez choisi gagne 1 marqueur de contrainte. Après qu'un vaisseau à portée 0-3 a été détruit, récupérez 1 [Charge].",
          it:
            "Mentre difendi, puoi scegliere 1 nave che ostruisce l'attacco e spendere 1 [Charge]. Se lo fai, annulla 1 risultato [Hit] o [Critical Hit] e la nave scelta ottiene 1 segnalino sforzo. Dopo che una nave a gittata 0-3 è stata distrutta, recupera 1 [Charge].",
          pl:
            'Gdy się bronisz, możesz wskazać statek przesłaniający atak i wydać 1 [Charge]. Jeżeli tak zrobisz, anulujesz 1 wynik [Hit] albo [Critical Hit], a wskazany statek otrzymuje 1 żeton przeciążenia. Gdy w zasięgu 0-3 zostanie zniszczony statek, odzyskujesz 1 [Charge].',
          pt:
            'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
          zh:
            'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
        },
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a10d907fea50e32ab28d924c67486d37.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/c35b3ce81eff2f89a9fc689b0c770dda.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/5dfd6e3fd8d558d7babe70fe58164ef9.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/3ca5c64cdfba50e23785a0ea9cad6e3e.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/c27ce38269f130419256be8e997f7b85.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/4530d3d7fd1e8598a3bef65567018875.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a10d907fea50e32ab28d924c67486d37.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a10d907fea50e32ab28d924c67486d37.png',
        },
        ffg: 529,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 2 },
  },
  {
    xws: 'dedicated',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Dedicated',
          de: 'Pflichtbewusst',
          fr: 'Dévoué',
          es: 'Entrega absoluta',
          it: 'Dedizione',
          pl: 'Oddanie',
          pt: 'Dedicated',
          zh: 'Dedicated',
        },
        type: 'Talent',
        ability: {
          en:
            'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
          de:
            'Solange ein anderes befreundetes Schiff in deinem [Left Arc] oder [Right Arc] in Reichweite 0-2 verteidigt, falls es limitiert ist oder die Aufwertung Pflichtbewusst hat und du nicht angestrengt bist, darfst du 1 Anstrengungsmarker erhalten. Falls du das tust, wirft der Verteidiger 1 seiner Leerseiten-Ergebnisse neu.',
          es:
            'Mientras otra nave aliada que tienes en tu [Left Arc] o [Right Arc] a alcance 0-2 defends, si esa nave es limitada o posee la mejora Entrega absoluta y tú no estás bajo sobresfuerzo, puedes recibir 1 ficha de Sobresfuerzo. Si lo haces, el defensor vuelve a tirar 1 de sus resultados de cara vacía.',
          fr:
            "Tant qu'un autre vaisseau allié situé dans votre [Left Arc] ou [Right Arc] à portée 0-2 défend, s'il est limité ou possède l'amélioration Dévoué et que vous n'êtes pas contraint, vous pouvez gagner 1 marqueur de contrainte. Dans ce cas, le défenseur relance 1 de ses résultats vierges.",
          it:
            "Mentre un'altra nave amica nel tuo [Left Arc] o [Right Arc] a gittata 0-2 difende, se è limitata o possiede la miglioria Dedizione, se non sei sotto sforzo, puoi ottenere 1 segnalino sforzo. Se lo fai, il difensore ripete il tiro di 1 suo risultato vuoto.",
          pl:
            'Gdy inny przyjazny statek w zasięgu 0-2 w twoim [Left Arc] albo[Right Arc] broni się i jest limitowany lub posiada rozwinięcie Oddanie, a ty nie posiadasz żetonu przeciążenia, możesz otrzymać 1 żeton przeciążenia. Jeżeli tak zrobisz, obrońca przerzuca 1 ze swoich pustych wyników.',
          pt:
            'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
          zh:
            'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
        },
        slots: ['Talent'],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/31c6723d7e5670c257acfa8788160437.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/3f49916c80da8e0a17c8e69633d8815e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/6051237098a8952fc55a0b6616fe3be5.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/aa1c29f9a9bbba7356fcfa9f801872a9.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/31899549c0697ead48b28614a0da8fb2.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/d7dd5d288e459847d77f25dc2370306f.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/31c6723d7e5670c257acfa8788160437.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/31c6723d7e5670c257acfa8788160437.png',
        },
        ffg: 544,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Galactic Republic'] },
      { 'non-limited': true },
    ],
    cost: { value: 1 },
  },
  {
    xws: 'ensnare',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Ensnare',
          de: 'Einfangen',
          fr: 'Enchevêtrement',
          es: 'Apresamiento',
          it: 'Ensnare',
          pl: 'Usidlenie',
          pt: 'Ensnare',
          zh: 'Ensnare',
        },
        type: 'Talent',
        slots: ['Talent'],
        ability: {
          en:
            'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
          de:
            'Am Ende der Aktivierungsphase, falls du gefangen bist, darfst du 1 Schiff in deinem [Single Turret Arc] -Winkel in Reichweite 0-1 wählen. Transferiere 1 Fangstrahlmarker auf es.',
          es:
            'Al final de la fase de Activación, si estás atrapado en un campo de tracción, puedes elegir 1 nave que tengas en tu arco [Single Turret Arc] a alcance 0-1. Transfiere 1 ficha de Campo de tracción a esa nave.',
          fr:
            "À la fin de la phase d'activation, si vous êtes tracté, vous pouvez choisir 1 vaisseau situé dans votre arc [Single Turret Arc] à portée 0-1. Transférez-lui 1 marqueur de rayon tracteur.",
          it:
            'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
          pl:
            'Jeżeli na koniec fazy aktywacji posiadasz żeton wiązki ściągającej, możesz wskazać 1 statek w twojej [Single Turret Arc] w zasięgu 0-1. Przenieś 1 żeton wiązki ściągającej na wskazany statek.',
          pt:
            'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
          zh:
            'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/e4a65e4f8ccb36b9a7e798da1b69f5cb.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/e9859cb7da6c539f86fcf2ea9870ba03.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/c97f62e8dfaf61c3209f8fd155212df4.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/5d7e0560460a1d91281537a658ddfc86.png',
        },
        ffg: 610,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: {
      variable: 'initiative',
      values: { '0': 21, '1': 21, '2': 21, '3': 21, '4': 21, '5': 24, '6': 28 },
    },
  },
  {
    xws: 'graviticdeflection',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Gravitic Deflection',
          de: 'Gravitationsdeflektor',
          fr: 'Déflexion Gravitationnelle',
          es: 'Desvío gravítico',
          it: 'Gravitic Deflection',
          pl: 'Odchylenie grawitacyjne',
          pt: 'Gravitic Deflection',
          zh: 'Gravitic Deflection',
        },
        type: 'Talent',
        slots: ['Talent'],
        ability: {
          en:
            'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
          de:
            'Solange du verteidigst, darfst du für jedes gefangene Schiff im Angriffswinkel 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, puedes volver a tirar 1 dado de defensa por cada nave atrapada en un campo de tracción que esté situada en el arco de ataque.',
          fr:
            "Tant que vous défendez, vous pouvez relancer 1 dé de défense pour chaque vaisseau tracté situé dans l'arc d'attaque.",
          it:
            'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
          pl:
            'Gdy się bronisz, możesz przerzucić 1 kość obrony za każdy statek z żetonem wiązki ściągającej w strefie ataku.',
          pt:
            'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
          zh:
            'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
        },
        ffg: 611,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/9723c9a90f224cc643d3eda5cd2eb1eb.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/9ffca30957e40e66d3856e3fade95d24.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/fc531e3c1ca8a891d14b8534e18ce130.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/50ec6aa5a267ece16d36533f4efe2bb0.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    cost: { value: 5 },
  },
  {
    limited: 0,
    xws: 'snapshot',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
          de:
            'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, darfst du diesen Angriff als Bonusangriff gegen es durchführen. Angriff: Deine Würfel können nicht modifiziert werden.',
          es:
            'Después de que una nave enemiga ejecute una maniobra, puedes efectuar este ataque contra esa nave como un ataque adicional. Ataque: Tus dados no pueden ser modificados.',
          fr:
            "Après qu'un vaisseau ennemi a exécuté une manœuvre, vous pouvez effectuer cette attaque contre lui en tant qu'attaque bonus. Attaque : vos dés ne peuvent pas être modifiés.",
          it:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
          pl:
            'Gdy wrogi statek wykona manewr, możesz wykonać przeciwko niemu poniższy atak jako dodatkowy atak. Atak: Twoje kości nie mogą być modyfikowane.',
          pt:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
          zh:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
        },
        title: {
          en: 'Snap Shot',
          de: 'Schnellfeuer',
          fr: 'Tir Instantané',
          es: 'Tiro reactivo',
          it: 'Snap Shot',
          pl: 'Szybki strzał',
          pt: 'Snap Shot',
          zh: 'Snap Shot',
        },
        type: 'Talent',
        slots: ['Talent'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 2,
          maxrange: 2,
          ordnance: true,
        },
        ffg: 612,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/42b5e93d700e411c4bc0da54279a97f0.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/2f1444d89626765e4c12e869d6a036f2.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/5a78529c888dc5d6553458e1dcf9e058.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/fed45c0416dfd298d9433c4608e99b7e.png',
        },
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 7, Medium: 8, Large: 9, Huge: 200 },
    },
  },
  {
    limited: 0,
    xws: 'proudtradition',
    sides: [
      {
        title: {
          en: 'Proud Tradition',
          de: 'Stolze Tradition',
          fr: 'Noble Tradition',
          es: 'Tradición honrosa',
          it: 'Proud Tradition',
          pl: 'Proud Tradition',
          pt: 'Proud Tradition',
          zh: 'Proud Tradition',
        },
        type: 'Talent',
        ability: {
          en:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
          de:
            'Aufbau: Rüste diese Seite offen aus. Solange du 2 oder weniger Stressmarker hast, darfst du [Focus]-Aktionen durchführen, auch solange du gestresst bist. Nachdem du einen Angriff durchgeführt hast, falls du gestresst bist, darf der Verteidiger 1 Fokusmarker ausgeben oder 1 [Critical Hit]-Schaden erleiden, um diese Karte umzudrehen.',
          es:
            'Preparación: Equipa esta carta con este lado boca arriba. Mientras tengas 2 o menos fichas de Tensión, puedes realizar acciones [Focus] incluso aunque estés bajo tensión. Después de que efectúes un ataque, si estás bajo tensión, el defensor puede gastar 1 ficha de Concentración o sufrir 1 de daño [Critical Hit] para darle la vuelta a esta carta.',
          fr:
            'Mise en Place : à équiper avec cette face visible. Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer des actions [Focus], même si vous êtes stressé. Après que vous avez effectué une attaque, si vous êtes stressé, le défenseur peut dépenser 1 marqueur de concentration ou subir 1 dégât [Critical Hit] pour retourner cette carte.',
          it:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
          pl:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
          pt:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
          zh:
            'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
        },
        slots: ['Talent'],
        ffg: 653,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/7551ee2956aa0fb268bd7919fa2bbde9.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/787316c850993b113cde084cac85deab.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/39c06de128e0c2be4dfa0da391c537e8.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/09ec8bb3b37800437bbff7963db6aec6.png',
        },
      },
      {
        title: {
          en: 'False Tradition',
          de: 'Falsche Tradition',
          fr: 'Tradition Falsifiée',
          es: 'Tradición fraudulenta',
          it: 'False Tradition',
          pl: 'False Tradition',
          pt: 'False Tradition',
          zh: 'False Tradition',
        },
        type: 'Talent',
        ability: {
          en: 'Treat your [Focus] actions as red.',
          de: 'Behandle deine [Focus]-Aktionen, als wären sie rot.',
          es: 'Tus acciones [Focus] se consideran rojas.',
          fr: 'Considérez vos actions [Focus] comme rouge.',
          it: 'Treat your [Focus] actions as red.',
          pl: 'Treat your [Focus] actions as red.',
          pt: 'Treat your [Focus] actions as red.',
          zh: 'Treat your [Focus] actions as red.',
        },
        slots: ['Talent'],
        ffg: 652,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/b22e75c1fb0397784e75f381f1d9a8e3.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/f2737231f8686ee641a2eb0c9d3ab271.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/b3accb3e612247d4460fbd97101a67f7.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/a060961e9ee792e605c75aaf6d65ad34.png',
        },
      },
    ],
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 2 },
  },
  {
    xws: 'deadeyeshot',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        title: {
          en: 'Deadeye Shot',
          de: 'Schuss ins Schwarze',
          fr: 'Tir assuré',
          it: 'Deadeye Shot',
          pl: 'Deadeye Shot',
          pt: 'Deadeye Shot',
          zh: 'Deadeye Shot',
          es: 'Tiro preciso',
        },
        type: 'Talent',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 [Hit]-Ergebnis ausgeben oder 1 1 [Critical Hit]-Ergebnis in ein [Hit]-Ergebnis ändern. Falls du das tust, legt der Verteidiger 1 seiner Schadenskarten offen.',
          fr:
            'Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Bullseye Arc], vous pouvez dépenser 1 résultat [Hit] ou changer 1 résultat [Critical Hit] en un résultat [Hit]. Dans ce cas, le défenseur expose 1 de ses cartes de dégât.',
          it:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          pl:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          pt:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          zh:
            'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
          es:
            'Mientras efectúas un ataque principal, si el defensor está situado en tu [Bullseye Arc], puedes gastar 1 resultado [Hit] o cambiar 1 resultado [Critical Hit] por un resultado [Hit]. Si lo haces, el defensor expone 1 de sus cartas de Daño.',
        },
        slots: ['Talent'],
        ffg: 670,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/99f10f4dd059aae2529ec0863a6cc47e.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
  },
  {
    xws: 'ionlimiteroverride',
    limited: 0,
    cost: { value: 3 },
    sides: [
      {
        title: { en: 'Ion Limiter Override' },
        type: 'Talent',
        ability: {
          en:
            'After you fully execute a red maneuver, you may perform a [Barrel Roll] action, even while stressed.  If you do, roll an attack die; on a [Hit] result gain 1 strain token, and on a [Critical Hit] result, gain 1 ion token.',
        },
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      {
        chassis: [
          'tielnfighter',
          'tieadvancedx1',
          'tieskstriker',
          'tieddefender',
          'tiesabomber',
          'tiecapunisher',
          'tieadvancedv1',
          'tiephphantom',
          'tieagaggressor',
          'tieininterceptor',
          'tiereaper',
          'tiefofighter',
          'tiesffighter',
          'tievnsilencer',
          'tiebainterceptor',
        ],
      },
    ],
  },
  {
    xws: 'margsablclosure',
    limited: 0,
    cost: { value: 200 },
    sides: [
      {
        title: { en: 'Marg Sabl Closure' },
        type: 'Talent',
        ability: {
          en:
            'After you fully execute a maneuver, if you moved through an obstacle, structure, or huge ship, or if you deployed, you may choose 1 enemy ship in your [Front Arc] at range 1-2.  That ship gains 1 strain token.',
        },
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: false,
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
  },
  {
    xws: 'starbirdslash',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        title: { en: 'Starbird Slash' },
        type: 'Talent',
        ability: {
          en:
            "After you fully execute a maneuver, you may choose 1 enemy ship you moved through.  That ship gains 1 strain token.  Then, if you are in that ship's firing arc, you gain 1 strain token.",
        },
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['rz1awing', 'rz2awing'] }],
  },
  {
    xws: 'backwardstailslide',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        title: { en: 'Backwards Tailslide' },
        type: 'Talent',
        ability: {
          en:
            'While you boost or barrel roll, if your equipped [Configuration] upgrade has the "(Closed)" side faceup, you can move through and overlap obstacles.  After you boost or barrel roll through an obstacle, if you are not at range 0 of it, gain 1 evade token.',
        },
        slots: ['Talent'],
        ffg: -1,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['t65xwing', 't70xwing'] }],
  },
];

export default t;
