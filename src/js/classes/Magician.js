import ReBalansed from './ReBalansed';

export default class Magician extends ReBalansed {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}
