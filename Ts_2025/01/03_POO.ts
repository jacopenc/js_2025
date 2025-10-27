class Persona {
  nombre: string;
  edad: number;

  // Constructor
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Ana", 30);
persona1.saludar();  // Hola, soy Ana y tengo 30 años.
