const { login } = require('./auth');

test('login correcto', () => {
  expect(login('test@test.com', '123456'))
    .toBe('Login correcto');
});

test('error si email inválido', () => {
  expect(() => login('testtest.com', '123456'))
    .toThrow('Email inválido');
});

test('error si password corta', () => {
  expect(() => login('test@test.com', '123'))
    .toThrow('Password demasiado corta');
});

test('error si credenciales incorrectas', () => {
  expect(() => login('test@test.com', 'wrongpass'))
    .toThrow('Credenciales incorrectas');
});
//npm test XXXXXX.test.js