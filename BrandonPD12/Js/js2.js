let apps = ["windows 28","vscode"]

let computadora = {
    "marca" : "hp",
    "discoDuro" : "1tb",
    "precio" : 12000,
    "softwareInstalado" : apps
}


// ---Arrays
let alumnos = ["kevin","juan","emilio","cristian","samuel"];

console.log(alumnos);
console.log("Total elementos: ",alumnos.length);
console.log("Primer elemento",alumnos[0]);
console.log("Ultimo elemento",alumnos[-1]);

console.log("Tipo de dato: ",typeof(alumnos));

// ---Arrays indexados (Diccionarios)
let grupo = {
    "Nombre" : "grupo51",
    "Semestre" : 5,
    "Carrera" : "LTI",
    "Alumno" : alumnos
};

console.log("Nombre",grupo["Nombre"]);
console.log(grupo.Nombre);

// console.log("Primer alumno",grupo51.alumnos[0]); //CHECAR

// Funciones
document.write("<marquee>Mensaje</marquee>");
document.write(`<ul>
                    <li>Elemento</li>
                </ul>`);

// Ejemplo if
let calif = 95;

if (calif >= 95) {
    console.log("Excelente")
} else {
    console.log("No Excelente")
};

// Ejercicio: Calcular el total a pagar a un Empleado. 
// Solicitar numero de horas trabajadas y el pago por hora.
// Si el trabajador tiene horas extra pagarlas al triple. 
// Se consideran horas normales las primeras 40 hrs


let pago_hora = 100;
let horas_trabajadas = 30;
let horas_normales = 40;
let total_pago = 0;


if (horas_trabajadas > horas_normales) {
    let horas_extra = horas_trabajadas - horas_normales;
    let pago_extra = (horas_extra*pago_hora*3);
    total_pago = (horas_normales * pago_hora) + pago_extra;
    console.log(total_pago);
    
} else {
    total_pago = horas_normales * pago_hora;
    console.log(total_pago);
};