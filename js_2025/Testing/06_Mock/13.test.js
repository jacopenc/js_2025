const { connectDB, addUser, login, clearDB } = require('./login');

// beforeAll  se ejecuta UNA vez al inicio
beforeAll(() => {
  console.log('Conectando a la base de datos');
  connectDB();
});

// beforeEach  antes de cada test
beforeEach(() => {
  console.log('creando usuario base');
  addUser({ email: 'test@test.com', password: '123456' });
});

// afterEach  después de cada test
afterEach(() => {
  console.log('limpiando datos del test');
  clearDB();
});

// afterAll al final de todo
afterAll(() => {
  console.log('cerrando conexión');
});


// TEST 1: login correcto
test('login correcto', () => {
  expect(login('test@test.com', '123456')).toBe('Login correcto');
});


// TEST 2: password incorrecta
test('password incorrecta', () => {
  expect(() => login('test@test.com', '000000'))
    .toThrow('Password incorrecta');
});


// TEST 3: usuario no existe
test('usuario no existe', () => {
  expect(() => login('noexiste@test.com', '123456'))
    .toThrow('Usuario no existe');
});

//npm test XXXXXX.test.js