let alumnos = ("mario,luis");

console.log(alumnos);
console.log("Total elementos",
alumnos[0]);

console.log("Primer elemento",
alumnos[-1]);

console.log("Ultimo elemento",
alumnos[alumnos.length-1]);

console.log("Tipo de dato",
typeof alumnos);

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
grupo51.alumnos[0]
);

document.write("<marquee>mensaje</marquee>");
document.write('<ul><li>Elementos</li></ul>');


/*Ejemplo if */

let calif = 45;

if (calif >= 95 && calif <= 100) {
console.log("Excelente");
} else {
    console.log("No Excelente")
}