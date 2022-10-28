function Ver(img,imagen){
    switch(img){
        case 1:
          imagen.src="recursos/1.avif";
          break;
        case 2:
            imagen.src="recursos/2.jpg";
            break;
        case 3:
            imagen.src="recursos/3.jpg";
          break;
        case 4:
            imagen.src="recursos/4.jpg";
          break;
        case 5:
            imagen.src="recursos/5.jpg";
          break;
      }
};

function VerImagen(){
    let img = parseInt(document.getElementById("img").value);
    let imagen = document.getElementById("imagen");
    console.log(img);
    Ver(img,imagen);
}
