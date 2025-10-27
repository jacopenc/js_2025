//Ámbito de bloque con let
function pruebaLet() {
  let x = 10;
  if (true) {
    let x = 20; // Esta 'x' es diferente a la de afuera
    console.log("Dentro del if:", x); // 20
  }
  console.log("Fuera del if:", x); // 10
}

//Ámbito de función con var
function pruebaVar() {
  var x = 10;
  if (true) {
    var x = 20; // Reemplaza la misma variable
    console.log("Dentro del if:", x); // 20
  }
  console.log("Fuera del if:", x); // 20 ← ¡peligroso!
}

//Re-declaración
var nombre = "Ana";
var nombre = "Luis"; // ✔️ Permitido con var

let edad = 30;
// let edad = 40; // ❌ Error: ya fue declarada

const SALUDO: string = "Hola mundo";
SALUDO = "Adiós"; // ❌ Error

const ES_VALIDO: boolean = true;
ES_VALIDO = false; // ❌ Error

//OJO: Constantes con objetos y arrays

const persona = { nombre: "Ana", edad: 30 };

persona.edad = 31;       // ✔️ permitido
// persona = { nombre: "Luis", edad: 25 }; // ❌ Error

const numeros = [1, 2, 3];
numeros.push(4);          // ✔️ permitido
// numeros = [4, 5, 6];    // ❌ Error




