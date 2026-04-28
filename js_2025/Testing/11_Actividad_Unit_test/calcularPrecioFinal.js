function calcularPrecioFinal(producto) {
  const { precioBase, descuento } = producto;

  // Validaciones
  if (precioBase <= 0) {
    throw new Error('Precio inválido');
  }

  if (descuento < 0 || descuento > 100) {
    throw new Error('Descuento inválido');
  }

  // Cálculo
  const precioFinal = precioBase - (precioBase * descuento) / 100;

  return precioFinal;
}

module.exports = calcularPrecioFinal;