const { crearUsuario } = require('./usuario');

test('crea usuario válido', () => {
  const user = crearUsuario('Juan', 25);
  expect(user).toEqual({ nombre: 'Juan', edad: 25 });
});

test('error si nombre vacío', () => {
  expect(() => crearUsuario('', 25))
    .toThrow('Nombre inválido');
});

test('error si edad es string', () => {
  expect(() => crearUsuario('Juan', '25'))
    .toThrow('Debe ser mayor de edad');
});

test('error si menor de edad', () => {
  expect(() => crearUsuario('Juan', 15))
    .toThrow('Debe ser mayor de edad');
});

//npm test 06Throw.test.js 