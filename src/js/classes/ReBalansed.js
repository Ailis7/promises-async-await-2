import Character from './Character';

/**
 * Класс балансировки магов и демонов
 * @class ReBalansed
 * @param this.statusStoned статус: одурманен или нет
 * @param this.currentRange текущая дальность атаки
 */
class ReBalansed extends Character {
  constructor(name) {
    super(name);
    this.statusStoned = false;
    this.currentRange = undefined;
  }

  set attackBalanse(range) { // изменение дальности атаки
    if (range > 5) throw new Error('Cлишком далеко'); // макс. дальность
    this.currentRange = range;
  }

  get attackBalanse() {
    let forceAttack = this.attack * (11 - this.currentRange);
    if (this.statusStoned === true) { // уменьшение при одурманенности
      forceAttack -= Math.log2(this.currentRange) * 5;
    }
    return Math.round(forceAttack * 0.1);
  }

  set stoned(boolean) {
    this.statusStoned = (boolean === true); // проверка на корректность аргумента
  }

  get stoned() {
    return this.statusStoned;
  }
}

export default ReBalansed;
