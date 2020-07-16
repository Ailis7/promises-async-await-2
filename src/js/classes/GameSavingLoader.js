import json from '../functions/parser';
import read from '../functions/reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      async () => {
        try {
          const data = await await read();
          const response = await json(data);
          const gameSaving = new GameSaving(response);
          resolve(gameSaving);
        } catch (e) {
          reject(e);
        }
      };
    // return read().then((e) => json(e).then((p) => p));
    });
  }
}
export default GameSavingLoader;
