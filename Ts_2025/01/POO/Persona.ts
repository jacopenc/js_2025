export class Persona {
  constructor(public nombre: string, public edad: number) {}

  presentarse(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}
