
let alumnos = ["mario","luis"];

console.log(alumnos);
console.log("Total elementos", alumnos.length);
console.log("Primer elemento", alumnos[0]);
console.log("Ultimo elemento",alumnos[alumnos.length-1]);
console.log("Tipo de dato", typeof alumnos);

let grupo51 = {
    "nombre": "grupo51",
    "semestre": 5,
    "carrera": "LTI",
    "alumnos": alumnos
};

console.log("Nombre:", grupo51["nombre"], grupo51.nombre);
console.log("Primer Alumno", grupo51.alumnos[0]);

document.write("<marquee>mensaje</marquee>");
document.write(`<ul><li>Elemento</li></ul>`);



let calif = 905;
if (calif >= 95 && calif <=100) {
    console.log("Excelente");
} else {
    console.log("No excelente");
}

let horas = 50;
let pago = 20;

if (horas > 40) {
    let pago_extra = pago * 3 
    let horas_normales = 40 * pago 
    let horas_extra = horas - 40
    let horas_pagadas = horas_extra * pago_extra
    console.log("El total a pagar al empleado es de:", horas_normales+horas_pagadas);
} else {
    let horas_pagadas = horas * pago;
    console.log("El total a pagar al empleado es de:", horas_pagadas);
}



