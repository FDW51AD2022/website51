function calculadora(num1, num2, Operacion){
    if (Operacion == "suma") {
        let suma = num1+num2
        return suma
    } else if (Operacion == "resta") {
        let resta = num1-num2
        return resta
    } else if (Operacion == "division") {
        let division = num1/num2
        return division
    } else if (Operacion == "multiplicacion") {
        let multiplicacion = num1 * num2
        return multiplicacion
    } else {
        console.log(vacio);
    }
}




function calcular(){
    let vacio = "Valor no valido"
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let Operacion = document.getElementById("Operacion").value;


    let resultado = document.getElementById("resul");

    resultado.value = calculadora(num1, num2, Operacion);
}