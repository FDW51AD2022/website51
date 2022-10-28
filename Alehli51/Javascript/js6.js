function imagen(imagen){
 
    switch(imagen){
        case "js6Img/Img1":
            resultado = Imagen1;
            <img src="js6Img/Img1.jpg" alt=""></img>
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
 }

 
 function imagen(){
    let Imagen1 = parseInt(document.getElementById("Img1").value);
    let Imagen2 = parseInt(document.getElementById("Img2").value);
    let Imagen3 = parseInt(document.getElementById("Img3").value);
    let Imagen4 = parseInt(document.getElementById("Img4").value);
    let Imagen5 = parseInt(document.getElementById("Img5").value);

    let imagen= document.getElementById("img").value;

    let = document.getElementById("img");
    resultado.value = imagen(Imagen1,Imagen2,Imagen3,Imagen4,Imagen5);