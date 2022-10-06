console.log("hola javacript");
console.warn("mensaje");
console.error("error");

console.log(`tipo de dato es 34: + ${typeof 34}.`);

//para poner algo en verdadera
console.log(`Ejemplo con operador logico 
                ${ 5 > 2 || 3 < 1}`);

//para poner algo en falso con !
console.log(`Ejemplo con operador logico
                ${ !5 > 2 || 3 < 1}`);

console.log(10 < 2 ? "Parte verdadera" : "parte falsa");

// declaracion de variables 
let temp= 1;

let mensaje;

mensaje = temp < 10 ? "Llevar chamarra" : "No llevar chamarra";
console.log(mensaje);

//constantes 
const SEMESTRES = 9;
SEMESTRES = 4;
