function ListadoProvincias(){
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 
    for(i=0;i<provincias.length;i++){ 
        document.write(+i+". " +provincias[i]+"</br>"); 
    } 


};

function AddProvinciaAlFinal(){
    let provincias=new Array("Albacete"); 
    provincias.push("Alicante","Castellón","Valencia"); //añade al array Alicante, Castellón, Valencia
    for(i=0;i<provincias.length;i++){ 
        document.write(+i+". " +provincias[i]+"</br>"); 
    } 
}

function DelProvinciaAlFinal(){
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 
    provincias.pop(); //Quita del array el último elemento, es decir, Toledo.
    for(i=0;i<provincias.length;i++){ 
        document.write(+i+". " +provincias[i]+"</br>"); 
    } 
}
function AddProvinciaAlPrincipio(){
    let provincias=new Array("Albacete"); 
    provincias.unshift("Alicante","Castellón","Valencia"); //añade al principio de array Alicante, Castellón, Valencia
    for(i=0;i<provincias.length;i++){ 
        document.write(+i+". " +provincias[i]+"</br>"); 
    } 
}


function DelProvinciaAlPrincipio(){
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 
    provincias.shift(); //Quita del array el primer elemento, es decir, Albacete.
    for(i=0;i<provincias.length;i++){ 
        document.write(+i+". " +provincias[i]+"</br>"); 
    } 
};

function filterProvincia(){
//todos los elementos que cumplan con una condición específica.
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 

    let encontrado = provincias.filter(element => element =="Cuenca" );
    
    document.write(encontrado); 

        /* Otro ejemplo
          let arreglo = [10, 11, 3, 20, 5];

        let mayorQueDiez = arreglo.filter(element => element > 10);

        console.log(mayorQueDiez) // [11, 20] */

};

function FindProvincia(){
//encontrar el primer elemento que cumple cierta condición
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 

    
    let encontrado = provincias.find(element => element =="Cuenca" );//devuelve el objeto
    
    document.write(encontrado); 

        /*Otro ejemplo
           let arreglo = [10, 11, 3, 20, 5];

        let existeElementoMayorQueDiez = arreglo.find(element => element > 10);

        console.log(existeElementoMayorQueDiez) // 11
        
        */

};

function IncludeProvincia(){
    //saber si tu array contiene un valor específico.
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 
    let incluye = provincias.includes("Cuenca");
    
    document.write(incluye);  // true
    
};

function indexOfProvincia(){
 /*Devuelve primer índice encontrado de un elemento específico. Devuelve -1 si el elemento no existe en el Array */
    let provincias=new Array("Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"); 
    let incluye = provincias.indexOf("Cuenca");
    
    document.write(incluye);  

};

function sortArrays(){

    var provincias = ['Cuenca', 'Toledo', 'Albacete'];
    provincias.sort(); // ['Albacete', 'Cuenca', 'Toledo']
    document.write(provincias);  
    /*
    var puntos = [1, 10, 2, 21];
    puntos.sort(); // [1, 10, 2, 21]
    // Tenga en cuenta que 10 viene antes que 2
    // porque '10' viene antes que '2' según la posición del valor Unicode.
    
    var cosas = ['word', 'Word', '1 Word', '2 Words'];
    cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
    // En Unicode, los números vienen antes que las letras mayúsculas
    // y estas vienen antes que las letras minúsculas.

    */

};
function comparar ( a, b ){ return a - b; };

function sortArraysCompare(){

    var arr = [ 40, 1, 5, 200 ];
    arr.sort( comparar );  // [ 1, 5, 40, 200 ]

    document.write(arr);  

};

function sortNoASCII(){

    var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {return a.localeCompare(b);});
document.write(items);  

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
};

function CambiarUnElemento(){
    var items = ["Jose", "Ana", "Pedro", "Lorena"];
    items[0] = "José";
    document.write(items);  
};

function DeleteElementbyPosicion()
{
    var items = ["Jose", "Ana", "Pedro", "Lorena"];
    delete items[0];
    document.write(items);  

};

function Unir()
{
    let items1 = ["Jose", "Ana", "Pedro", "Lorena"];
    let items2 = ["Luis", "Juan"];
    let itemResult = items1.concat(items2);
    document.write(itemResult);  

};


