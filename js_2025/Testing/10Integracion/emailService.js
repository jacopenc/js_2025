function enviarEmail(usuario) {
  return `Email enviado a ${usuario.email}`;
}

module.exports = { enviarEmail };