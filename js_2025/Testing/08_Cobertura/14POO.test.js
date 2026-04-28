const CuentaBancaria = require('./CuentaBancaria');

describe('CuentaBancaria', () => {
  let cuenta;

  beforeEach(() => {
    cuenta = new CuentaBancaria('Juan', 100);
  });

  //Constructor
  test('crea una cuenta con saldo inicial', () => {
    expect(cuenta.titular).toBe('Juan');
    expect(cuenta.obtenerSaldo()).toBe(100);
  });

  //Mostrar o ocultar para probar caso de cobertura de ramas 15Cobertura.test.js
  test('crea una cuenta sin saldo inicial (default 0)', () => {
  const cuenta2 = new CuentaBancaria('Ana');
  expect(cuenta2.obtenerSaldo()).toBe(0);
});


  // Depositar
  describe('depositar', () => {
    test('aumenta el saldo correctamente', () => {
      cuenta.depositar(50);
      expect(cuenta.obtenerSaldo()).toBe(150);
    });

    test('lanza error si cantidad es negativa', () => {
      expect(() => cuenta.depositar(-10)).toThrow('Cantidad inválida');
    });
  });

  // Retirar
  describe('retirar', () => {
    test('reduce el saldo correctamente', () => {
      cuenta.retirar(30);
      expect(cuenta.obtenerSaldo()).toBe(70);
    });

    test('lanza error si no hay saldo suficiente', () => {
      expect(() => cuenta.retirar(200)).toThrow('Fondos insuficientes');
    });

    test('lanza error si cantidad es inválida', () => {
      expect(() => cuenta.retirar(0)).toThrow();
    });
  });

  //Test de interacción (mini integration) Aquí ya no es solo una función  interactúan dos objetos.
  describe('transferir', () => {
    test('transfiere dinero entre cuentas', () => {
      const cuentaDestino = new CuentaBancaria('Ana', 50);

      cuenta.transferir(40, cuentaDestino);

      expect(cuenta.obtenerSaldo()).toBe(60);
      expect(cuentaDestino.obtenerSaldo()).toBe(90);
    });
  });
});