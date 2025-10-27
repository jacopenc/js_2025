import { Persona } from './Persona.js'; // 👈 importante: usa .js si lo vas a importar en navegador
export class Empleado extends Persona {
    constructor(nombre, edad, cargo) {
        super(nombre, edad);
        this.cargo = cargo;
    }
    presentarse() {
        return `${super.presentarse()} Trabajo como ${this.cargo}.`;
    }
}
