const { getUserByEmail } = require('./db');

async function login(email, password) {
  if (!email.includes('@')) {
    throw new Error('Email inválido');
  }

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error('Usuario no existe');
  }

  if (user.password !== password) {
    throw new Error('Password incorrecta');
  }

  return 'Login correcto';
}

module.exports = { login };