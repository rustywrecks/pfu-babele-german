Hooks.on('init', () => {
  console.log("PFU Deutsch | Deutsche Übersetzungen für PFU Kompendien initialisiert.");
  game.babele.register({
    module: 'fabula-ultima-de',
    lang: 'de',
    dir: 'compendium'
  });
})
