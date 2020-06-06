export default class ErrorRepository {
  constructor(error) {
    this.arrError = new Map();
    this.arrError.set(error.name, error.message);
  }

  translate(code) {
    return (this.arrError.has(code)) ? this.arrError.get(code) : 'Unknown error';
  }
}
