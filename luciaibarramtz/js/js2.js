let alumnos = ["mario","luis"];

console.log(alumnos);
console.log("Total de elementos",
        alumnos.length);
console.log("Primer elemento",
alumnos[0]);

console.log("Ultimo elemento",
alumnos[-1]);

console.log("Ultimo elemnto",
alumnos[alumnos.length-1]);

console.log("Tipo de dato",
typeof alumnos);

let grupo51 = {
    "nombre" : "grupo 51",
    "semestre":  5,
    "carrera" : "LTI",
    "alumnos" : alumnos
};

console.log ("Nombre:",
grupo51["nombre"],
grupo51.nombre);

console.log("Primer alumno",
grupo51,alumnos[0]);

//while se puede ejecutar 0 o 1 vez
//do se debe ejecutar minimo 1 vez
//Se utiliza cuando sabes la cantidad de veces que vas a repetir un ciclo
//en python para concatenar numeros es numero=numero+1
//en otros lenguajes es numero+=1
//tratar de usar let para todo
//constantes -- 



document.write("<marquee>mensaje</marquee");
document.write(`<ul>
                    <li>Elemento</li>
                </ul>`);



/*Ejemplo if*/

let calif = 95;
if (calif >= 95 && calif<=100) {
    console.log("Excelente");
} else {
    console.log("No excelente");
}

/*Ejemplo if*/
/*Escribir un programa en javascript que permita calcular el total a pagar a un empleado
solicitar numero de horas trabajadas y el pago por hora si el trabajador tiene horas extra
pagarlas al tripe
Se considere horas normales las primeras 40 hrs*/


let hora = 100;
let horasTrab = 42;
let jornada = 40;

let SueldoSinExtras = hora*jornada
let extras = (horasTrab-jornada)*300

if (horasTrab > 40) {
        console.log((hora*jornada)+extras)
        

} else {

    console.log(SueldoSinExtras)    
}