// 4. Función anónima
 //Qué es una función anónima?

 //Una función anónima es una función sin nombre 
 //que normalmente se guarda en una variable o se usa como argumento en otra función.

//Cuándo usar funciones anónimas
    //1. Cuando la función solo se necesita una vez o en un contexto local
    //2. Cuando la usas como callback (función que se pasa como argumento)
    //3. Cuando quieres asignarla a una variable o propiedad


//Cuándo NO usar una función anónima
    //Cuando necesitas reutilizarla
    //Cuando necesitas depurar (debugging)
    //Las funciones con nombre aparecen en la pila de errores, 
    // mientras que las anónimas aparecen como anonymous, lo que dificulta encontrar el error.


const sumar = function(a, b) {
  return a + b;
};

console.log(sumar(3, 5)); // 8

//----------Función anónima dentro de un método de array--------------

const edades = [12, 18, 25, 14, 30, 16];

const mayoresDeEdad = edades.filter(function(edad) {
  return edad >= 18;
});

console.log(mayoresDeEdad); // [18, 25, 30]

//----------Función anónima dentro de un objeto--------------
const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  }
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(9, 4)); // 5





