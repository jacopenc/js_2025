// booleanos.ts

// Declaración de variables booleanas
let esActivo: boolean = true;
let estaConectado: boolean = false;

// Uso en condiciones
if (esActivo) {
  console.log("El usuario está activo.");
} else {
  console.log("El usuario no está activo.");
}

// Negación lógica
if (!estaConectado) {
  console.log("El usuario no está conectado.");
}

// Booleanos con operadores lógicos
let tienePermiso: boolean = true;
let esAdmin: boolean = false;

if (tienePermiso && esAdmin) {
  console.log("Acceso concedido a administrador.");
} else if (tienePermiso || esAdmin) {
  console.log("Acceso concedido con permisos limitados.");
} else {
  console.log("Acceso denegado.");
}

// Convertir otros tipos a boolean
let texto: string = "hola";
let esTextoNoVacio: boolean = Boolean(texto);  // true porque texto no está vacío
console.log("¿El texto no está vacío?", esTextoNoVacio);

let numero: number = 0;
let esNumeroVerdadero: boolean = Boolean(numero); // false porque 0 es falsy
console.log("¿El número es verdadero?", esNumeroVerdadero);
