// prompt-ejemplo.ts

// Solicitar nombre al usuario
const nombre: string | null = prompt("¿Cuál es tu nombre?");

// Validar que el usuario haya ingresado algo
if (nombre !== null && nombre.trim() !== "") {
  alert(`Hola, ${nombre}!`);
} else {
  alert("No ingresaste un nombre.");
}

// Solicitar edad y convertirla a número
const edadTexto: string | null = prompt("¿Cuántos años tienes?");
if (edadTexto !== null) {
  const edad: number = Number(edadTexto);
  if (!isNaN(edad)) {
    alert(`Tienes ${edad} años.`);
  } else {
    alert("Eso no parece un número válido.");
  }
}
//BOOLEAN

let strValue: string | null = prompt('dime yes/no');  
let parsedBoolean: boolean = strValue !== null ? 
                                                ( strValue.toLowerCase().trim() === "yes" ? true :false )
                                       : false; 
