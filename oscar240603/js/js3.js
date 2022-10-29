let numero = prompt('ingresa un numero');

while(isNaN(numero) || numero == 0){

numero = prompt('ingresa un numero');

}

let numeros = [];

for(i = 0; i < numero; i++){

if(numero % i === 0){
  numeros.push(parseInt(i));

}

}
let suma = 0;

numeros.forEach(function(numero){

suma += numero;

})

console.log(parseInt(suma))
