/* funciones*/

function divisores(numero){
    let total=0;
    for(let i=1; i<=numero;i ++){
        if (numero % i==0){
            total ++;

        }
    }
    return total;
};




const divisoresv2 = function(numero){
        let total=0;
        for(let i=1; i<=numero;i ++){
            if (numero % i==0){
                total ++;
    
            }
        }
        return total;
};

const divisoresv3 = numero => {
    let total=0;
    for(let i=1; i<=numero;i ++){
        if (numero % i==0){
            total ++;

        }
    }
    return total;
};

function calcular(){
    let numero= parseInt(document.getElementById("num").value);
    console.log("divisores",divisores(numero));
    let resultado= document.getElementById("resul");
    resultado.value= divisores(numero);
}



/*console.log(perfectos(4));*/

/* llamar funcion
console.log("divisores",divisores(numero));*/
/*console.log("divisores v2",divisoresv2(33));
console.log("divisores v3",divisoresv3(33));*/

