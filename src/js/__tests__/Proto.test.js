/* eslint-disable no-unused-expressions */
import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';

test('create Daemon', () => {
  const daemon = new Daemon('Дрон');
  expect(daemon).toEqual({
    attack: 40, currentRange: undefined, defence: 10, health: 100, level: 1, name: 'Дрон', statusStoned: false,
  });
});

test('create Zombie', () => {
  const zombie = new Zombie('Дрон');
  expect(zombie).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Дрон',
  });
});

test('create Undead', () => {
  const undead = new Undead('Дрон');
  expect(undead).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Дрон',
  });
});

test('create Magician', () => {
  const magician = new Magician('Дрон');
  expect(magician).toEqual({
    attack: 10, currentRange: undefined, defence: 40, health: 100, level: 1, name: 'Дрон', statusStoned: false,
  });
});

test('create Swordsman', () => {
  const swordsman = new Swordsman('Дрон');
  expect(swordsman).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Дрон',
  });
});

test('create Bowman', () => {
  const bowman = new Bowman('Дрон');
  expect(bowman).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Дрон',
  });
});

test('Bowman get powerMode', () => {
  const bowman = new Bowman('Дрон');
  bowman.powerMode = 'on';
  expect(bowman.powerMode).toBe(3);
  expect(bowman.characteristics).toEqual({
    attack: 50, defence: 50, health: 200,
  });
  expect(bowman.powerMode).toBe(2);
});

test('power mode уже включен', () => {
  const bowman = new Bowman();
  bowman.powerMode = 'on';
  expect(() => {
    bowman.powerMode = 'on';
  }).toThrowError();
});

test('powerMode закончился', () => {
  const bowman = new Bowman();
  bowman.powerMode = 'on';
  bowman.characteristics;
  bowman.characteristics;
  bowman.characteristics;
  expect(bowman.characteristics).toEqual('Power Mode уже израсходован или не включен');
});

test('create Bowman and levelUp', () => {
  const bowman = new Bowman();
  bowman.levelUp();
  expect(bowman).toEqual({
    attack: 30, defence: 30, health: 100, level: 2,
  });
});

test('dead Bowman', () => {
  const bowman = new Bowman();
  bowman.health = 0;
  expect(() => {
    bowman.levelUp();
  }).toThrowError();
});
