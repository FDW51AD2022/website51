/* Escribir un programa en javasript que permita imprimir en pantalla n numeros perfectos.
    El usuario podra indicar cuantos numeros desea ver.
    Un numero perfecto es aquel que la suma de sus divisores excepto el mismo da como resultado el mismo numero.
    Ejemplo: para el numero 6 sus divisores son 1,2,3,6. Sumando todos excepto el 6: 1+2+3=6, 6 es perfecto. */

    let cant_numeros = 4;
    let num_divisores = [];
    let num_perfectos = [];
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
            num_perfectos.push(numero);
        }
        if (num_perfectos.length == cant_numeros) {
            break
        }
        num_divisores = [];
     
        numero = numero + 1;
    }
    console.log("Se solicitaron: " + cant_numeros + "numeros perfectos, por lo que serían:")
    console.log(num_perfectos);
    document.write(`<h2> ${num_perfectos} </h2>`);