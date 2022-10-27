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

function imagenes(){
    let imagen = parseInt(document.getElementById("imagen").value);
    let cambiar = document.getElementById("cambiar");

    if (imagen == 1){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/namjoon.jpg" alt="">';
    }
    else if (imagen == 2){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/jin.jpg" alt="">';
    }
    else if (imagen == 3){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/yoongi.jpg" alt="">';
    }
    else if (imagen == 4){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/hobi.jpg" alt="">';
    }
    else if (imagen == 5){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/jimin.jpg" alt="">';
    }
    else if (imagen == 6){
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/tae.jpg" alt="">';
    }
    else{
        cambiar.innerHTML = '<img src="Evidencia2/Recursos/jeikei.jpg" alt="">';}
}

function tabla() {
    let multi = document.getElementById("multi").value;
    multi = parseInt(multi);

    for (var i = 1; i <= 10; i++) {
        multiplicacion = multi * i;
        document.write(multi + "x" + i + "=" + multiplicacion + "<br>");
    }
}