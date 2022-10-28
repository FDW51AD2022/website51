let cant_numeros = 4;
let num_divisores = [];
let numeros_perfectos = [];
let numero = 1;
while (true) {
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero%divisor == 0) {
            num_divisores.push(divisor);
        }
    }

    let sum = 0;
    for (let index = 0; index < num_divisores.length; index++) {
        sum = num_divisores[index] + sum;
    }

    if (sum == numero) {
        
        numeros_perfectos.push(numero);
    }

    if (numeros_perfectos.length == cant_numeros) {
        break
    }
    
    num_divisores = [];

  
    numero = numero + 1;
}
console.log("Numero perfectos:  " + cant_numeros + " son: ")
console.log(numeros_perfectos);

document.write(`<h2> ${numeros_perfectos} </h2>`);
