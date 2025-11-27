// Simula tareas asíncronas
function tarea(id, exito, tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve(`Tarea ${id} completada en ${tiempo}ms`);
            } else {
                reject(`Tarea ${id} falló después de ${tiempo}ms`);
            }
        }, tiempo);
    });
}

// Array de promesas
const promesas = [
    tarea(1, false, 1000), // Falla después de 1s
    tarea(2, true, 2000),  // Éxito después de 2s
    tarea(3, true, 500),   // Éxito después de 0.5s
    tarea(4, false, 1500), // Falla después de 1.5s
];

// Usa Promise.any para obtener la primera promesa exitosa
// Si todas las promesas fallan, el bloque catch captura un AggregateError.
Promise.any(promesas)
    .then((resultado) => {
        console.log('Primera promesa exitosa:', resultado);
    })
    .catch((error) => {
        console.error('Todas las promesas fallaron:', error.errors);
    });
