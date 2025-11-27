// Simula tareas asíncronas
function tarea(id, exito) {
    return new Promise((resolve, reject) => {
        const tiempo = Math.floor(Math.random() * 2000) + 500; // Tiempo aleatorio entre 500ms y 2s
        setTimeout(() => {
            if (exito) {
                resolve(`Tarea ${id} completada en ${tiempo}ms`);
            } else {
                reject(`Tarea ${id} falló después de ${tiempo}ms`);
            }
        }, tiempo);
    });
}

// Array de promesas con diferentes resultados
const promesas = [
    tarea(1, true),  // Éxito
    tarea(2, false), // Falla
    tarea(3, true),  // Éxito
    tarea(4, false), // Falla
];


//Ejecuta múltiples promesas en paralelo y espera a que todas se resuelvan o rechacen.
//Retorna un array con el resultado de cada promesa, 
// indicando si se resolvió con éxito (fulfilled) o falló (rejected)

// Ejecuta todas las promesas con allSettled
Promise.allSettled(promesas)
    .then((resultados) => {
        console.log('Resultados de las promesas:');
        resultados.forEach((resultado, index) => {
            if (resultado.status === 'fulfilled') {
                console.log(`Promesa ${index + 1}: Éxito -> ${resultado.value}`);
            } else {
                console.log(`Promesa ${index + 1}: Fallo -> ${resultado.reason}`);
            }
        });
    });
