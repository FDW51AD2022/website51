let alumnos= ["mario", "luis"];

console.log(alumnos);
console.log("total elementos", alumnos.length);
console.log("primer elemento", alumnos[0]);
console.log("Ultimo elemento", alumnos[-1]);
console.log("Ultimo elemento", alumnos[alumnos.length-1]);
console.log("tipo de dato", typeof alumnos);
let grupo51 = {
    "nombre": "grupo 51",
    "smestre": 5,
    "carrera": "LTI",
    "alumnos": alumnos
};

console.log("Nombre: ", grupo51["nombre"], grupo51.nombre);
console.log("primer alumno", grupo51.alumnos[0]);

document.write("<marquee>mensaje</marquee");
document.write(´<ul>
                 <li>Elemento</li>
                </ul>´)

/*ejemplo if */
let calf= 95;
if (calif>95 && calif<=100) {
    console.log("excelente")
    
} else {
 console.log("No escelente")
    
}                