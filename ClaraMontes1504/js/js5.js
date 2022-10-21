/* CALCULADORA */
function calcular() {
    let num = parseInt(document.getElementById("num").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resul= document.getElementById("resul");

    let total = 0;
    
    if (operacion == "+") {
        total = num + num2;

    } 
    else if (operacion == "-"){
        total = num - num2;
    }
    else if (operacion == "x"){
        total = num * num2;
    } 
    else {
        total = num / num2;
    }

    resul.value = total;
}










