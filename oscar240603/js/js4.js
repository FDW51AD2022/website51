/* FUNCIONES */

/* 25 */

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
}

const divisoresV3 = numero => {
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

console.log(perfectos(4));

function calcular() {
    let numero = parseInt(document.getElementById("num").value);

    let resultado = document.getElementById("resul");

    resultado.value = divisores(numero);
    /*console.log("divisores" , divisores(numero));*/
}



/* LLAMAR LA FUNCION*/

/*console.log("divisoresV2" , divisoresV2(33));
console.log("divisoresV3" , divisoresV3(33));*/