let alumnos = ["Mario","Luis"];

console.log(alumnos);
console.log("Total elementos:", alumnos.length);

console.log("Primer elemento:", alumnos[0]);

console.log("Ultimo elemento;", alumnos[-1]);

console.log("Ultimo elemento:", alumnos[alumnos.length-1]);

console.log("Tipo de dato:", typeof alumnos);

let grupo51 = {"Nombre" : "Grupo 51","Semestre" : 5, "Carrera" : "LTI", "Alumnos": alumnos};

console.log(
    "Nombre:",
    grupo51["Nombre"],
    grupo51.Nombre
);

console.log("Primer alumno:",
grupo51.Alumnos[0]
);

document.write("<marquee>mensaje</marquee>");
document.write('<ul><li>Elemento</li></ul>');

/* Ejemplo if*/

let calif = 45;

if (calif >=95 && calif <= 100) {
    console.log("Excelente");
} else {
    console.log("No excelente")
}




/*Actividad*/

let horas = 160;
let paga= 1200
total = paga 

if (horas ==40 && horas == 40) {
    console.log("Se paga normal", paga);
} else if (horas >=41 && horas == 80) {
    console.log("Se paga el doble", total * 2)
}
 else if (horas >=81 && horas == 160) {
    console.log("Se paga el triple", total * 3)
}


