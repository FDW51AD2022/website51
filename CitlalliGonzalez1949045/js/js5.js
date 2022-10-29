/* Funciones */

function divisores(numero){
    let total = 0; 
    for(let i=1; i<= numero; i++){
        if(numero % i == 0) {
            total++;
        }
    }
    return total; 
}

/* definir una funcion anonima */
const divisoresV2 = function(numero){
    let total = 0; 
    for(let i=1; i<= numero; i++){
        if(numero % i == 0) {
            total++;
        }
    }
    return total;

};

const divisoresV = () => {};
/* => reemplaza a function */

const divisoresV3 = numero => {
    let total = 0; 
    for(let i=1; i<= numero; i++){
        if(numero % i == 0) {
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

/* console.log(numero); */

/* llamar la función */
console.log("divisoresV2",divisoresV2(33));
console.log("divisoresV3",divisoresV3(33));
/* llamar la función */
console.log("divisores",divisores(numero));