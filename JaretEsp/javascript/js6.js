function Mostrar_Img() {
    let num_imagen  = parseInt(document.getElementById("imagen1").value);
    let imagen = document.getElementById('img');
    

    if (num_imagen == 1) {
        imagen.src = "javascript/img/1.jfif";
    } else if (num_imagen == 2) {
        imagen.src = "javascript/img/2.jfif";
    } else if (num_imagen == 3) {
        imagen.src = "javascript/img/3.jfif";
    } else if (num_imagen == 4) {
        imagen.src = "javascript/img/4.jfif";
    } else {
        imagen.src = "javascript/img/5.jfif";
    }
}