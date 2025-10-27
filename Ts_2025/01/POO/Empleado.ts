import { Persona } from './Persona.js';  // 👈 importante: usa .js si lo vas a importar en navegador

export class Empleado extends Persona {
  constructor(nombre: string, edad: number, public cargo: string) {
    super(nombre, edad);
  }

  presentarse(): string {
    return `${super.presentarse()} Trabajo como ${this.cargo}.`;
  }
}
