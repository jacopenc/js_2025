// Cuando una variable ha quedado sin definir tiene un valor especial denominado undefined
// undefined es un tipo de dato en sí mismo.
// Quiere decir que la variable está declarada pero no se ha definido aún su valor.

let variable: any;

if (typeof variable === "undefined") {
  console.log('ok');
}

if (variable === undefined) {
  console.log('ok');
}

// ❌ Comparación incorrecta: typeof siempre devuelve una cadena
// Esta condición nunca será verdadera
if (typeof variable === undefined) {
  console.log('ok');  // No se ejecuta
}

// ------------------- NULL -------------------
variable = null;

if (variable === null) {
  console.log('ok');
}

// Aunque null representa "ausencia de valor", typeof lo identifica como "object"
if (typeof variable === "object") {
  console.log('ok');
}

// ------------------- NaN -------------------
/* NaN representa la ausencia de un valor numérico válido (Not a Number) */

variable = parseInt('xxx');

if (typeof variable === 'number') {
  console.log('Is a number');  // Se ejecuta
}

// ❌ Comparar con NaN directamente no sirve, porque NaN !== NaN
if (variable === NaN) {
  console.log('Is NaN');  // No se ejecuta
}

// ✅ Forma correcta
if (isNaN(variable)) {
  console.log('Is NaN');  // Se ejecuta
}
