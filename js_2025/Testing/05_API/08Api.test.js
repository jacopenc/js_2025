const { getUser } = require('./api');

test('obtiene usuario real', async () => {
  const user = await getUser();

  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('name');
});

// npm test 08Api.test.js 

/*
Problema 
depende de internet
puede fallar
es lento
*/