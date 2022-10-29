/*Alerta*/
window.alert("    prácticas con if's,   ");


let apps = ["windows 28","vscode"]

let computadora = {
    "marca" : "hp",
    "discoDuro" : "1tb",
    "precio" : 12000,
    "softwareInstalado" : apps
}


// ---Arrays
let alumnos = ["Aitana","Cesar","Andrea","Lizeth"];

console.log(alumnos);
console.log("Total elementos: ",alumnos.length);
console.log("Primer elemento",alumnos[0]);
console.log("Ultimo elemento",alumnos[-1]);

console.log("Tipo de dato: ",typeof(alumnos));

// ---Arrays indexados (Diccionarios)
let grupo51 = {
    "Nombre" : "grupo51",
    "Semestre" : 5,
    "Carrera" : "LTI",
    "Alumno" : alumnos
};

console.log("Nombre",grupo51["Nombre"]);
console.log(grupo51.Nombre);

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
