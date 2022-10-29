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


 function   Ver(img,imagen){
 
    switch(img){
        case 1:
            imagen.src= "rcs.j5/Img1.jpg";
              break;
            case 2:
               imagen.src= "rcs.j5/Img2.jpg";
               break;
            case 3:
               imagen.src="rcs.j5/Img3.jpg";
               break;
            case 4:
               imagen.scr="rcs.j5/Img4.jpg";
               break;
            case 5:
               imagen.scr="rcs.j5/Img5.jpg";
            break;

    }  
 }

 function VerImagen(){
    let img = parseInt(document.getElementById("img").value);
    let imagen = document.getElementById("imagen");
    console.log(img);
    VerImagen(img,imagen);
 };



 let genera = document.getElementById("genera")
            let numero = document.getElementById("NumTabla")
            let lienzo = document.getElementById("Tab")

            genera.addEventListener("click", () => {
               for(let i = 1; i<=10; i++) {
                  lienzo.innerHTML += `${numero.value} * ${i} = ${numero.value*i} <br />`
               }


        })