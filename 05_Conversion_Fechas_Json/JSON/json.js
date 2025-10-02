/*Trabajar con JSON en JavaScript es común, ya que JSON (JavaScript Object Notation) es un formato 
muy utilizado para intercambiar datos entre servidores y aplicaciones. 
A continuación, se explican los conceptos clave y se muestran ejemplos prácticos de cómo trabajar con JSON en JavaScript.
*/

// 1)Convertir JSON a un Objeto JavaScript (JSON.parse)

// JSON en formato de cadena (string)
const jsonData = '{"nombre": "Juan", "edad": 30, "ciudad": "Madrid"}';

// Convertimos el JSON a un objeto de JavaScript
const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // Salida: "Juan"
console.log(objeto.edad);   // Salida: 30

  //_-----------------------------------------------------

//2 Convertir un Objeto JavaScript a JSON (JSON.stringify)

// Objeto de JavaScript
const objeto2 = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Barcelona"
  };
  
  // Convertimos el objeto a JSON
  const jsonString = JSON.stringify(objeto2);
  
  console.log(jsonString); // Salida: '{"nombre":"Ana","edad":25,"ciudad":"Barcelona"}'
  
  
  //_-----------------------------------------------------

  //3. Trabajar con JSON Anidado

  // JSON con estructura anidada
const datosJson = `{
    "persona": {
      "nombre": "Carlos",
      "edad": 28,
      "direccion": {
        "calle": "Calle Falsa 123",
        "ciudad": "Sevilla"
      }
    },
    "aficiones": ["fútbol", "lectura", "cine"]
  }`;
  
  // Convertimos el JSON a un objeto de JavaScript
  const datos = JSON.parse(datosJson);
  
  console.log(datos.persona.nombre);         // Salida: "Carlos"
  console.log(datos.persona.direccion.calle); // Salida: "Calle Falsa 123"
  console.log(datos.aficiones[1]);            // Salida: "lectura"

    //_-----------------------------------------------------
    //4. Modificar un Objeto JSON
    // Objeto JSON inicial
const datos2 = JSON.parse('{"nombre": "Sara", "edad": 32, "ciudad": "Valencia"}');

// Modificar una propiedad
datos2.edad = 33;

// Agregar una nueva propiedad
datos2.ocupacion = "Ingeniera";

// Eliminar una propiedad
delete datos2.ciudad;

console.log(JSON.stringify(datos2)); 
// Salida: '{"nombre":"Sara","edad":33,"ocupacion":"Ingeniera"}'

//_-----------------------------------------------------
/*
5 .Almacenar y Recuperar JSON en Local Storage
Puedes usar localStorage para almacenar datos en formato JSON de forma persistente en el navegador.*/

  // Objeto a almacenar
const usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
  // Almacenar el objeto en localStorage
  localStorage.setItem("usuario", JSON.stringify(usuario));
  
  // Recuperar el objeto desde localStorage
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  
  console.log(usuarioGuardado.nombre); // Salida: "Juan"
  