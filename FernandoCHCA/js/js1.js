console.log("Hola Java Script");
console.warn("Hola");
console.error("AAAAAAAAAAAAAAAAAAAAA");
console.count("2");

console.log(typeof 4);
console.log("Tipo de 34: " + typeof 34+".");
/* se agrega ${} para poner la funcion dentro del texto */
console.log(`Tipo de 34: ${typeof 34}.`);
console.log();
console.log('hola');
console.log(`4 es igual a 3 ${4 == 3}`);
console.log(`4 es mayor que 3 ${4 > 3}`);
console.log(`4 es mayor igual a 3 ${4 >= 3}`);
console.log(`4 es menor a 3 ${4 < 3}`);
console.log(`4 es menor igual a 3${4 <= 3}`);
console.log(`4 es distinto de 3 ${4 != 3}`);
console.log(`4 es igual a 3 o 4 es mayor a 2 ${4 == 3 || 4 > 2}`);
console.log(`4 es igual a 3 y 4 es mayor a 2 ${4 == 3 && 4 > 2}`);
console.log(`4 es igual a 3 pero su resultado es el opuesto, y 4 es mayor a 2 ${!(4 == 3) && 4 > 2}`);
console.log()

console.log(10 < 2 ? "OMG ES VERDAD NO WAY":"Es falso pipipi")

let i;
let nombre;
let edad =33, ciudad="Monterrey";

/* CONSTANTES DEBES DE SER MAYOR */
/* Las constantes no se les puede cambiar el valor */

const FACTOR = 1.45;
const VEL = 1500;

console.log(FACTOR, VEL)

console.log(edad, ciudad);

let mensaje;
let temp =4;
mensaje = temp > 10? "Temperatura ambiente":"Temperatura fria";
console.log(mensaje);

const SEMESTRES =9;

/* SI SE INTENTA MODIDIFICAR SE ROMPE EL PROGRAMA 
SEMESTRES = 3; */



