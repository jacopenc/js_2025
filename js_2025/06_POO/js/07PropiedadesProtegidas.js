class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this._salario = salario; // Convención de "protegido"
     /*/ En este ejemplo, _salario es "protegido" por convención. 
      Técnicamente, es accesible desde fuera de la clase, pero se espera que solo se acceda desde la clase o sus subclases.*/
    }
  
    mostrarInfo() {
      console.log(`Empleado: ${this.nombre}, Salario: ${this._salario}`);
    }
  }
  
  