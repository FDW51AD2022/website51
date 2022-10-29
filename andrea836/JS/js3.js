let numero = prompt("Ingresa un numero");
while(isNaN(numero) || numero ==0){
    numero = prompt("ingresa un numero");
}
let numeros = [];
for(i=0; i < numero; i++){
    if (numero % i===0){
        numeros.push(parseInt(i));
    }
}
let suma=0;
numeros.forEach(function(numero){
    suma+=numero;
})
console.log(parseInt(suma))
/**********************************/

let tomaini = Number(prompt("Hora de la primera toma"));
let frecuencia = Number(prompt("Frecuencia de la toma"));
contador = 0
let hora = tomaini;
while(hora<=23){
    contador = contador + 1
    console.log("Hora de toma ", contador,": ", hora,"hrs");
    hora = hora + frecuencia;
}

