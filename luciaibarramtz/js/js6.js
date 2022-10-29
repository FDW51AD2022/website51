// -----Programa Cambiar Imagen-----
function cambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("img_1").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) {
        imagen.src = "./recursos/paln.jpg";
        imagen.width = "400";
    } else if (num_imagen == 2) {
        imagen.src = "./recursos/tecate-live.jpg";
        imagen.width = "400";
    } else if (num_imagen == 3) {
        imagen.src = "./recursos/machaca.jpg";
        imagen.width = "400";
    } else if (num_imagen == 4) {
        imagen.src = "./recursos/wish.jpg";
        imagen.width = "400";
    } else {
        imagen.src = "./recursos/encabritados.jpg";
        imagen.width = "400";
    }
}