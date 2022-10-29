function imagenes(){

    let imagen = document.getElementById("imagen1").src 
    let valorRecibido = document.getElementById("num").value

    if (valorRecibido == "1") {
        imagen = "https://cdn-icons-png.flaticon.com/512/61/61496.png";
    }
    else if (valorRecibido == "2"){
        imagen = "https://w7.pngwing.com/pngs/876/25/png-transparent-united-states-graphy-clothing-logo-half-circle-text-trademark-photography.png";
    }
    else if (valorRecibido == "3"){
        imagen = "https://e7.pngegg.com/pngimages/867/468/png-clipart-number-3-miscellaneous-text.png";
    }
    else if(valorRecibido == "4"){
        imagen = "https://w7.pngwing.com/pngs/615/826/png-transparent-arrow-encapsulated-postscript-computer-icons-button-arrow-logo-video-player-number-4.png";
    }
    else if(valorRecibido == "5"){
        imagen = "https://e7.pngegg.com/pngimages/908/325/png-clipart-brand-logo-circle-number-5-text-number-thumbnail.png";
    } 
    return document.getElementById("imagen1").src = imagen;
}

