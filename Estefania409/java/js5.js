
function opera(numero1, numero2, operacion){
    let resultado = 0;
    switch(operacion){
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
      } return resultado;
};

function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);

    let operacion = document.getElementById("op").value;
    
    let resultado = document.getElementById("resul");
    resultado.value = opera(numero1, numero2, operacion);
}



