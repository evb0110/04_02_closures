import findBy from './findBy';

test('prop with right value should pass', () => {
  const input = {
    age: 27,
    name: 'вася',
    lastname: 'пупкин',
  };
  const finder = findBy('name', 'вася');
  const makeResult = () => finder(input);
  expect(makeResult()).toBe(true);
});

test('prop with wrong value should fail', () => {
  const input = {
    name: 'петя',
    isProgrammer: false,
  };
  const finder = findBy('isProgrammer', true);
  const makeResult = () => finder(input);
  expect(makeResult()).toBe(false);
});

test('prop with undefined value should fail', () => {
  const input = {
    name: 'Mickey-Mouse',
    age: undefined,
  };
  const finder = findBy('age', 25);
  const makeResult = () => finder(input);
  expect(makeResult()).toBe(false);
});
