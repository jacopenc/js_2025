const { getUser } = require('./api');

// mock global de fetch
global.fetch = jest.fn();//Ya no usa el  fetch real de fichero api, usa este falso”

test('usuario correcto (mock)', async () => {
  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({
      id: 1,
      name: 'Juan'
    })
  });

  const user = await getUser();

  expect(user.name).toBe('Juan');
});

//mockResolvedValue({ ok: false })  error controlado

test('error cuando la API falla', async () => {
  fetch.mockResolvedValue({
    ok: false
  });

  await expect(getUser())
    .rejects.toThrow('Error en la API');
});


//mockRejectedValue()  error de red
test('error de red', async () => {
  fetch.mockRejectedValue(new Error('Network error'));

  await expect(getUser())
    .rejects.toThrow('Network error');
});

//npm test XXXXXX.test.js