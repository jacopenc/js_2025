class Pedido {
  constructor(nombreProducto, cantidad, precioUnitario) {
    this.nombreProducto = nombreProducto;
    this.cantidad = cantidad;
    this.precioUnitario = precioUnitario;

    // Validaciones
    if (this.cantidad <= 0) {
      throw new Error('Cantidad inválida');
    }

    if (this.precioUnitario <= 0) {
      throw new Error('Precio inválido');
    }
  }

  calcularTotal() {
    return this.cantidad * this.precioUnitario;
  }

  aplicarIVA() {
    const total = this.calcularTotal();
    return total + total * 0.21;
  }
}

module.exports = Pedido;