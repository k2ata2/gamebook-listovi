// --- DATA PŘÍBĚHU (ZACHRAŇTE LISTOVÍ) ---
export const storyData = {
  start: {
    id: 'start',
    title: '1. Náměstí v šeru',
    text: 'Stojíte uprostřed vesnice Listoví. Světlušky zmizely a tma je téměř hmatatelná. Musíte se vybavit na cestu. Pozor: Do každého domu můžete vstoupit jen jednou (pokud vás nevyhodí dřív).',
    imageType: 'town_dark',
    choices: [
      { text: 'Ke kováři Bivojovi', target: 'blacksmith', reqOpen: 'blacksmith' },
      { text: 'K bylinářce, babce Kořenářce', target: 'herbalist', reqOpen: 'herbalist' },
      { text: 'Do hostince „U Poslední světlušky"', target: 'inn', reqOpen: 'inn' },
      { text: 'Ke staré Studni', target: 'well', reqOpen: 'well' },
      { text: 'K Městské bráně', target: 'gate' }
    ]
  },
  // --- KOVÁŘ ---
  blacksmith: {
    id: 'blacksmith',
    title: '2. U kováře Bivoje',
    text: 'Bivoj brousí ostří. Na stole leží parádní SEKERA. „Stojí 5 zlaťáků. Máš? Nebo vypadni."',
    imageType: 'forge',
    choices: [
      { text: 'Koupit sekeru', target: 'blacksmith_buy', cost: 5, reqGold: 5 },
      { text: 'Odpracovat si ji', target: 'blacksmith_work' },
      { text: 'Zkusit sekeru ukrást', target: 'blacksmith_steal' },
      { text: 'Odejít (Můžeš se vrátit)', target: 'start' }
    ]
  },
  blacksmith_buy: {
    id: 'blacksmith_buy',
    title: '7. Koupě sekery',
    text: 'Cinknete penězi. „Platí. Je tvoje." (Kovářství je nyní uzavřeno)',
    imageType: 'forge',
    choices: [
      { text: 'Vrátit se na náměstí', target: 'start', loot: 'Sekera', closeLoc: 'blacksmith' }
    ]
  },
  blacksmith_work: {
    id: 'blacksmith_work',
    title: '8. Poctivá práce',
    text: 'Dřete hodinu se dřevem. Bivoj uznale kývne. „Tady je tvoje odměna." (Kovářství je nyní uzavřeno)',
    imageType: 'forge',
    choices: [
      { text: 'Vrátit se na náměstí', target: 'start', loot: 'Sekera', closeLoc: 'blacksmith' }
    ]
  },
  blacksmith_steal: {
    id: 'blacksmith_steal',
    title: '9. Zpackaná krádež',
    text: 'Bivoj vás chytí! „Zloději!" Praští vás násadou a vykope na mráz. Sem už nesmíte.',
    imageType: 'krádež',
    choices: [
      { text: 'Kulhat na náměstí', target: 'start', damage: 1, closeLoc: 'blacksmith' }
    ]
  },
  // --- BYLINÁŘKA ---
  herbalist: {
    id: 'herbalist',
    title: '3. U babky Kořenářky',
    text: '„Jó, ty chceš lektvar zdraví? Došla mi přísada. Přineste mi Měsíčník sněžný: Svítí MODŘE. Nespleťte si ho s Vlčím morem!"',
    imageType: 'herbalist',
    choices: [
      { text: 'Jít na zmrzlou louku', target: 'meadow' },
      { text: 'Odejít (Můžeš se vrátit)', target: 'start' }
    ]
  },
  meadow: {
    id: 'meadow',
    title: '10. Zmrzlá louka',
    text: 'Najdete několik bylin. Kterou vezmete?',
    imageType: 'flower',
    choices: [
      { text: 'Modrou s trny', target: 'herb_wrong' },
      { text: 'Modrou s kulatými lístky', target: 'herb_right' },
      { text: 'Černou páchnoucí', target: 'herb_wrong' },
      { text: 'Červenou s velkými listy', target: 'herb_wrong' },
      { text: 'Fialovou s trny', target: 'herb_wrong' }
    ]
  },
  herb_wrong: {
    id: 'herb_wrong',
    title: '11. Špatná bylinka',
    text: 'Babka se zděsí: „To je plevel! Vypadněte, nemehla!" (Bylinářka vás vyhnala)',
    imageType: 'skull',
    choices: [
      { text: 'Vrátit se na náměstí', target: 'start', closeLoc: 'herbalist' }
    ]
  },
  herb_right: {
    id: 'herb_right',
    title: '12. Správná bylinka',
    text: '„To je on!" Babka uvaří lektvar. „Tady máte."',
    imageType: 'lektvar',
    choices: [
      { text: 'Vzít lektvar a jít', target: 'start', loot: 'Lektvar zdraví', closeLoc: 'herbalist' }
    ]
  },
  // --- HOSTINEC ---
  inn: {
    id: 'inn',
    title: '4. Hostinec',
    text: 'V koutě sedí Cizinec. Na věšáku visí kabát kupce s měšcem.',
    imageType: 'inn',
    choices: [
      { text: 'Promluvit si s cizincem', target: 'stranger_talk' },
      { text: 'Ukrást měšec', target: 'inn_steal' },
      { text: 'Odejít (Můžeš se vrátit)', target: 'start' }
    ]
  },
  stranger_talk: {
    id: 'stranger_talk',
    title: '13. Rozhovor s cizincem',
    text: 'Cizinec varuje: „Nechoďte do Jiskerných štítů. Je to past. Vládne tam ledová temnota."',
    imageType: 'inn',
    choices: [
      { text: 'Zkusit ukrást měšec', target: 'inn_steal' },
      { text: 'Odejít na náměstí (Můžeš se vrátit)', target: 'start' }
    ]
  },
  inn_steal: {
    id: 'inn_steal',
    title: '14. Krádež měšce',
    text: 'Šikovně ukradnete měšec a rychle zmizíte ven, než si toho někdo všimne. (Do hostince už nemůžete)',
    imageType: 'coins',
    choices: [
      { text: 'Zmizet na náměstí', target: 'start', lootGold: 5, closeLoc: 'inn' }
    ]
  },
  // --- STUDNA ---
  well: {
    id: 'well',
    title: '5. Stará studna',
    text: 'Nakloníte se nad temnou díru. Dole v ledové vodě něco září. Je to hluboko.',
    imageType: 'well',
    choices: [
      { text: 'Rychle tam vlézt', target: 'well_risk' },
      { text: 'Rozhlédnout se po okolí', target: 'well_smart' },
      { text: 'Odejít (Můžeš se vrátit)', target: 'start' }
    ]
  },
  well_risk: {
    id: 'well_risk',
    title: '80. Ledová koupel',
    text: 'Slezete dolů. Voda je ledová jako smrt. Vylovíte JANTAR, ale mráz vám pronikl až do kostí.',
    imageType: 'ice_death',
    choices: [
      { text: 'Vylézt ven', target: 'start', loot: 'Jantar', damage: 1, closeLoc: 'well' }
    ]
  },
  well_smart: {
    id: 'well_smart',
    title: '81. Důvtipný průzkum',
    text: 'V trávě najdete staré vědro na laně! Spustíte ho dolů a vytáhnete JANTAR suchou nohou.',
    imageType: 'well',
    choices: [
      { text: 'Vzít Jantar', target: 'start', loot: 'Jantar', closeLoc: 'well' }
    ]
  },
  // --- BRÁNA (ROZCESTÍ) ---
  gate: {
    id: 'gate',
    title: '6. Městská brána',
    text: 'Strážný vás varuje před zimou. Rozcestník ukazuje dvě cesty. Jakmile projdete bránou, do města se už nevracíte.',
    imageType: 'crossroads',
    choices: [
      { text: 'Jiskerné štíty', target: 'mountains_30' },
      { text: 'Šeroles', target: 'forest_60' },
      { text: 'Ještě se vrátit na náměstí', target: 'start' }
    ]
  },
  // --- HORY (ŠPATNÁ CESTA) ---
  mountains_30: {
    id: 'mountains_30',
    title: '30. Zamrzlé jezero',
    text: 'Cesta vede přes praskající ledové jezero.',
    imageType: 'jezero',
    choices: [
      { text: 'Jít pomalu a opatrně', target: 'mountains_31' },
      { text: 'Přeběhnout to!', target: 'mountains_32' }
    ]
  },
  mountains_31: {
    id: 'mountains_31',
    title: '31. Pomalý mráz',
    text: 'Led drží, ale mráz na otevřené ploše vás ničí.',
    imageType: 'ice_death',
    choices: [
      { text: 'Pokračovat', target: 'mountains_33', damage: 1 }
    ]
  },
  mountains_32: {
    id: 'mountains_32',
    title: '32. Prolomený led',
    text: 'KŘUP! Probořili jste se!',
    imageType: 'ice_death',
    choices: [
      { text: 'Vyškrábat se ven', target: 'mountains_33', damage: 2 }
    ]
  },
  mountains_33: {
    id: 'mountains_33',
    title: '33. Ledový sráz',
    text: 'Musíte vyšplhat nahoru.',
    imageType: 'sraz',
    choices: [
      { text: 'Použít SEKERU', target: 'mountains_34', req: 'Sekera' },
      { text: 'Lézt po rukou', target: 'mountains_34', damage: 2 }
    ]
  },
  mountains_34: {
    id: 'mountains_34',
    title: '34. Vánice šepotů',
    text: 'Bílá tma a lákavé hlasy: „Pojďte do tepla..."',
    imageType: 'ice_death',
    choices: [
      { text: 'Jít za hlasy', target: 'mountains_35' },
      { text: 'Čekat na místě', target: 'mountains_36' }
    ]
  },
  mountains_35: {
    id: 'mountains_35',
    title: '35. Past hlasů',
    text: 'Hlasy vás navedou do jámy.',
    imageType: 'skull',
    choices: [
      { text: 'Plazit se dál', target: 'mountains_37', damage: 2 }
    ]
  },
  mountains_36: {
    id: 'mountains_36',
    title: '36. Odolání',
    text: 'Přečkáte v mrazu.',
    imageType: 'mountains',
    choices: [
      { text: 'Pokračovat', target: 'mountains_37', damage: 1 }
    ]
  },
  mountains_37: {
    id: 'mountains_37',
    title: '37. Vrchol zklamání',
    text: 'Na vrcholu není světlo, jen smrtící mráz. Omdléváte. Toto je konec vaší cesty.',
    imageType: 'vrchol',
    choices: [
      { text: 'Začít úplně znovu', target: 'reset' }
    ]
  },
  // --- LES (SPRÁVNÁ CESTA) ---
  forest_60: {
    id: 'forest_60',
    title: '60. Hranice Šerolesa',
    text: 'Cestu blokuje Pavouk a pavučina.',
    imageType: 'forest_dark',
    choices: [
      { text: 'Přeseknout pavučinu SEKEROU', target: 'forest_65', req: 'Sekera' },
      { text: 'Trhat rukama', target: 'forest_65', damage: 2 }
    ]
  },
  forest_65: {
    id: 'forest_65',
    title: '65. Šeptající řeka',
    text: 'Řeka fialové mlhy.',
    imageType: 'reka',
    choices: [
      { text: 'Přebrodit', target: 'forest_66' },
      { text: 'Skákat po kamenech', target: 'forest_67' },
      { text: 'Porazit strom SEKEROU', target: 'forest_68', req: 'Sekera' }
    ]
  },
  forest_66: {
    id: 'forest_66',
    title: '66. Koupel v zapomnění',
    text: 'Mlha vás dezorientuje.',
    imageType: '',
    choices: [
      { text: 'Vylézt', target: 'forest_70', damage: 1 }
    ]
  },
  forest_67: {
    id: 'forest_67',
    title: '67. Kameny',
    text: 'Přes-ká-če-te. Úspěch!',
    imageType: '',
    choices: [
      { text: 'Pokračovat', target: 'forest_70' }
    ]
  },
  forest_68: {
    id: 'forest_68',
    title: '68. Hněv lesa',
    text: 'Porazíte strom, ale les vás zšvihá větvemi.',
    imageType: 'forest_dark',
    choices: [
      { text: 'Pokračovat', target: 'forest_70', damage: 1 }
    ]
  },
  forest_70: {
    id: 'forest_70',
    title: '70. Spící strážce',
    text: 'Cestu blokuje spící Kamenný Obr.',
    imageType: 'obr',
    choices: [
      { text: 'Protáhnout se škvírou', target: 'forest_71' },
      { text: 'Vzbudit ho', target: 'forest_72' },
      { text: 'Přelézt ho', target: 'forest_73' }
    ]
  },
  forest_71: {
    id: 'forest_71',
    title: '71. Tichý průlez',
    text: 'Proklouznete. Úspěch!',
    imageType: 'riddle',
    choices: [
      { text: 'Pokračovat', target: 'forest_61' }
    ]
  },
  forest_72: {
    id: 'forest_72',
    title: '72. Buzení',
    text: 'Obr vás odhodí.',
    imageType: 'skull',
    choices: [
      { text: 'Vstát', target: 'forest_61', damage: 1 }
    ]
  },
  forest_73: {
    id: 'forest_73',
    title: '73. Lechtání',
    text: 'Obr vás setřese smíchem.',
    imageType: 'skull',
    choices: [
      { text: 'Vstát', target: 'forest_61', damage: 1 }
    ]
  },
  forest_61: {
    id: 'forest_61',
    title: '61. Hádanka na mýtině',
    text: '„Jsem lehký jako pírko, ale ani obr mě neudrží dlouho."',
    imageType: 'riddle',
    choices: [
      { text: 'DECH', target: 'forest_63' },
      { text: 'OHEŇ', target: 'forest_62' },
      { text: 'MYŠLENKA', target: 'forest_62' }
    ]
  },
  forest_62: {
    id: 'forest_62',
    title: '62. Past',
    text: 'Špatně! Past na medvědy.',
    imageType: 'trap',
    choices: [
      { text: 'Zkusit znovu', target: 'forest_61', damage: 1 }
    ]
  },
  forest_63: {
    id: 'forest_63',
    title: '63. Svatyně Elfů',
    text: 'Elfka chce dar. Máte JANTAR (ze studny)?',
    imageType: 'elf',
    choices: [
      { text: 'Darovat Jantar', target: 'victory', req: 'Jantar' },
      { text: 'Nemáš dar?', target: 'start_soft_reset' }
    ]
  },
  victory: {
    id: 'victory',
    title: '64. ZÁCHRANA LISTOVÍ!',
    text: 'Přinesli jste Lucernu! Světlušky vylézají, Listoví září. DOKÁZALI JSTE TO!',
    imageType: 'victory',
    choices: [
      { text: 'Hrát znovu', target: 'reset' }
    ]
  },
  game_over: {
    id: 'game_over',
    title: 'Konec hry',
    text: 'Tvé rány jsou příliš hluboké. Svět ti mizí před očima...',
    imageType: 'skull',
    choices: [
      { text: 'Začít úplně znovu', target: 'reset' }
    ]
  }
};

