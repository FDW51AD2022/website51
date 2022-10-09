console.log("Hola Javascript");
console.warn("Mensaje");
console.log("Fatal Error");

console.log(typeof 3);
console.log(typeof "Prueba");
console.log("El tipo de 34 es: " + typeof 34 + ".");
console.log(`Tipo de 34: ${typeof 34}.`);

console.log(`Ejemplo con operador lógico ${ !5>2 || 3<1}`);
console.log(10 < 2 ? "Parte verdadera": "parte falsa");

/*  if 10 < 2:
        parte verdadera
    else:
        parte falsa */

//Declaración de variables

let temp = 10;
let mensaje;
mensaje = temp < 10 ? "Llevar chamarra": "No llevar chamarra"
console.log(mensaje)

//Declaración de constantes

const SEMESTRES = 9;
SEMESTRES = 3;