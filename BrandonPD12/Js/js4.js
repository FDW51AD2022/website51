/*funciones*/

/*22*/
function divisores(numeros){
    let total = 0;
    for (let i=1; i<=numeros;i++){
        if (numeros % i == 0){
            total++;
        }
    }
    return total;
}

const divisores2 = function(numeros){
    let total = 0;
    for (let i=1; i<=numeros;i++){
        if (numeros % i == 0){
            total++;
        }
    }
    return total;
};

const divisores3 = numeros => {
    let total = 0;
    for (let i=1; i<=numeros;i++){
        if (numeros % i == 0){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("num").value);
    console.log("divisores ", divisores(numero));

    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero) 
};



/*llamar la funciom */
console.log("divisores ", divisores(22));
console.log("divisores v2", divisores2(22));
console.log("divisores v3", divisores2(22));
