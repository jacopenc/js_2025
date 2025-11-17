 // Supongamos que tenemos una lista de usuarios
 const listaUsuarios = [
    new Usuario("Juan Pérez", "juan@example.com", 25),
    new Usuario("María Gómez", "maria@example.com", 30),
    new Usuario("Carlos López", "carlos@example.com", 28),
];


// Función para listar todos los usuarios
function listarUsuarios() {
    const resultadoDiv = document.getElementById("resultado");

    if (listaUsuarios.length > 0) {
        showUsers(listaUsuarios)
      
    } else {
        resultadoDiv.innerHTML = "<p>No hay usuarios registrados.</p>";
    }
}
// Función para registrar un nuevo usuario desde el formulario
function registrarUsuario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    // Crear una instancia de la clase Usuario
    const nuevoUsuario = new Usuario(nombre, email, edad);

    listaUsuarios.push(nuevoUsuario);
    listarUsuarios();
    
}

function buscarUsuario() {
    // Obtener el término de búsqueda
    const searchTerm = document.getElementById("searchTerm").value;
 
    // Filtrar usuarios que coincidan con el término de búsqueda
    const resultados = listaUsuarios.filter(usuario => usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()));

    // Mostrar resultados
   
    
    if (resultados.length > 0) {
        showUsers(resultados)
    } else {
        resultadoDiv.innerHTML = "<p>No se encontraron resultados.</p>";
    }
 
}

function eliminarUsuario(index) {
    // Eliminar el usuario de la lista
    listaUsuarios.splice(index, 1);

    // Actualizar el listado de usuarios
    listarUsuarios();
}
 function showUsers(usuarios)
 {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Listado de Usuarios:</h3>";
    usuarios.forEach((usuario, index) => {
        const usuarioInfo = document.createElement("p");
        usuarioInfo.textContent = usuario.mostrarInformacion();

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => eliminarUsuario(index));
        
        usuarioInfo.appendChild(deleteButton);
        resultadoDiv.appendChild(usuarioInfo);
    });

 }