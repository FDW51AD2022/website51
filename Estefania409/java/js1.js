console.log("Hola javascript");
console.warn("Mensaje");
console.error("FATAL ERROR");
console.log("Tipo de 34:" + typeof 34 + ".");
console.log( `Tipo de 34: ${ typeof 34}.`);
console.log(`Ejemplo con operador logico ${5 > 2 || 3 < 1}`);
console.log(`Ejemplo con operador booleano ${!5 > 2 || 3 < 1}`);
console.log(10 < 2 ? "Parte verdadera":"Parte falsa");
// codigo que representa el console anterior:
// if 10 < 2:
//      parte verdadera
// else:
//      parte falsa
let temp=1;
let mensaje;
mensaje=temp < 10 ? "Llevar chamarra" : "No llevar chamarra";
console.log(mensaje);

const SEMESTRES=9;

SEMESTRES=3;