function login(email, password) {
  if (!email.includes('@')) {
    throw new Error('Email inválido');
  }

  if (password.length < 6) {
    throw new Error('Password demasiado corta');
  }

  if (email !== 'test@test.com' || password !== '123456') {
    throw new Error('Credenciales incorrectas');
  }

  return 'Login correcto';
}

module.exports = { login };