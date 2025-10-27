// Declaración de strings
let nombre: string = "Carlos";
let saludo: string = 'Hola';

// Concatenación clásica con +
let mensaje1: string = saludo + ", " + nombre + "!";
console.log(mensaje1); // Hola, Carlos!

// Template strings (interpolación con backticks `)
let mensaje2: string = `${saludo}, ${nombre}! Bienvenido a TypeScript.`;
console.log(mensaje2); // Hola, Carlos! Bienvenido a TypeScript.

// Multi-línea con template strings
let multilinea: string = `Esta es una cadena
que ocupa varias líneas
sin usar caracteres especiales.`;
console.log(multilinea);