// Funciones
function divisores(numero) {
    let total = 0;

    for(let i=1; i<=numero; i++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
}

// Funcion en forma de variable constante
const divisoresV2 = function(numero) {
    let total = 0;

    for(let i=1; i<=numero; i++) {
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;
};

// Funciones Flecha, sirve para hacer las funciones mas compactas
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
    
    // Imprimir
    console.log("Divisores: ",divisores(numero));
}




// Llamar Funcion
// console.log("Divisores: ",divisores(33));
// console.log("DivisoresV2: ",divisoresV2(33));
// console.log("DivisoresV3: ",divisoresV3(33));
// console.log("DivisoresV3: ",divisores(numero));