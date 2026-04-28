const calcularPrecioFinal = require('./calcularPrecioFinal');

describe('calcularPrecioFinal', () => {
  
  // 1. Caso normal
  test('aplica descuento correctamente', () => {
    const producto = {
      nombre: 'Teclado',
      precioBase: 100,
      descuento: 20
    };

    expect(calcularPrecioFinal(producto)).toBe(80);
  });

  // 2. Sin descuento
  test('sin descuento devuelve precio original', () => {
    const producto = {
      nombre: 'Ratón',
      precioBase: 50,
      descuento: 0
    };

    expect(calcularPrecioFinal(producto)).toBe(50);
  });

  // 3. Precio inválido
  test('lanza error si precio es inválido', () => {
    const producto = {
      nombre: 'Monitor',
      precioBase: 0,
      descuento: 10
    };

    expect(() => calcularPrecioFinal(producto)).toThrow('Precio inválido');
  });

  // 4. Descuento inválido (negativo)
  test('lanza error si descuento es negativo', () => {
    const producto = {
      nombre: 'Teclado',
      precioBase: 100,
      descuento: -5
    };

    expect(() => calcularPrecioFinal(producto)).toThrow('Descuento inválido');
  });

  // 5. Descuento inválido (mayor a 100)
  test('lanza error si descuento es mayor a 100', () => {
    const producto = {
      nombre: 'Teclado',
      precioBase: 100,
      descuento: 150
    };

    expect(() => calcularPrecioFinal(producto)).toThrow('Descuento inválido');
  });

});