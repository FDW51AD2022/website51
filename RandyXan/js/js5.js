function calcular() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = (document.getElementById("operacion").value);
    let resultado = document.getElementById("resul");
    switch (operacion) {
        case "+":
            resultado.value = (numero1+numero2);
            break;
        case "-":
            resultado.value = (numero1-numero2);
            break;
        case "*":
            resultado.value = (numero1*numero2);
            break;
        case "/":
            resultado.value = (numero1/numero2);
            break;
        default:
            resultado.value = ("Escoge bien tu opcion");
            break;
    }
}