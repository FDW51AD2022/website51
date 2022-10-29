function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://cdn5.dibujos.net/dibujos/pintados/202009/numero-1-letras-y-numeros-numeros-11714504.jpg";
            break;
        case 2:
            imagen.src = "https://cdn5.dibujos.net/dibujos/pintados/201535/numero-2-letras-y-numeros-numeros-10128515.jpg";
            break;
        case 3:
            imagen.src = "https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_960_720.jpg";
            break;
        case 4:
            imagen.src = "https://static8.depositphotos.com/1010782/858/i/450/depositphotos_8581496-stock-photo-fire-numbers-4.jpg";
            break;
        case 5:
            imagen.src = "https://media.vandalsports.com/i/1706x960/8-2021/2021818175611_1.jpg.webp";
            break;
        default:
            imagen.src = "https://www.computerhope.com/jargon/e/error.png";
            break;
    }
}