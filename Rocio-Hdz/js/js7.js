function cambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("imagen").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) {
        imagen.src = "evidencia2/recursos/Bad_Bunny.png";
    } else if (num_imagen == 2) {
        imagen.src = "evidencia2/recursos/Taylor_Swift.jpg";
    } else if (num_imagen == 3) {
        imagen.src = "evidencia2/recursos/Billie_Eilish.jpg";
    } else if (num_imagen == 4) {
        imagen.src = "evidencia2/recursos/Rosalia.jpg";
    } else {
        imagen.src = "evidencia2/recursos/Shawn.jpg";
    }
}