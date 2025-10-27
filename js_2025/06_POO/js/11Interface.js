/*En JavaScript, no existen interfaces de manera nativa, como sí sucede en lenguajes como Java o TypeScript. 
Sin embargo, puedes simular el comportamiento de una interfaz en JavaScript utilizando ciertos patrones.
 Una interfaz define un conjunto de métodos y propiedades que una clase debe implementar,
 garantizando que cumpla con una estructura específica. */


// "Interfaz" Vehiculo
class Vehiculo {
    iniciar() {
        throw new Error("Método 'iniciar()' no implementado");
    }

    detener() {
        throw new Error("Método 'detener()' no implementado");
    }

    describir() {
        throw new Error("Método 'describir()' no implementado");
    }
}

// Clase Coche que implementa la interfaz Vehiculo
class Coche extends Vehiculo {
    iniciar() {
        return "El coche está en marcha.";
    }

    detener() {
        return "El coche se ha detenido.";
    }

    describir() {
        return "Este es un coche.";
    }
}

// Clase Bicicleta que implementa la interfaz Vehiculo
class Bicicleta extends Vehiculo {
    iniciar() {
        return "La bicicleta está pedaleando.";
    }

    detener() {
        return "La bicicleta se ha detenido.";
    }

    describir() {
        return "Esta es una bicicleta.";
    }
}

// Función para manejar la lógica del vehículo
let vehiculoSeleccionado;

document.getElementById('vehicleSelect').addEventListener('change', (event) => {
    const tipoVehiculo = event.target.value;
    if (tipoVehiculo === 'Coche') {
        vehiculoSeleccionado = new Coche();
    } else if (tipoVehiculo === 'Bicicleta') {
        vehiculoSeleccionado = new Bicicleta();
    }
});

// Manejadores de eventos para los botones
document.getElementById('startBtn').addEventListener('click', () => {
    if (vehiculoSeleccionado) {
        document.getElementById('resultadoTexto').innerText = vehiculoSeleccionado.iniciar();
    } else {
        document.getElementById('resultadoTexto').innerText = "Selecciona un vehículo.";
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    if (vehiculoSeleccionado) {
        document.getElementById('resultadoTexto').innerText = vehiculoSeleccionado.detener();
    } else {
        document.getElementById('resultadoTexto').innerText = "Selecciona un vehículo.";
    }
});

document.getElementById('describeBtn').addEventListener('click', () => {
    if (vehiculoSeleccionado) {
        document.getElementById('resultadoTexto').innerText = vehiculoSeleccionado.describir();
    } else {
        document.getElementById('resultadoTexto').innerText = "Selecciona un vehículo.";
    }
});
