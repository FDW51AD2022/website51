console.log("hola javascript");

console.warn("mensaje");

console.error("Fatal error");

console.log("El tipo de dato de 34 es: " + typeof 34 + ".");

console.log(`Tipo de 34: ${ typeof 34}.`);

console.log(`Ejemplo con operador logico ${ !5 > 2 || 3 < 1}`);

console.log(10 < 2 ? "parte verdadera":"parte falsa");

/*if 10 < 2:
   parte verdadera
else:
   parte falsa*/

//declaracio de variables

let temperatura = 10;

let mensaje;

mensaje = temperatura < 10 ? "Llevar chamarra" : "No llevar";

console.log(mensaje);

//declaracion de constantes

const SEMESTRES = 9;

SEMESTRES = 3;

