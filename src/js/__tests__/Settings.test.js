import Settings from '../classes/Settings';

test('change setting', () => {
  const testSettings = new Settings({ theme: 'gray' });
  const result = testSettings.userChoise;
  const ideal = new Map();
  ideal.set('theme', 'gray');
  ideal.set('music', 'trance');
  ideal.set('difficulty', 'easy');
  expect(result).toEqual(ideal);
});

test('change with err', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const testSettings = new Settings({ theme: 'sfdjkdfgjdfgdfg' });
  }).toThrowError();
});

test('change with err', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const testSettings = new Settings({ fdasdasdxcxcS: 'gray' });
  }).toThrowError();
});
