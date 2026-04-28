async function login(email, password) {
  // validación rápida ANTES de llamar a la API
  if (!email.includes('@')) {
    return 'Email inválido';
  }

  return fetch('https://api.com/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

module.exports = { login };