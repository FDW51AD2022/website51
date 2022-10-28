function verImagen(){
    let numero_imagen = document.getElementById("num_img").value;
    console.log(numero_imagen);

    let imagen_resultado = document.querySelector(".imagen_container");
    
    if (numero_imagen == "Alejandro Magno"){
        imagen_resultado.innerHTML = '<img src="..//Javascript/Recursos/Alejandro Magno.jpeg" alt="Imagen1" class="imagen_seleccionada">';
    } else if (numero_imagen == "Atila"){
        imagen_resultado.innerHTML = '<img src="..//Javascript/Recursos/Atila.jpg" alt="Imagen1" class="imagen_seleccionada">';
    } else if (numero_imagen == "Gengis Kan"){
        imagen_resultado.innerHTML = '<img src="..//Javascript/Recursos/Gengis Kan.jpeg" alt="Imagen1" class="imagen_seleccionada">';
    } else if (numero_imagen == "Napoleón Bonaparte"){
        imagen_resultado.innerHTML = '<img src="..//Javascript/Recursos/Napoleon Bonaparte.jpeg" alt="Imagen1" class="imagen_seleccionada">';
    } else if (numero_imagen == "Adolf Hitler"){
        imagen_resultado.innerHTML = '<img src="..//Javascript/Recursos/Adolf Hitler.jpg" alt="Imagen1" class="imagen_seleccionada">';
    }

    
}
