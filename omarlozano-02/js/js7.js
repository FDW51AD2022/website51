function cambiarImagen() {
  let num_imagen = parseInt(document.getElementById("imagen").value);
  let imagen = document.getElementById("img");

  if (num_imagen == 1) {
    imagen.src = "recursos/img/consulta.jpg";
  } else if (num_imagen == 2) {
    imagen.src = "recursos/img/en_crisis.jpg";
  } else if (num_imagen == 3) {
    imagen.src = "recursos/img/tienda.jpg";
  } else if (num_imagen == 4) {
    imagen.src = "recursos/img/vacunandoPerrito.jpg";
  } else {
    imagen.src = "recursos/img/vacunas.jpg";
  }
}
