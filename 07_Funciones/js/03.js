// 5. Función flecha


const sumar = (a, b) => a + b;

//Equivale a 

function sumar(a, b) {
  return a + b;
}

//Diferencias principales:

    //Usa => (flecha) en lugar de la palabra function.

    //Si el cuerpo tiene una sola línea, el return es implícito.

    //No tiene su propio this, arguments, ni super (esto cambia su comportamiento en objetos y clases).


    //-----Función flecha simple sin parámetros
    const saludar = () => console.log("¡Hola mundo!");
    saludar(); // ¡Hola mundo!

    //---Función flecha con parámetros y devuelve valor

    const sumar = (a, b) => a + b;

    console.log(sumar(5, 3)); // 8


    const numeros = [1, 5, 10, 15, 20, 25];

    //----Función flecha como callback — Filtrando

        // Filtramos los números mayores o iguales a 15
    const mayores = numeros.filter(num => num >= 15);

    console.log(mayores); // [15, 20, 25]


    //Función flecha con varias líneas

    const procesarNumeros = (numeros) => {
    const pares = [];
    const Multiplos = [];

    numeros.forEach(num => {
                        if (num % 2 === 0) {
                        pares.push(num);           // Guardamos los pares
                        Multiplos.push(num * 2);  // Guardamos el doble
                        }
                });

    console.log("Pares:", pares);
    console.log("Multiplos de dos:", duplicados);
    return duplicados;
};

const resultado = procesarNumeros([1, 2, 3, 4, 5, 6]);
console.log("Resultado final:", resultado); // [4, 8, 12]


//En  Objetos cuidado EJEMPLO ERROR, el método no lleva dos puntos

const persona = {
  nombre: "Jose Acosta",
  saludar: () => {
    console.log("Hola, soy " + this.nombre);
  }
};

//Las funciones flecha no crean su propio this, 
// por lo que en objetos o clases es mejor usar funciones normales:

persona.saludar(); // ERROR 'this.nombre' es undefined

//CORRECTO
const personaCorrecto = {
  nombre: "Jose acosta",
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
};







