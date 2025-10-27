// Clase padre
class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    // Método de la clase Empleado
    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
  }
  
  // Clase hija que hereda de Empleado
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      // Llamar al constructor de la clase padre usando super
      super(nombre, salario);
      this.departamento = departamento;
    }
  
    // Método adicional solo para la clase Gerente
    mostrarDetallesGerente() {
      console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`);
    }
  }
  
  // Crear una instancia de Empleado
  const empleado1 = new Empleado("Carlos", 50000);
  empleado1.mostrarDetalles(); // Salida: Nombre: Carlos, Salario: 50000
  
  // Crear una instancia de Gerente
  const gerente1 = new Gerente("Ana", 80000, "Ventas");
  gerente1.mostrarDetalles(); // Salida: Nombre: Ana, Salario: 80000
  gerente1.mostrarDetallesGerente(); // Salida: Nombre: Ana, Salario: 80000, Departamento: Ventas