import { Empleado } from './Empleado.js';

const btn = document.getElementById('crearEmpleado') as HTMLButtonElement;
const output = document.getElementById('output') as HTMLDivElement;

btn.addEventListener('click', () => {
  const empleado = new Empleado("Ana", 28, "Desarrolladora");
  output.textContent = empleado.presentarse();
});
