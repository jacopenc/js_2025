class CuentaBancaria {
    #saldo; // Propiedad privada
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    // Método privado
    #actualizarSaldo(cantidad) {
      this.#saldo += cantidad;
    }
  
    depositar(cantidad) {
      this.#actualizarSaldo(cantidad);
      console.log(`Se han depositado ${cantidad}. Saldo actual: ${this.#saldo}`);
    }
  }
  
  const cuenta = new CuentaBancaria(100);
  cuenta.depositar(50); // -> "Se han depositado 50. Saldo actual: 150"
  
  cuenta.#actualizarSaldo(30); // Error: Private field '#actualizarSaldo' must be declared in an enclosing class