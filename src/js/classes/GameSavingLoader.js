import json from '../functions/parser';
import read from '../functions/reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static async load() {
    const data = await await read();
    const response = await json(data);
    const gameSaving = new GameSaving(response);
    return gameSaving;
    // return read().then((e) => json(e).then((p) => p));
  }
}
export default GameSavingLoader;
