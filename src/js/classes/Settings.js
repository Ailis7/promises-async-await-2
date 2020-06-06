/**
 * Класс с настройками по-умолчанию
 * @class Settings
 * @param {Object[]} this.userSettings тут хранятся настройки
 * @param {Object[]} this.permissibleSettings допустимые настройки
 */
class Settings {
  constructor(newSet) {
    this.userSettings = new Map();
    this.userSettings.set('theme', 'dark');
    this.userSettings.set('music', 'trance');
    this.userSettings.set('difficulty', 'easy');
    this.permissibleSettings = {
      theme: ['light', 'gray', 'dark'],
      music: ['pop', 'rock', 'chillout', 'off', 'trance'],
      difficulty: ['normal', 'hard', 'nightmare', 'easy'],
    };
    try {
      for (const prop in newSet) {
        if (this.permissibleSettings[prop].indexOf(newSet[prop]) !== -1) {
          this.userSettings.set(prop, newSet[prop]);
        } else {
          throw new Error();
        }
      }
    } catch (e) {
      throw new Error();
    }
  }

  get userChoise() {
    return this.userSettings;
  }
}

export default Settings;
