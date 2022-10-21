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


/* IMAGENES */
function imagenes(){
    let imagen = parseInt(document.getElementById("imagen").value);
    let imagenes = document.getElementById("imagenes").value;

    if (imagen == 1){
        imagenes.src = "Evidencia2/Recursos/namjoon.jpg";
    }
    else if (imagen == 2){
        imagenes.src = "Evidencia2/Recursos/jin.jpg";
    }
    else if (imagen == 3){
        imagenes.src = "Evidencia2/Recursos/yoongi.jpg";
    }
    else if (imagen == 4){
        imagenes.src = "Evidencia2/Recursos/hobi.jpg";
    }
    else if (imagen == 5){
        imagenes.src = "Evidencia2/Recursos/jimin.jpg";
    }
    else if (imagen == 6){
        imagenes.src = "Evidencia2/Recursos/tae.jpg";
    }
    else{
        imagenes.src = "Evidencia2/Recursos/jk.jpg";
    }
}








