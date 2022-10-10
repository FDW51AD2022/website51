let alumnos = ["Mario","Luis"];

console.log(alumnos);
console.log("Total elementos",
            alumnos.length);
console.log("Primer elemento",
            alumnos[0])
console.log("Ultimo elemento",
            alumnos[alumnos.length-1])
console.log("Tipo de dato",
            typeof alumnos)
let grupo51 = {
    "nombre" : "grupo 51",
    "semestre" : 5,
    "carrera" : "LTI",
    "alumnos" : alumnos
};

console.log("Nombre",
            grupo51["nombre"],
            grupo51.nombre);

console.log("Primer alumno",
            grupo51.alumnos[0]);

document.write("<marquee>Mensaje</marquee>")
document.write(`<ul><li>Elemento
                </li></ul>`)

/* Ejemplo if */
let calif = 95;
/* calif = Number(prompt("Ingresa la calificación:")) */
if (calif >= 95 && calif <= 100) {
    console.log("Excelente");
} else {
    console.log("No excelente")
}

horasTrabajadas = Number(prompt("Ingresa las horas trabajadas:"))
pagoPorHora = Number(prompt("Ingrese el pago por hora:"))
if (horasTrabajadas > 40){
    horasExtra = horasTrabajadas-40;
    console.log("Tiene horas extra:",horasTrabajadas-40);
    console.log("El total de horas extra a pagar es:",horasExtra*3*pagoPorHora)
    console.log("Total a pagar es:",(horasTrabajadas*pagoPorHora)+(horasExtra*3*pagoPorHora))
} else {
    console.log("No tiene horas extras")
    console.log("Total a pagar:",horasTrabajadas*pagoPorHora)
}