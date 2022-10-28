function calculadora(numero1, numero2, ope) {
  if (ope == "+") {
    let result = numero1 + numero2;
    return result;
  } else if (ope == "-") {
    let result = numero1 - numero2;
    return result;
  } else if (ope == "*") {
    let result = numero1 * numero2;
    return result;
  } else if (ope == "/") {
    let result = numero1 / numero2;
    return result;
  }
}

function calcular() {
  let numero1 = parseInt(document.getElementById("num").value);

  let numero2 = parseInt(document.getElementById("num2").value);

  let ope = document.getElementById("operacion").value;

  let resultado = document.getElementById("resul");
  resultado.value = calculadora(numero1, numero2, ope);
}
