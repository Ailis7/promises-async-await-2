import ReBalansed from './ReBalansed';

export default class Daemon extends ReBalansed {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
  }
}
