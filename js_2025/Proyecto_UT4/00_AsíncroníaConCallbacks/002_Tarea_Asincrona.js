// Tarea 1: Función clásica con setTimeout
function task1() {
    setTimeout(function() {
      console.log("Tarea 1 completada en 3 segundos");
    }, 3000);
  }  
  // Tarea 2: Función clásica con setTimeout
  function task2() {
    setTimeout(function() {
      console.log("Tarea 2 completada en 2 segundos");
    }, 1000);
  }  
  // Tarea 3: Función clásica con setTimeout
  function task3() {
    setTimeout(function() {
      console.log("Tarea 3 completada en 5 segundos");
    }, 5000);
  }  
  //Ahora, a pesar de ejecutarlas en orden, como tardan tiempos diferentes, 
// comprobaremos que terminaría primero la tarea 2 (tarda 1 segundos), 
// luego la tarea 1 (tarda 3 segundos) 
// y finalmente la tarea 3 (tarda 5 segundos).
//no garantizan el orden
  task1();
  task2();
  task3();
  


