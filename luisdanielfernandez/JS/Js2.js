let alumnos = ["Mario", "Luis",];

console.log(alumnos);
console.log("Total de Elementos", alumnos.length);
console.log("Primer elemento", alumnos[0]);
console.log("Ultimo elemento", alumnos[-1]);
console.log("Ultimo Elemento",alumnos [alumnos.length-1]);
console.log("Tipo de Dato", typeof alumnos);

let grupo51 = { 
    "nombre": "grupo51",
    "semestre": 5,
    "carrera": "LTI",
    "alumnos": alumnos
};

console.log("nombre:", grupo51["nombre"],
grupo51.nombre);

console.log("Primer Alumno", grupo51.alumnos["alumnos"][0][0]);

document.write("<marquee>mensaje</marquee>");
document.write(`<ul><li>Elementos</li></ul>`);

/* Ejemplo if */
let calif = 45;
if (calif >= 95 && calif <=100) {
    console.log("Excelente");
} else {
    console.log("No excelente")
}
