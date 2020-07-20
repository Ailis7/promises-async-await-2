import GameSavingLoader from './classes/GameSavingLoader'; //
import 'regenerator-runtime/runtime';

(async () => {
  try {
    const game = await GameSavingLoader.load();
    console.log(game);
    return game;
  } catch (e) {
    return e;
  }
})();
