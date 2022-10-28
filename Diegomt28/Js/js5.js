/* funciones */

/* 25 */

function divisores (numero) {
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0) {
            total ++;
        }
   
}

const divisoresV2 = function(){
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0) {
            total ++;
        }

};

/* llamar la funcion */
console.log("divisores",divisores(33));
console.log(V2"divisores v2",divisoresV2 (33));


const divisoresV3 = numero => {
    let total = 0;
    for(let i=1; i<=numero;i++){
        if(numero % i == 0) {
            total ++;
        }
    }
    return total;0
};

function calcular (){
let numero = parseInt (document.getElementById("num").value);
console.log("divisores",divisores(33));

let resultado = document.getElementById("resul");

resultado.value = divisores(numero);
}

/* llamar la funcion */
console.log("divisores",divisores(33));
console.log(V2"divisores v2",divisoresV2 (33));
console.log(V2"divisores v3",divisoresV3 (33));