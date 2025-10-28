Hooks.on('init', () => {
  console.log("PFU Deutsch | Choo Choo, motherfucker! Dis is live!");
  game.babele.register({
    module: 'fabula-ultima-de',
    lang: 'de',
    dir: 'compendium'
  });
})