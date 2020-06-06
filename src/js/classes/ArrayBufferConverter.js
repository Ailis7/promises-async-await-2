/**
 * Класс загрузки и конвертации данных из ArrayBuffer
 * @class ArrayBufferConverter
 */
class ArrayBufferConverter {
  /**
     * Метод загрузки данных с использованием ArrayBuffer
     * @return {ArrayBuffer} возвращает ArrayBuffer
     */
  load(data) {
    function getBuffer() {
      return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
      })(data);
    }
    this.data = getBuffer();
  }

  /**
     * конвертация в строку
     * @return {String} возвращает загруженную строку
     */
  toString() {
    let str = '';
    const bufferView = new Uint8Array(this.data);
    for (let i = 0; i < bufferView.length; i += 1) {
      if (bufferView[i] !== 0) {
        str += (String.fromCharCode(bufferView[i]));
      }
    }
    return str;
  }
}

export default ArrayBufferConverter;
