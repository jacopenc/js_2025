const Pedido = require('./Pedido');

describe('Pedido', () => {

  // 1. Total correcto
  test('calcula total correctamente', () => {
    const pedido = new Pedido('Teclado', 2, 10);

    expect(pedido.calcularTotal()).toBe(20);
  });

  // 2. IVA correcto
  test('aplica IVA correctamente', () => {
    const pedido = new Pedido('Teclado', 2, 50); // total 100

    expect(pedido.aplicarIVA()).toBe(121);
  });

  // 3. Cantidad inválida
  test('lanza error si cantidad es 0 o negativa', () => {
    expect(() => new Pedido('Teclado', 0, 10))
      .toThrow('Cantidad inválida');
  });

  // 4. Precio inválido
  test('lanza error si precio es 0 o negativo', () => {
    expect(() => new Pedido('Teclado', 2, 0))
      .toThrow('Precio inválido');
  });

});