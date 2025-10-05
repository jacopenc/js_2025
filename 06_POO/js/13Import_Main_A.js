import { agregarTarea, eliminarTarea, listarTareas } from './13Import_A.js';

// Función para manejar la adición de tareas
function agregarTareaDesdeInput() {
    const inputTarea = document.getElementById('tareaInput');
    const tarea = inputTarea.value.trim();

    if (tarea) {
        agregarTarea(tarea);
        inputTarea.value = ''; // Limpiar el campo de entrada
        actualizarListaTareas();
    }
}

// Función para actualizar la lista de tareas mostrada
function actualizarListaTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = listarTareas();
}

// Función para manejar la eliminación de tareas
function eliminarTareaDesdeInput() {
    const inputIndice = document.getElementById('indiceInput');
    const indice = parseInt(inputIndice.value, 10) - 1; // Convertir a índice basado en 0

    eliminarTarea(indice);
    inputIndice.value = ''; // Limpiar el campo de entrada
    actualizarListaTareas();
}

// Event listeners
document.getElementById('agregarBtn').addEventListener('click', agregarTareaDesdeInput);
document.getElementById('eliminarBtn').addEventListener('click', eliminarTareaDesdeInput);