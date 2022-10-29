let apps = ['windows 10','vscode','oracle'];

let computadora ={
    "Marca" :"DELL",
    "DiscoDuro" : "1tb",
    "Precio": 12000,
    "sofwereInstalado": apps
}

//---Arrays
let alumnos=["mario","luis"];
console.log(alumnos);
console.log("total elementos", alumnos,length);
console.log("primer elemento", alumnos [0]);
console.log("ultimo elemento", alumnos [alumnos.length-1]);
console.log("tipo de datos:", typeof(alumnos));

//---Arrays indexados (diccionarios)
let grupo51 = {
    "nombre":"grupo51",
    "semestre": 5,
    "carrera":"LTI",
    "alumno": alumnos
};

console.log("nombre",
grupo51 ["nombre"]),

console.log("Primer Alumno",
grupo51,alumnos[0])

//console.log("primer alumno", grupo51.alumnos[0]);

document.write("<marquee>mensaje</marquee>");
document.write('<ul><li>elementos</li></ul>');

/*Ejemplo if*/

let calif = 95;

if(calif >=95 && calif <=100){
    console.log("Excelente");
} else {
    console.log("No excelente")
}