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
