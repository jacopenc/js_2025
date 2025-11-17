class Usuario {
    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`;
    }
}