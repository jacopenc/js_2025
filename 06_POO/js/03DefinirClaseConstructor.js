class Persona {

 // ERROR Esto generará un error: "SyntaxError: A class may only have one constructor"


    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Otro intento de constructor causará un error de sintaxis
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
 