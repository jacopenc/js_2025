function ListadoAlumnos() {
    let nombres = ["Jose", "Pedro","María"];

    let mensaje = "Bucle clásico  ";
    //clásico
    for (let i=0; i < nombres.length; i++) {

        mensaje += nombres[i];

    }
    let div = document.getElementById("divbucles"); 
    div.innerHTML = mensaje;
};

function listadoProfesores(){
    let productosDB = ["Ana", "Juan"];
    let mensaje = "Bucle for of ";
    //for of me devuelve el value/obejeto como el clásico
    for (let item of productosDB) {
        mensaje += item;
    }
    let div = document.getElementById("divbucles"); 
    div.innerHTML = mensaje;

};

function listadoCursos(){
    let cursoDB = ["Primero", "Segundo"];
    let  mensaje = "Bucle for in ";
    //for in me devuelve el indice, la posicion
    for (let indice in cursoDB) {
        mensaje += "indice "+ indice +" " + cursoDB[indice];
    }
    let div = document.getElementById("divbucles"); 
    div.innerHTML = mensaje;

};

function listadoHorario(){
    let horarioDb = ["mañana", "tarde"];
    let mensaje = "Bucle forEach ";
    horarioDb.forEach(function (item, indice) { mensaje += indice + " " + item; });

    let div = document.getElementById("divbucles"); 
    div.innerHTML = mensaje;
};

function listadoAsignaturas(){
    let asignaturaDb = ["asign1", "asign2"];
    let mensaje = "Bucle while ";
    let i =0;
    while (i <= asignaturaDb.length) {
        mensaje += "indice "+ i +" " + asignaturaDb[i];
        i += 1;
    }
    let div = document.getElementById("divbucles"); 
    div.innerHTML = mensaje;

};