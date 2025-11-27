function tareaAsincrona() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = Math.random() > 0.5; // Simular éxito o error aleatorio
        if (exito) {
          resolve("Tarea completada con éxito");
        } else {
          reject("Ocurrió un error en la tarea");
        }
      }, 1000);
    });
  }
  
  tareaAsincrona()
    .then((resultado) => {
      console.log("Resultado:", resultado);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("La promesa ha finalizado, éxito o error."); //Se ejecuta siempre, independientemente de si la promesa fue resuelta o rechazada.
    });
  