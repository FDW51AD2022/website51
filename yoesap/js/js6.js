/*funciones*/

function calculadora(numero1,numero2,ope){
    if(ope == "+") {
        let result=numero1+numero2
        return result;

    }
    else if (ope == "-"){
        let result=numero1-numero2
        return result;

    }
    else if (ope == "*"){
        let result=numero1*numero2
        return result;

    }
    else if(ope == "/"){
        let result=numero1/numero2
        return result;

    }
}


/* definimos una funcion anonima*/


function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);

    let numero2 = parseInt(document.getElementById("num2").value);
   
    let ope = document.getElementById("operacion").value;

    let resultado = document.getElementById("resul");
    resultado.value = calculadora(numero1,numero2,ope);
}

