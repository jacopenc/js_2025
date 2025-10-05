/*
JavaScript no permite la herencia múltiple de clases de forma directa.
 Sin embargo, podemos simular la herencia múltiple utilizando mixins,
*/

/*En JavaScript, un mixin es un patrón de diseño que permite extender varias clases con comportamientos compartidos, 
sin necesidad de usar herencia clásica. Dado que JavaScript no soporta herencia múltiple de forma nativa, 
los mixins son una forma flexible y modular de añadir funcionalidades de diversas fuentes. */

// Creamos Objeto Mixin para comportamiento de Estudiante
const EstudianteMixin = {
    estudiar(materia) {
        return `${this.nombre} está estudiando ${materia}.`;
    },
};

// Mixin para comportamiento de Trabajador
const TrabajadorMixin = {
    trabajar(puesto) {
        return `${this.nombre} está trabajando como ${puesto}.`;
    },
};

// Clase base para Persona
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Clase que combina Estudiante y Trabajador
class EstudianteTrabajador extends Persona {
    constructor(nombre) {
        super(nombre);
    }
}

// Aplicar los mixins a la clase EstudianteTrabajador
Object.assign(EstudianteTrabajador.prototype, EstudianteMixin, TrabajadorMixin);

// Función para crear un EstudianteTrabajador y mostrar el resultado
document.getElementById('crearBtn').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const materia = document.getElementById('materia').value;
    const puesto = document.getElementById('puesto').value;

    // Crear una instancia de EstudianteTrabajador
    const estudianteTrabajador = new EstudianteTrabajador(nombre);

    // Usar métodos de los mixins
    const estudio = estudianteTrabajador.estudiar(materia);
    const trabajo = estudianteTrabajador.trabajar(puesto);

    // Mostrar resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${estudio}</p><p>${trabajo}</p>`;
});