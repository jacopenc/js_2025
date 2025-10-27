class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  mover(): void {
    console.log(`${this.nombre} se está moviendo.`);
  }
}

class Perro extends Animal {
  ladrar(): void {
    console.log("Guau Guau!");
  }
}

const miPerro = new Perro("Firulais");
miPerro.mover();  // Firulais se está moviendo.
miPerro.ladrar(); // Guau Guau!
