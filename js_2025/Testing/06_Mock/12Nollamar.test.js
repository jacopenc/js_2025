const { login } = require('./auth3');

global.fetch = jest.fn();

test('NO llama a la API si el email es inválido', async () => {
  await login('emailmal', '123456');

  expect(fetch).not.toHaveBeenCalled();
});

test('llama a la API si el email es válido', async () => {
  fetch.mockResolvedValue({ ok: true });

  await login('test@test.com', '123456');

  expect(fetch).toHaveBeenCalled();
});
//npm test XXXXXX.test.js