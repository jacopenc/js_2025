// Clase base Animal
class Animal {
    hacerSonido() {
        return "El animal hace un sonido.";
    }
}

// Clase Perro que extiende Animal
class Perro extends Animal {
    hacerSonido() {
        return "El perro ladra: ¡Guau!";
    }
}

// Clase Gato que extiende Animal
class Gato extends Animal {
    hacerSonido() {
        return "El gato maúlla: ¡Miau!";
    }
}

// Clase Vaca que extiende Animal
class Vaca extends Animal {
    hacerSonido() {
        return "La vaca muge: ¡Muu!";
    }
}


// Función que utiliza polimorfismo
function hacerSonar(animal) {
     return animal.hacerSonido();
}

// Función para obtener el sonido del animal seleccionado
function obtenerSonido(animal) {
    switch(animal) {
        case 'Perro':
           
            return hacerSonar( new Perro());
        case 'Gato':
            return hacerSonar( new Gato());
        case 'Vaca':
            return hacerSonar( new Vaca());
        default:
            return "Animal no encontrado.";
    }
}

// Event listener para el botón
document.getElementById('hacerSonidoBtn').addEventListener('click', () => {
    const animalSeleccionado = document.getElementById('animalSelect').value;
    const sonido = obtenerSonido(animalSeleccionado);

    // Mostrar el resultado en la interfaz
    document.getElementById('resultadoSonido').innerText = sonido;
});