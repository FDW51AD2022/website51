
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
        cambiar.innerHTML = '<img src="evidencia2/recursos/bts 1.jpg" alt="">';
    }
    else if (imagen == 2){
        cambiar.innerHTML = '<img src="evidencia2/recursos/bts 2.jpg" alt="">';
    }
    else if (imagen == 3){
        cambiar.innerHTML = '<img src="evidencia2/recursos/bts 3.jpg" alt="">';
    }
    else if (imagen == 4){
        cambiar.innerHTML = '<img src="evidencia2/recursos/bts 4.jpg" alt="">';
    }
    else if (imagen == 5){
        cambiar.innerHTML = '<img src="evidencia2/recursos/bts 5.jpg" alt="">';
    }
    
}

function tabla() {
    let multi = document.getElementById("multi").value;
    multi = parseInt(multi);

    for (var i = 1; i <= 10; i++) {
        multiplicacion = multi * i;
        document.write(multi + "x" + i + "=" + multiplicacion + "<br>");
    }
}