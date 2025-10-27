class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; // Propiedad pública
      this.edad = edad;     // Propiedad pública
    }
  }
  
  const persona = new Persona("Juan", 30);
  console.log(persona.nombre); // Accede sin problema -> "Juan"
  console.log(persona.edad);   // Accede sin problema -> 30