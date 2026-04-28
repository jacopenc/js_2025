const { login } = require('./auth2');
const db = require('./db');

//mock de la base de datos
jest.mock('./db');
//evita usar BD real
//hace tests rápidos y controlados

test('login correcto', async () => {
  db.getUserByEmail.mockResolvedValue({
    email: 'test@test.com',
    password: '123456'
  });

  await expect(login('test@test.com', '123456'))
    .resolves.toBe('Login correcto');
});

test('usuario no existe', async () => {
  db.getUserByEmail.mockResolvedValue(null);

  await expect(login('test@test.com', '123456'))
    .rejects.toThrow('Usuario no existe');
});

test('password incorrecta', async () => {
  db.getUserByEmail.mockResolvedValue({
    email: 'test@test.com',
    password: '123456'
  });

  await expect(login('test@test.com', 'wrong'))
    .rejects.toThrow('Password incorrecta');
});

test('email inválido', async () => {
  await expect(login('testtest.com', '123456'))
    .rejects.toThrow('Email inválido');
});
//npm test XXXXXX.test.js