/**
 * Класс проверки имени пользователя
 * @class Validator
 */
class Validator {
/**
 * Метод проверки допустимости символов в имени
 * @return {string} возвращает имя если оно допустимо
 */
  validateUsername(name) {
    this.name = name.match(/^[A-Za-z0-9-_]+$/); // только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
    if (name.search(/!?(^([0-9_-])|\d{3}|([0-9_-])$)/) === -1) { // Имя не должно содержать подряд более трёх цифр,
      return this.name[0]; // начинаться и заканчиваться цифрами, символами подчёркивания или тире.
    }
    throw new Error();
  }
}

export default Validator;