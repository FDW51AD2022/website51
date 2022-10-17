
/* Funciones*/

Function divisores(numero);{
    let total = 0;
    For(let i=1; i<=numero;i++){
        if(numero % i == 0){
            total++;
         }
    }
    return total;
};

const divisoresV2 = numero => {
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

Function calcular(){
    let numero =parseInt
    (document.getElementById("num")
    .value);

 let resultado =
 document.getElementById("resul");

 resultado.value = divisores(numero);
 
}
console.log(numero)


let numero = parseint(document.getElementById("num").value);

/* Llamar la función */
console.log("divisores",divisores(33));



/* Llamar la función */
console.log("divisores",divisores(33));
console.log("divisores V2",divisores(33));
console.log("divisores V3",divisores(33));
