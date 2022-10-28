let imagen1 = "img/1.jfif"
let imagen2 = "img/2.jfif"
let imagen3 = "img/3.jfif"
let imagen4 = "img/4.jfif"
let imagen5 = "img/5.jfif"

function mostrar(num){
    switch (key) {
        case 1:
            console.log(imagen1)
            break;
        case 2:
            console.log(imagen2)
            break;
        case 3:
            console.log(imagen3)
            break;
        case 4:
            console.log(imagen4)
            break;
        case 5:
            console.log(imagen5)
            break;
        default:
            console.log("No se encontro la imagen")
            break;
    }
}


function seleccion(){
    let num = parseInt(document.getElementById("num").value);

    let resultado = document.getElementById("imagen");

    resultado.value = mostrar(num);
}