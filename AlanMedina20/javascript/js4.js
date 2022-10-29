/* funciones*/
/*25*/
function divisores(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
};
const divisoresV3 = function(numero){
    let total = 0;
    for (let i=1; i<=numero; i++){
        if(numero % i==0){
            total++;
        }
    }
    return total;
};

function calcular(){
let numero = parseInt(document.getElementById("num").value);


let resultado = document.getElementById("resul");
resultado.value = divisores(numero);


/*llamar la funcion*/
console.log("divisores",divisores(numero));
}

