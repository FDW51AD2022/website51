console.log("Hola javascript");
console.warn("Mensaje");
console.error("FATAL ERROR");
console.log("Tipo de 34:" + typeof 34 + ".");
console.log( `Tipo de 34: ${ typeof 34}.`);
console.log(`Ejemplo con operador logico ${5 > 2 || 3 < 1}`);
console.log(`Ejemplo con operador booleano ${!5 > 2 || 3 < 1}`);
console.log(10 < 2 ? "Parte verdadera":"Parte falsa");
// codigo que representa el console anterior:
// if 10 < 2:
//      parte verdadera
// else:
//      parte falsa
let temp=1;
let mensaje;
mensaje=temp < 10 ? "Llevar chamarra" : "No llevar chamarra";
console.log(mensaje);

const SEMESTRES=9;

SEMESTRES=3;

let alumnos =["mario","luis"];

console.log(alumns);
console.log("Totl elementos", alumnos.length);
console.log("Primer elemento",alumnos[0]);
console.log("Ultimo elemento",alumnos[-1]);
console.log("Ultimo elemento",alumnos[alumnos.length-1]);
console.log("Tipo de dato",typeof alumnos);

let grupo51={ 
    "nombre": grupo51,
    "semestre": 5,
    "carrer":"LTI", 
    "alumnos":alumnos
};
class persona {

}

console.log("Nombre:",grupo51["nombre"],grupo51,nombre);
console.log("Primer alumno", grupo51.alumnos["alumnos"^[0]]);

document.write("<marquee>mensaje</marquee>")
document.write("<ul><li>Elementos</li></ul>")

/*Secuencias condicionales*/
/*EJEMPLO IF*/

let calif=45;
if(calif>=95 && calif<=100){ 
    console.log("Excelente");

}else {
    console.log("no excelente");
}

/*FUNCIONES*/
function divisores(numero){ 
    let total =0;
    for(let i =1;i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

const divisoresV2=function(numero){ 
    let total =0;
    for(let i =1;i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

const divisoresV3=(numero)=>{ 
    let total =0;
    for(let i =1;i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

/*calcular variables y buscarñas  en el documento*/
function calcular(){
let numero =parseInt(document.getElementById("num").value);
let resultado=document.getElementById("resul");
resultado.value=divisores(numero);

/*LLAMAR LA FUNCION*/
console.log("divisores",divisores(numero));
} 
