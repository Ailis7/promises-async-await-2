import Magician from '../classes/Magician';
import Daemon from '../classes/Daemon';

test('сила атаки мага на 4 клетки', () => {
  const mag = new Magician('Vasa');
  mag.attackBalanse = 4;
  const result = mag.attackBalanse;
  expect(result).toEqual(7);
});

test('сила атаки одурманеного демона на 3 клетки', () => {
  const daemon = new Daemon('Vasa');
  daemon.attackBalanse = 3;
  daemon.stoned = true;
  const result = daemon.attackBalanse;
  expect(result).toEqual(31);
  expect(daemon.stoned).toEqual(true);
});

test('слишком далеко', () => {
  const mag = new Magician('Vasa');
  expect(() => {
    mag.attackBalanse = 6;
  }).toThrowError();
});
