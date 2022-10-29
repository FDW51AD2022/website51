/* Declaración de variables y constantes */

let apps = ['windows 10', 'vscode','oracle'];

let computadora = {
    "marca":"hp",
    "discoDuro":"1tb",
    "precio":12000,
    "softwareInstalado":apps
};

let alumnos = ["mario","luis"];
console.log(alumnos);
/* Saca la longitud del arreglo */
console.log("Total elementos: ", alumnos.length);
/* Ubicación */
console.log("Primer elemento: ", alumnos[0]);
console.log("Ultimo elemento: ", alumnos[-1]);
console.log("Ultimo elemento: ", alumnos[alumnos.length-1]);
console.log("Tipo de dato: ", typeof alumnos);

let grupo51 = {
    "nombre" :"grupo51",
    "semestre" : 5,
    "carrrera" :"LTI"
};

console.log("Nombre: ", grupo51["nombre"],
            grupo51["nombre"],
            grupo51.nombre);

/* console.log( "Primer alumno: " , grupo51.alumnos[0]); */


/* Las letras se van moviendo dentro del documento */
document.write("<marquee>mensaje<marquee>");
document.write(`<ul><li>Elemento<li><ul>}`);

/* Checar en que renglon vienen las condicioenes, eso los representa*/

/* Let VARIABLES DE ALCACNCE
    Var VARIABLES GLOBALES
    Const CONSTANTE */

/* EJEMPLO CON IF con operadores logicos y condicionales*/
let calif = 905 ;

/* Para pedir un dato 
calif = Number(prompt("Ingresa la calificaciòn: "));
 */
if (calif >= 95 && calif <= 100) {
    console.log("Excelente")
} else {
    console.log("No excelente")
}


/* Actividad 
Escribir un programa en javasrcriot que permita calcular el total a pagar a un empleado, 
solicitar numero de horas trabajadas y el pago por hora.
Si el trabajador tiene horas extras pagarlas al triple
Se consideran horas normales las primeras 40hrs*/

horasTrabajadas = Number(prompt("Ingresa las horas trabajadas: "));
pagoxhora = Number(prompt("Ingresa el pago por horas: "));

let pago = horasTrabajadas*pagoxhora;


if (horasTrabajadas>40) {
    let horaExtra = horasTrabajadas-40;
    let horastrabajadasreal = horasTrabajadas-horaExtra;

    let pago = horastrabajadasreal*pagoxhora;
    let pagoextra = horaExtra*pagoxhora*3;

    console.log(pago+pagoextra);

} else {
    console.log("El pago es : ", pago)
}