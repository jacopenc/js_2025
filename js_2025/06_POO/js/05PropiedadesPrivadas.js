class Persona {
    #nombre; // Propiedad privada
    #edad;   // Propiedad privada
  
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
  
    mostrarDetalles() {
      return `Nombre: ${this.#nombre}, Edad: ${this.#edad}`;
    }
  }
  
  const persona = new Persona("Ana", 25);
  console.log(persona.mostrarDetalles()); // -> "Nombre: Ana, Edad: 25"
  console.log(persona.#nombre); // Error: Private field '#nombre' must be declared in an enclosing class