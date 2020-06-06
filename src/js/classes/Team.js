export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) throw new Error('Нельзя повторно добавлять того же персонажа');
    this.members.add(obj);
  }

  addAll(...rest) {
    rest.forEach((element) => {
      this.members.add(element);
    });
  }

  get toArray() {
    return [...this.members];
  }
}
