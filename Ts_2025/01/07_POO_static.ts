class Matematica {
  static PI: number = 3.1416;

  static calcularAreaCirculo(radio: number): number {
    return Matematica.PI * radio * radio;
  }
}

console.log(Matematica.calcularAreaCirculo(5)); // 78.54
