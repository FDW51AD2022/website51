function operacion(numero1,numero2,operacion){
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

    }  return resultado;
 };

 
 function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);

    let op= document.getElementById("op").value;

    let resultado= document.getElementById("resul");
    resultado.value = operacion(numero1, numero2, op);

 };


 function imagen(imagen){
 
    switch(imagen){
        case 1:
            imagen.src= "rcs.j5"
            break;
            case "js6Img/Img2":
            resultado = Imagen2;
            break;
            case "js6Img/Img3":
            resultado = Imagen3;
            break;
            case "js6Img/Img4":
            resultado = Imagen4;
            break;
            case "js6Img/Img5":
            resultado = Imagen5;
            break;

    }  return resultado;
 };

 function imagen(){
    let Imagen1 = parseInt(document.getElementById("Img1").value);
    let Imagen2 = parseInt(document.getElementById("Img2").value);
    let Imagen3 = parseInt(document.getElementById("Img3").value);
    let Imagen4 = parseInt(document.getElementById("Img4").value);
    let Imagen5 = parseInt(document.getElementById("Img5").value);

    let imagen= document.getElementById("img").value;

    let = document.getElementById("img");
    resultado.value = imagen(Imagen1,Imagen2,Imagen3,Imagen4,Imagen5);