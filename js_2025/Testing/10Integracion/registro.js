const { crearUsuario } = require('./usuario');
const { enviarEmail } = require('./emailService');

function registrarUsuario(email) {
  const usuario = crearUsuario(email);
  return enviarEmail(usuario);
}

module.exports = { registrarUsuario };