let alumnos = ["Carla", "Marcos"];

console.log(alumnos);
console.log("Total de elementos",alumnos.length); /*length:longitud*/
console.log("Primer elemento",alumnos[0]);
console.log("Ultimo elemento",alumnos[-1]);
console.log("ultimo elemento",alumnos[alumnos.length-1]);
console.log("tipo de dato",typeof alumnos);
let grupo51 = {
    "nombre" : "grupo51",
    "semestre" : 5,
    "carrera" : "LTI",
    "alumnos":alumnos
};

console.log("nombre",
grupo51["nombre"],
grupo51.nombre);

console.log("primer alumno",
    grupo51.alumnos[0]
    );

document.write("<marquee>mensaje</marquee>");
document.write(`<ul>
                    <li>Elementos</li>
                </ul>`)
/*Ejemplo*/

let calif = 45;

if (calif >= 95 && calif <=100) {
    console.log("Excelente"); 
} else {
    console.log("No excelente")
}
