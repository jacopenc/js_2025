const suma = require('./suma');
test.only('suma 2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(5);
}); //Solo se ejecuta ese test, ignorando los demás

test('suma 1 + 1 = 2', () => {
  expect(suma(1, 1)).toBe(2);
}); //Este test se ignora porque solo se ejecuta el test con test.only

//npm test sumaOnly.test.js