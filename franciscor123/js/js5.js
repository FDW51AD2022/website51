/* funciones*/

function divisores(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
    
}
const divisoresV2 = function(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

const divisoresV3 = numero => {
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};
function calcular(){


let numero = parseInt( document.getElementById("num").value);
/* llamar la funcion */

let resultado = document.getElementById("resul");

resultado.value = divisores(numero);

console.log("divisores",divisores(numero));
}
console.log("divisores",divisores(33));
console.log("divisores V2",divisoresV2(33));
console.log("divisores V3",divisoresV3(33));






