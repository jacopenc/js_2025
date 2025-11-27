// Tarea 1: Tarea que se completa en 3 segundos
function task1(callback) {
    setTimeout(function() {
      console.log("Tarea 1 completada en 3 segundos");
      callback();  // Llamamos al callback después de completar la tarea 1
    }, 3000);
  }  
  // Tarea 2: Tarea que se completa en 2 segundos
  function task2(callback) {
    setTimeout(function() {
      console.log("Tarea 2 completada en 2 segundos");
      callback();  // Llamamos al callback después de completar la tarea 2
    }, 2000);
  }  
  // Tarea 3: Tarea que se completa en 5 segundos
  function task3() {
    setTimeout(function() {
      console.log("Tarea 3 completada en 5 segundos");
    }, 5000);
  }
  //De esta forma garantizamos el orden de ejecución
  // Iniciar las tareas de manera secuencial
  task1( function() {  // Primero ejecutamos la tarea 1
    task2( function() {  // Luego ejecutamos la tarea 2 después de la 1
      task3();  // Finalmente ejecutamos la tarea 3 después de la 2
    } );
  });
  