async function asincrona() {
  return 42; // Esto es equivalente a: return Promise.resolve(42)
}

async function main() {
  const valor = await asincrona(); // se pausa en esa línea
  //IMPORTANTE se pausa en la línea del await hasta que la promesa se resuelva.
  console.log(valor);               // 42
}

main();
