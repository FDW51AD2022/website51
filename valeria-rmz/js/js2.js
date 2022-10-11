let alumnos = ["Mario","luis"];

console.log(alumnos);
console.log("Total elementos", alumnos.length);
console.log("Primer elemento", alumnos[0]);

console.log("Ultimo elemento", 
 alumnos[alumnos.length-1]);

console.log("Tipo de datos", 
typeof (alumnos));

 let grupo51 = {
    "nombre" : "grupo51",
    "semestre" : 5,
    "carrera" : "LTI",
    "alumnos" : alumnos
 };

 console.log("nombre:", 
 grupo51["nombre"],
 grupo51.nombre);

 console.log("Primer alumno",
    grupo51.alumnos[0]
    );


document.write("<marquee>mensaje</marquee>")
document.write(`<ul>
                    <li>Elemntos/li>
                </ul>`);

/* Ejemplo if */

let calif = 95;

if (calif >= 95 && calif<= 100) {
    console.log("Excelente");
} else {
    console.log("No excelente");
}


let ht = 8;
let pago_hr = 100;
let hrs_norm = 40;
let total_pago = 0;

if (ht > hrs_norm) {}
