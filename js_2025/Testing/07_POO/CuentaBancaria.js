class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      throw new Error('Cantidad inválida');
    }
    this.saldo += cantidad;
    return this.saldo;
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      throw new Error('Cantidad inválida');
    }
    if (cantidad > this.saldo) {
      throw new Error('Fondos insuficientes');
    }
    this.saldo -= cantidad;
    return this.saldo;
  }

  transferir(cantidad, otraCuenta) {
    this.retirar(cantidad);
    otraCuenta.depositar(cantidad);
  }

  obtenerSaldo() {
    return this.saldo;
  }
}

module.exports = CuentaBancaria;