/* funciones */

function divisores (numero){
    let total = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i== 0){
            total++;
        }
    }
    return total;
}
const divisoresv2 = function(numero){
    let total = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i== 0){
            total++;
        }
    }
    return total;
}

    /* llamar la funcion */
console.log("divisores",divisores(33));
console.log("divisoresv2",divisoresv2(33));
console.log("divisoresv3",divisoresv3(33));
 
/*funcion de flecha*/
const divisoresv3 = (numero) => {
    let total= 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total ++;
        }
    }
    return total;  
};

let numero = document.getElementById("num")
.value);

let resultado =
document.getElementById("result");

resultado.value = divisores(numero);

console.log(numero);


