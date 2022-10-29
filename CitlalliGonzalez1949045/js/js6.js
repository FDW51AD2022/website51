function operaciones(numero, numero2, operacion){
    let total = 0;
    if (operacion == "+") {
        total=numero+numero2
        return total;
    }
    else if (operacion == "-"){
        total=numero-numero2
        return total;
    }
    else if (operacion == "*"){
        total=numero*numero2
        return total;
    }
    else if(operacion == "/"){
        total=numero/numero2
        return total;
    }
}

function calcular(){
    let numero = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = (document.getElementById("operacion").value);
    let resultado = document.getElementById("resul");
    resultado.value = operaciones(numero, numero2, operacion);
}