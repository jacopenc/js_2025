// Función **síncrona**
function sincrona() {
  return 42;
}

// Función **asíncrona**
async function asincrona() {
  return 42;
}

// Llamadas a las funciones
console.log('sincrona():', sincrona());        // Devuelve directamente 42
console.log('asincrona():', asincrona());      // Devuelve una Promise

// Para obtener el valor de la función asíncrona, debemos usar `then` o `await`:

asincrona().then(valor => console.log('Valor de asincrona():', valor));
//IMPORTANTE JavaScript no “espera” de manera bloqueante como veremos con await