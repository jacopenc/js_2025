
// Tipo string
let nombre: string = "Ana";

// Tipo number
let edad: number = 25;

// Tipo boolean
let activo: boolean = true;

// Tipo any (acepta cualquier tipo de valor)
let x: any = "algo";

// Tipo unknown (debe comprobarse antes de usarse)
let dato: unknown = 5;

// Tipo null
let valorNulo: null = null;

// Tipo undefined
let valorIndefinido: undefined = undefined;

// Tipo array de números
let lista: number[] = [1, 2, 3];

// Tipo tupla (orden y tipo de elementos específicos)
let tupla: [string, number] = ["hola", 1];

// Tipo objeto
let persona: { nombre: string; edad: number } = {
  nombre: "Carlos",
  edad: 30
};


//Enums (Enumeraciones):
enum Dia {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}
let diaDeTrabajo: Dia = Dia.Lunes;


/*Union Types:
Permiten que una variable pueda tener más de un tipo.*/
let identificador: number | string;  // Puede ser un número o un string
identificador = 123;
identificador = "ABC123";




////RECUERDEN 
//Compilar el proyecto  npx  tsc -p .  
//Compilar poryecto tsc -p  .
//Compilar un fichero tsc 01ejemplo.ts

//RECUERDEN para minimizar uglifyjs  02_TipoDatos.js -o 02_TipoDatos.min.js