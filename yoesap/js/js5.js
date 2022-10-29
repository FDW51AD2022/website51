/* Funciones js */

/* funcion divisores */

function divisores(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
}

/* llamar a la funcion */



/* declaracion de una funcion similar a una variable */
/* definir una funcion anonima */
const divisoresV2 = function(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* funciones flecha */

const dividoresV3 = (numero) => {
    let total = 0;
    for(let i=1; i<=numero;i++){
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("num").value);

    let resultado = document.getElementById("resul");

    resultado.value = divisores(numero);
}




/*console.log("divisores",divisores(33));
console.log("divisoresV2",divisoresV2(33));
console.log("divisoresV3",dividoresV3(33));*/