
/* Funciones */
function divisores(numero) {
    let total = 0;

    for(let i=1; i<=numero; i++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
} 
/* Funcion en forma de variable constante */
const divisoresV2 = function(numero) {
    let total = 0;
    for(let i=1; i<=numero; i++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
};
/* Funciones Flecha, sirven para hacer las funciones mas compactas */
const divisoresV3 = numero => {
    let total = 0;
    for(let i=1; i<=numero; i++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
};
function calcular() {
    let numero = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
    /*Imprimir Resultado*/
    console.log("Divisores: ",divisores(numero));
}

/* Llamar la función
console.log("divisores",divisores(33));
console.log("divisores",divisores(33));
console.log("divisores V2",divisores(33));
console.log("divisores V3",divisores(33)); */
