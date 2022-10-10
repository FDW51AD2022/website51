let alumnos = ['mario','luis'];
console.log(alumnos);
console.log("total de elementos", alumnos.length);
console.log('primeros alumnos', alumnos[0]);
console.log('ultimo alumnos', alumnos[-1]);
console.log('ultimo alumnos', alumnos[alumnos.length-1]);
console.log('tipo de dato', typeof alumnos);

let grupo51 = {
    "nombre": "grupo51",
    "sementre": "5",
    "carrera": "lTI",
    "alumnos": alumnos,
};

console.log("nombre:", grupo51["nombre"],grupo51.nombre, grupo51.length);
console.log("primer alumno", grupo51.alumnos[0]);

document.write("<marquee>mensaje</marquee>");
document.write(`<ul><li>elemento</li></ul>`);

/* ejmeplo if*/
let calif = 45;

if (calif>=95 && calif <=100) {
    console.log("Excelente");
} else {
    console.log("No excelente");
}
