import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';


test('should match the specified properties', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  expect(object.health).toBe(100);
  expect(object.level).toBe(1);
});

test('should throw an error', () => {
  const f = () => new Character('Очень длинное имя', 'Bowman');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Длина имени должна быть больше 2 символов, меньше 10');
});

test('should throw an error', () => {
  const f = () => new Character('Характер', 'Error');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Неверно указанный тип Error');
});

test('should match the specified properties', () => {
  const object = new Bowman('Ваня', 'Bowman');
  expect(object.name).toBe('Ваня');
  expect(object.type).toBe('Bowman');
  expect(object.attack).toBe(25);
  expect(object.defence).toBe(25);
});

test('should match the specified properties', () => {
  const object = new Daemon('Илья', 'Daemon');
  expect(object.name).toBe('Илья');
  expect(object.type).toBe('Daemon');
  expect(object.attack).toBe(10);
  expect(object.defence).toBe(40);
});

test('should match the specified properties', () => {
  const object = new Magician('Максим', 'Magician');
  expect(object.name).toBe('Максим');
  expect(object.type).toBe('Magician');
  expect(object.attack).toBe(10);
  expect(object.defence).toBe(40);
});

test('should match the specified properties', () => {
  const object = new Swordsman('Алексей', 'Swordsman');
  expect(object.name).toBe('Алексей');
  expect(object.type).toBe('Swordsman');
  expect(object.attack).toBe(40);
  expect(object.defence).toBe(10);
});

test('should match the specified properties', () => {
  const object = new Undead('Саша', 'Undead');
  expect(object.name).toBe('Саша');
  expect(object.type).toBe('Undead');
  expect(object.attack).toBe(25);
  expect(object.defence).toBe(25);
});

test('should match the specified properties', () => {
  const object = new Zombie('Саша', 'Zombie');
  expect(object.name).toBe('Саша');
  expect(object.type).toBe('Zombie');
  expect(object.attack).toBe(40);
  expect(object.defence).toBe(10);
});
