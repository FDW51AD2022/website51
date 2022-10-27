// Funciones 
function divisores(numero){
    let total = 0;
    for (let i = 0; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

// Función anónima 
const divisoresV2 = function(numero){
    let total = 0;
    for (let i = 0; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

const divisoresV3 = numero => {
    let total = 0;
    for (let i = 0; i<=numero; i++){
        if(numero % i == 0){
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

// Llamar a la función
console.log("divisores", divisores(25));
console.log(divisoresV2(20));
console.log(divisoresV3(30));