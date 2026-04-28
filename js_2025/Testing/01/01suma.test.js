const suma = require('./suma');

test('suma 2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(3);
});
//npm test XXXXXX.test.js