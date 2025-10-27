import { Empleado } from './Empleado.js';
const btn = document.getElementById('crearEmpleado');
const output = document.getElementById('output');
btn.addEventListener('click', () => {
    const empleado = new Empleado("Ana", 28, "Desarrolladora");
    output.textContent = empleado.presentarse();
});
