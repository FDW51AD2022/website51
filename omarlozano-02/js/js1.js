console.log("Hola Javascrip");
console.warn("mensaje");
console.error("fatal error");

console.log("Tipo de dato 34: " + typeof 34 + ".");
console.log(`Tipo de 34: ${typeof 34}.`);

console.log(`Ejemplo con operador logico ${5 > 2 || 3 < 1}`);
console.log(`Ejemplo con operador logico ${!5 > 2 || 3 < 1}`);

console.log(10 < 2 ? "parte verdadera" : "parte falsa");

//declaracion de variables

let temp = 10;
let mensaje;
mensaje = temp < 10 ? `Llevar chamarra` : `No llevar chamarra`;
console.log(mensaje);

const SEMESTRES = 9;
SEMESTRES = 3;
