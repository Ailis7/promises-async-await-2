export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  set powerMode(state) {
    if (this.powerModeCount === undefined) {
      this.powerModeCount = 3;
    } else {
      throw new Error('Power Mode уже израсходован или включен');
    }
  }

  get powerMode() {
    return this.powerModeCount;
  }

  get characteristics() {
    if (this.powerModeCount > 0) {
      this.powerModeCount -= 1;
      return { attack: this.attack * 2, defence: this.defence * 2, health: this.health * 2 };
    }
    return 'Power Mode уже израсходован или не включен';
  }

  levelUp() {
    this.level += this.level;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if (this.health > 0) {
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }
}
