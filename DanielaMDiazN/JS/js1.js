console.log("Hola JavaScript");
console.warn("Mensaje");
console.error("Fatal error");
console.log("Tipo de 34:" + typeof 34 + ".");
console.log(`Tipo de 34: ${ typeof 34}.`);
console.log(`Ejemplo con operador logico ${ !5 > 2 || 3 < 1}`);
console.log(10 < 2 ? "Parte verdadera": "Parte falsa");

//Declaración de Variables
let temp = 1;
let mensaje;
mensaje = temp < 10 ? "Llevar chamarra" : "No llevar chamarra";
console.log(mensaje);


//Declaración de Constantes
const SEMESTRES = 9;
