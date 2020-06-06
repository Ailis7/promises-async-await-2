import ArrayBufferConverter from '../classes/ArrayBufferConverter';

test('validating true', () => {
  const arrBuffer = new ArrayBufferConverter();
  arrBuffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(arrBuffer.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
