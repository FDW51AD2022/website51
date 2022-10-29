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


 function Ver(img,imagen){
    switch(img){
         case 1:
          imagen.src= "rcs.j5/img1.jpg";
         break;
         case 2:
            imagen.src= "rcs.j5/img2.jpg";
         break;
         case 3:
            imagen.src="rcs.j5/img3.jpg";
         break;
         case 4:
            imagen.scr="rcs.j5/img4.jpg";
         break;
         case 5:
            imagen.scr="rcs.j5/img5.jpg";
         break;

   }  
};


function VerImagen(){
     let img = parseInt(document.getElementById("img").value);
     let imagen = document.getElementById("imagen");
     console.log(img);
     Ver(img,imagen);
}

function CalcularTabla() {
   let numero       = parseInt(document.getElementById("numtab").value);
   let lista_tabla  = document.getElementById("LasTablas");
   lista_tabla.innerHTML = "";
   for (let index = 1; index <= 10; index++) {
       lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
   }
}