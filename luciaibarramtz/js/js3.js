// Cantidad de numeros primos
let cant_numeros = 4;

// Arreglo para el numero de divisores
let num_divisores = [];

// Arreglo para imprimir numeros perfectos
let numeros_perfectos = [];

// Variable de control que se ira iterando hasta llegar a n numeros
let numero = 1;

// Ciclo para cantidad de numeros
while (true) {

    // Ciclo para divisores
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero%divisor == 0) {
            num_divisores.push(divisor);
        }
    }

    // Se suman los numeros del array
    let sum = 0;
    for (let index = 0; index < num_divisores.length; index++) {
        sum = num_divisores[index] + sum;
    }

    if (sum == numero) {
        // console.log(numeros_perfectos);
        numeros_perfectos.push(numero);
    }

    if (numeros_perfectos.length == cant_numeros) {
        break
    }
    // Se limpia el arreglo
    num_divisores = [];

    // Se itera el numero 
    numero = numero + 1;
}
console.log("La cantidad de numeros perfectos solicitados fue de: " + cant_numeros + " y son los siguientes")
console.log(numeros_perfectos);
// document.write("<h2>" + numeros_perfectos + "</h2>");
document.write(`<h2> ${numeros_perfectos} </h2>`);
