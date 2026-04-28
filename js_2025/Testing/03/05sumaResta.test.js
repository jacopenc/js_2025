//El símbolo | NO tiene significado en Jest.
//Solo es un truco para ORDENAR el nombre
const { suma, resta } = require('./sumaResta');
test('suma | números positivo', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma | números negativos', () => {
  expect(suma(-2, -3)).toBe(-5);
});

test('resta | resultado positivo', () => {
  expect(resta(10, 4)).toBe(6);
});
// npm test -- -t="suma"
    /*ejecuta:
    suma | números positivo
    suma | números negativos 
*/
// npm test -- -t="negativos"
    /*ejecuta:   suma | números negativos  */

// npm test -- -t="positivo"  /*ejecuta:TODOS los tests cuyo nombre contenga la palabra "positivo"*/
