function div1(numero){
    let total = 0;
    for (let i = 0; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

const div2 = function(numero){
    let total = 0;
    for (let i = 0; i<=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

const div3 = numero => {
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
    resultado.value = div1(numero);

    console.log(numero);

}

console.log("divisores", div1(25));
console.log(div2(20));
console.log(div3(30));