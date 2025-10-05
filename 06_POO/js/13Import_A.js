// Array para almacenar las tareas
const tareas = [];

// Función para agregar una tarea
 function agregarTarea(tarea) {
    tareas.push(tarea);
}

// Función para eliminar una tarea por su índice
 function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
    }
}

// Función para obtener la lista de tareas
 function listarTareas() {
    return tareas.map((tarea, index) => `${index + 1}: ${tarea}`).join('<br>');
}

export {agregarTarea, eliminarTarea , listarTareas }; // a list of exported variables