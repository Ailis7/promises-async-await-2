/* eslint-disable no-unused-vars */
// файл сборщик
import Character from './classes/Character'; // основной прототип персонажей
import Bowman from './classes/Bowman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';
import Daemon from './classes/Daemon';
import Team from './classes/Team'; // распределение по командам
import ErrorRepository from './classes/ErrorRepository'; // ошибки
import Settings from './classes/Settings'; // настройки игры
import Validator from './classes/Validator'; // проверка имя пользователя
import ArrayBufferConverter from './classes/ArrayBufferConverter'; // загрузка и конвертации данных из ArrayBuffer
import GameSavingLoader from './classes/GameSavingLoader'; //
import 'regenerator-runtime/runtime';

//console.log(GameSavingLoader.load());

(async () => {
  try {
    const game = await GameSavingLoader.load();
    console.log(game);
    return game;
  } catch (e) {
    return e;
  }
})();
