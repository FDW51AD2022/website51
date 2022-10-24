function suma(numero, numero2){
    let total = 0;
    total = numero + numero2
    return total;
}

const resta = function(numero){
    let total = 0;
    for(let i=1; i <=numero;i++){
        if(numero + i == 0){
            total ++;
        }
    }
    return total;
};

const multiplicación = function(numero){
    let total = 0;
    for(let i=1; i <=numero;i++){
        if(numero + i == 0){
            total ++;
        }
    }
    return total;
};

const division = function(numero){
    let total = 0;
    for(let i=1; i <=numero;i++){
        if(numero + i == 0){
            total ++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("num").value);
    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = document.getElementById("resul");

    resultado.value = suma(numero);
}


console.log("suma", suma(numero));