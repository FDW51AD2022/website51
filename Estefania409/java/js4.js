/*FUNCIONES */
/*FUNCIONES*/
function divisores(numero){ 
    let total =0;
    for(let i =1; i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

const divisoresV2=function(numero){ 
    let total =0;
    for(let i =1;i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

const divisoresV3=function(numero){ 
    let total =0;
    for(let i =1;i<=numero;i++){
        if(numero % i==0){total++;}
    }
    return total;
};

/*calcular variables y buscarñas  en el documento*/
function calcular(){
let numero =parseInt(document.getElementById("num").value);
let resultado=document.getElementById("resul");
resultado.value=divisores(numero);

/*LLAMAR LA FUNCION*/
console.log("divisores",divisores(numero));
} 
