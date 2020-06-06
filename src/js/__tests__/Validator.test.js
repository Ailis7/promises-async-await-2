import Validator from '../classes/Validator';

test('validating true', () => {
  const user = new Validator();
  user.validateUsername('s12upportnet12ologyru');
  expect(user.validateUsername('s12upportnet12ologyru')).toEqual('s12upportnet12ologyru');
});

test('validating false', () => {
  const user = new Validator();
  expect(() => user.validateUsername('1adm')).toThrowError();
  expect(() => user.validateUsername('adm1')).toThrowError();
  expect(() => user.validateUsername('123')).toThrowError();
  expect(() => user.validateUsername('admin123admin')).toThrowError();
});
