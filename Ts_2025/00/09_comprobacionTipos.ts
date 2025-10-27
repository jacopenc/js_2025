// 1. typeof: para tipos primitivos
const valor1: any = "Hola mundo";
if (typeof valor1 === "string") {
  console.log("Es un string:", valor1);
} else if (typeof valor1 === "number") {
  console.log("Es un número:", valor1);
} else {
  console.log("Otro tipo");
}

const valor2: any = 42;
if (typeof valor2 === "number") {
  console.log("Es un número:", valor2);
}

// 2. instanceof: comprobar instancia de clase
class Persona {
  constructor(public nombre: string) {}
}

class Animal {
  constructor(public especie: string) {}
}

const obj1 = new Persona("Ana");
const obj2 = new Animal("Perro");

if (obj1 instanceof Persona) {
  console.log(`${obj1.nombre} es una Persona`);
}

if (obj2 instanceof Animal) {
  console.log(`${obj2.especie} es un Animal`);
}

// 3. in: comprobar si un objeto tiene una propiedad
if ("nombre" in obj1) {
  console.log("obj1 tiene propiedad nombre:", obj1.nombre);
}

if ("especie" in obj2) {
  console.log("obj2 tiene propiedad especie:", obj2.especie);
}

const obj3 = { edad: 30 };
if ("nombre" in obj3) {
  console.log("obj3 tiene propiedad nombre");
} else {
  console.log("obj3 no tiene propiedad nombre");
}