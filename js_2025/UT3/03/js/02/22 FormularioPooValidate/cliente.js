class Cliente {
    constructor(nombre, email, password) {
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`;
    }
}