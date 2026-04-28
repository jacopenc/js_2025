const { suma, resta } = require('./sumaResta');
// describe sirve para agrupar varios tests relacionados.
// No ejecuta lógica por sí mismo, solo organiza y da contexto.
// También permite filtrar con -t usando el nombre del grupo.
describe('operaciones matemáticas', () => {

  test('suma: 2 + 3 = 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

  test('suma: 10 + 5 = 15', () => {
    expect(suma(10, 5)).toBe(15);
  });

  test('resta: 5 - 3 = 2', () => {
    expect(resta(5, 3)).toBe(2);
  });

  test('resta: 10 - 4 = 6', () => {
    expect(resta(10, 4)).toBe(6);
  });

});
//npm test -- -t="suma"
//npm test -- -t="resta"
//npm test -- -t="10 + 5"
//npm test -- -t="operaciones matemáticas" 