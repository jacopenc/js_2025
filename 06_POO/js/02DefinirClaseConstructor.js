class Persona {
    //constructor con Valores Predeterminados
    constructor(nombre = "Sin nombre", edad = 0) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Crear una instancia sin pasar parámetros
  const persona3 = new Persona();
  persona3.mostrarDetalles(); // Salida: Nombre: Sin nombre, Edad: 0