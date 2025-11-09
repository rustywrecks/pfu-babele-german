var classes = {
  "Arcanist": "Arkanist",
  "Ace of Cards": "Kartenass",
  "Chanter": "Kantor",
  "Chimerist": "Chimärist",
  "Commander": "Kommandant",
  "Dancer": "Tänzer",
  "Darkblade": "Finsterschneide",
  "Elementalist": "Elementarist",
  "Entropist": "Entropist",
  "Esper": "Esper",
  "Floralist": "Floralist",
  "Gourmet": "Gourmet",
  "Invoker": "Anrufer",
  "Merchant": "Händler",
  "Fury": "Furie",
  "Guardian": "Wächter",
  "Loremaster": "Lehrmeister",
  "Mutant": "Mutant",
  "Necromancer": "Nekromant",
  "Rogue": "Schurke",
  "Sharpshooter": "Scharfschütze",
  "Spiritist": "Spiritist",
  "Symbolist": "Symbolist",
  "Tinkerer": "Bastler",
  "Wayfarer": "Reisender",
  "Weaponmaster": "Waffenmeister",
}

Hooks.on('init', () => {
  console.log("PFU Deutsch | Deutsche Übersetzungen für PFU Kompendien initialisiert.");
  game.babele.register({
    module: 'fabula-ultima-de',
    lang: 'de',
    dir: 'compendium'
  });

  game.babele.registerConverters({
    'effects': (value, translations) => {
      return translateValueKeys(['name', 'source', 'description'], value, translations);
    },
    'classNames': (fuClass) => {
      let fuClassNames = fuClass.split(', ');
      let translated = [];
      fuClassNames.map(fuClassNames => fuClassNames.trim()).forEach(fuClassNames => {
        let keys = Object.keys(classes);
        let translatedName = fuClassNames;
        keys.forEach(key =>{
          translatedName = translatedName.replace(key, classes[key])
        });
        translated.push(translatedName)
      });
      return translated.join(', ')
    }
  });
})

function translateValueKeys(keys, value, translations) {
  if (!value || !translations) {
    return value;
  }

  return value.map((item, i) => {
    const data = translations[i];
    if (!data || typeof data !== 'object') {
      return item;
    }

    keys.forEach(k => {
      if (data[k] != null && item && typeof item === 'object') {
        item[k] = data[k];
      }
    });

    return item;
  });
}