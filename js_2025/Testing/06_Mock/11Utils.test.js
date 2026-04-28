const { suma, getUser, esperarYejecutar } = require('./utils');

global.fetch = jest.fn();//Ya no usa el  fetch real de fichero api, usa este falso”

// limpiar mocks
beforeEach(() => {
  jest.clearAllMocks();
});


// comprobar que se llamó
test('1. fetch se llama', async () => {
  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({ name: 'Juan' })
  });

  await getUser();

  expect(fetch).toHaveBeenCalled(); // comprobar que se llamó
});



//  cuántas veces
test('fetch se llama una vez', async () => {
  fetch.mockResolvedValue({
    ok: true,
    json: async () => ({})
  });

  await getUser();

  expect(fetch).toHaveBeenCalledTimes(1);//  cuántas veces 1
});



// mock diferente por llamada
test('mock distinto por llamada', async () => {
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'Juan' })
    })
    .mockResolvedValueOnce({
      ok: false
    });

  const user = await getUser();
  expect(user.name).toBe('Juan');

  await expect(getUser()).rejects.toThrow();
});


//  test.each
test.each([
  [2, 3, 5],
  [1, 1, 2],
  [-1, -1, -2]
])('6. suma %i + %i = %i', (a, b, resultado) => {
  expect(suma(a, b)).toBe(resultado);
});



//. timers
jest.useFakeTimers();

test(' timer ejecuta función', () => {
  const fn = jest.fn();

  esperarYejecutar(fn);

  jest.runAllTimers();

  expect(fn).toHaveBeenCalled();
});
//npm test XXXXXX.test.js






