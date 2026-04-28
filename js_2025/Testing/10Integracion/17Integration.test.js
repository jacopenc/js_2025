const { registrarUsuario } = require('./registro');

test('registra usuario y envía email', () => {
  const resultado = registrarUsuario('test@test.com');

  expect(resultado).toBe('Email enviado a test@test.com');
});