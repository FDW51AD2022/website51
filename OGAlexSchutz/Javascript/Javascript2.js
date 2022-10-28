let alumnos = ["mario", "luis"];

console.log(alumnos);

console.log("Total elementos", alumnos.length);

console.log("Primer elemento", alumnos[0]);
console.log("Primer elemento", alumnos[alumnos.length -1]);
console.log("Tipo de dato: ", typeof alumnos);

let grupo51 = {
    "nombre": "grupo 51",
    "semestre": 5,
    "carrera": "LTI",
    "alumnos": alumnos
};

console.log("Nombre: ", grupo51["nombre"], grupo51.nombre);
console.log("Primer alumno", grupo51.alumnos[0]);
document.write("<marquee>mensaje</marquee>");

document.write("<ul><li>elemento</li></ul>");

// Ejemplo if

let calif = 90;

if (calif >= 95 && calif <= 100) {
    console.log("Excelente");
} else {
    console.log("No excelente");
}

/* Actividad 
Escribir un programa en javasrcript que permita calcular el total a pagar a un empleado, 
solicitar numero de horas trabajadas y el pago por hora.
Si el trabajador tiene horas extras pagarlas al triple
Se consideran horas normales las primeras 40hrs*/

let horas_trabajadas = 43;
let pago_hora = 100;
let pago_horas_extra = pago_hora * 3;
let pago_horas_normales;
let total_pago;

if (horas_trabajadas > 40) {
    let total_horas_extra = horas_trabajadas - 40;
    let total_pago_horas_extra = total_horas_extra * pago_horas_extra;
    let pago_horas_normales = (horas_trabajadas -total_horas_extra) * pago_hora;
    total_pago = pago_horas_normales + total_pago_horas_extra;
    console.log(total_pago);
    
} else {
    total_pago = horas_trabajadas * pago_hora;
    console.log(total_pago);
}