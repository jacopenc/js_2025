// Función que realiza el cálculo pesado
function calcularResultado() {
  var result = 0;
  for (var i = 0; i < 10000000; i++) {
    result += i;
  }
  return result;
}

// Función que maneja los mensajes recibidos
function manejarMensaje(e) {
  if (e.data === 'start') {
    var resultado = calcularResultado();
    self.postMessage('Resultado: ' + resultado);
  }
}

// Asignar la función al evento onmessage
self.onmessage = manejarMensaje;
