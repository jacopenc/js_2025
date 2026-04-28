function crearUsuario(nombre, edad) {
  if (typeof nombre !== 'string' || nombre.trim() === '') {
    throw new Error('Nombre inválido');
  }

  if (typeof edad !== 'number' || edad < 18) {
    throw new Error('Debe ser mayor de edad');
  }

  return {
    nombre,
    edad
  };
}

module.exports = { crearUsuario };