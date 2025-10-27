class Persona {
    // El constructor se llama automáticamente cuando se crea una nueva instancia
    constructor(nombre, edad) {
      this.nombre = nombre;  // inicializa la propiedad nombre
      this.edad = edad;      // inicializa la propiedad edad
    }
  
    // Método para mostrar los detalles de la persona
    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Crear una nueva instancia de la clase Persona
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Ana", 25);
  
  // Usar el método mostrarDetalles
  persona1.mostrarDetalles(); // Salida: Nombre: Juan, Edad: 30
  persona2.mostrarDetalles(); // Salida: Nombre: Ana, Edad: 25