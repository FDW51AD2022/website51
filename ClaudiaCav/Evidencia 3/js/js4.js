/* Funciones */
function divisores(numero){
    let total = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i == 0 ){
            total++;
        }
    }
    return total;
}


/* Constante */
const divisoresV2 = function(numero){
    let total = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i == 0 ){
            total++;
        }
    }
    return total;
};

/* Funciones flecha  */
const divisoresv3 = numero => {
    let total = 0;
    for(let i=1; i<=numero; i++){
        if(numero % i == 0 ){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero =  parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}

/* console.log(numero);
*/

/* Llamar la funcion */
console.log("Numero de divisores: ",divisores(10));
console.log("Numero de divisores: ", divisoresV2(10));
console.log("Numero de divisores: ", divisoresv3(10));