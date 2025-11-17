function enfocado(id_objeto) {
    document.getElementById(id_objeto).style.background = "#FFF200";
}

function desenfocado(id_objeto) {
    document.getElementById(id_objeto).style.background = "white";
}

window.onload = function() {
  
    document.getElementById("nombre").focus();
    document.getElementById("nombre").click();
    document.getElementById("nombre").style.background = "#FFF200";
 
  }
/*
window.addEventListener('load', function(e) { 
    document.getElementById("nombre").focus();
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nombre").focus();
});

window.addEventListener('load', (event) => {
console.log('The page has fully loaded');
let txtNombre =document.getElementById("nombre");
txtNombre.focus();

}); */



//ejercicio, marcar un input con el foco y posteriormente onclir recorrer todos los input y quitar el foco
