 // Supongamos que tenemos una lista de usuarios
 const listaUsuarios = [
    new Cliente("Juan Pérez", "juan@example.com", 25),
    new Cliente("María Gómez", "maria@example.com", 30),
    new Cliente("Carlos López", "carlos@example.com", 28),
];

// Función para registrar un nuevo usuario desde el formulario
function registrarCliente() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("password").value;
    // Crear una instancia de la clase Usuario
    const nuevoUsuario = new Cliente(nombre, email, edad);
    if (validaFormulario())
    listaUsuarios.push(nuevoUsuario);
}
 function validaFormulario() {
            var exito = true;
            var controles = document.getElementsByClassName("obligatorio");
            var ncontroles = controles.length;
            for (var i = 0; i < ncontroles; i++) {
                if (controles[i].value.trim() == "") {
                    exito = false;
                    controles[i].parentNode.classList.add("error");
                }
                else {  
                    controles[i].parentNode.classList.remove("error");
                }
            }
            return exito;

        };