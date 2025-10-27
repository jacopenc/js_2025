try {
  console.log("Intentando operación...");
  throw new Error("Error intencional");
} catch (e) {
  console.error("Error capturado:", (e as Error).message);
} finally {
  console.log("Este bloque siempre se ejecuta");
}
