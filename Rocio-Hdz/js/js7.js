 function imagenes(){
    let imagen = parseInt(document.getElementById("imagen").value);
    let cambiar = document.getElementById("cambiar");

    if (imagen == 1){
        cambiar.src = '<img src="evidencia2/recursos/Bad_Bunny.png" alt="">';
    }
    else if (imagen == 2){
        cambiar.innerHTML = '<img src="evidencia2/recursos/Taylor_Swift.jpg" alt="">';
    }
    else if (imagen == 3){
        cambiar.innerHTML = '<img src="evidencia2/recursos/Billie_Eilish.jpg" alt="">';
    }
    else if (imagen == 4){
        cambiar.innerHTML = '<img src="evidencia2/recursos/Rosalia.jpg" alt="">';
    }
    else 
       if (imagen == 5){
           cambiar.innerHTML = '<img src="evidencia2/recursos/Shawn.jpg" alt="">';
    }
}
