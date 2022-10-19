/*funciones*/ /*%=division*/ 
function divisores(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

/*Definir una funcion anonima*/
const divisioresV2 = function(numero){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};


/*Declaracion de funciones flecha*/
const divisioresV3 = numero =>{
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

/*console.log(perfectos(4));*/

function calcular(){
    let numero = parseInt(document.getElementById("num").value);

    let resultado = document.getElementById("resul");

    resultado.value = divisores(numero);
}
/*Llamar la función, antes estaba esto aqui pero se sustituyo con resultado.value.
console.log("divisiores",divisores(numero));*/

/*Llamar la función*/
/*console.log("divisioresV2",divisioresV2(33));
console.log("divisioresV3",divisioresV2(33));*/