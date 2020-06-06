import Bowman from '../classes/Bowman';
import Magician from '../classes/Magician';
import Team from '../classes/Team';


test('add 2 equal char, and get Error', () => {
  const sad = new Magician('Ivan');
  const green = new Team();

  green.add(sad);
  expect(() => {
    green.add(sad);
  }).toThrowError();
});

test('addAll without Error', () => {
  const sad = new Magician('Ivan');
  const man = new Bowman('Vasa');
  const green = new Team();

  green.addAll(sad, man, sad, man);
  const testSet = new Set([sad, man]);
  expect(green.members).toEqual(testSet);
});

test('to array', () => {
  const sad = new Magician('Ivan');
  const man = new Bowman('Vasa');
  const green = new Team();

  green.addAll(man, sad);
  expect(green.toArray).toEqual([{
    name: 'Vasa', level: 1, health: 100, attack: 25, defence: 25,
  }, {
    name: 'Ivan', currentRange: undefined, level: 1, health: 100, attack: 10, defence: 40, statusStoned: false,
  }]);
});
