import GameSavingLoader from './classes/GameSavingLoader'; //
import 'regenerator-runtime/runtime';

GameSavingLoader.load().then((e) => console.log(e, '123'));

(async () => {
  try {
    const game = await GameSavingLoader.load();
    console.log(game);
    return game;
  } catch (e) {
    return e;
  }
})();
