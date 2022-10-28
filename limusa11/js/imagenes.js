/*Alerta*/
window.alert("   Ingresa un número del 1 al 5:   ");

/*imagenes*/
function Imagenes() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://i.pinimg.com/originals/d5/e3/03/d5e3035a762efd89d5ec423a35d9d15a.gif";
            break;
        case 2:
            imagen.src = "https://media.tenor.com/7bAOdcsuSuwAAAAC/rain-anime.gif";
            break;
        case 3:
            imagen.src = "https://media.tenor.com/fJWeP_yZ7cQAAAAC/aesthetic-grunge.gif";
            break;
        case 4:
            imagen.src = "https://media.tenor.com/Zy5k7UUFVtsAAAAC/aesthetic.gif";
            break;
        case 5:
            imagen.src = 'https://i.pinimg.com/originals/cb/7f/9f/cb7f9f0eabd9a95fbb5257fce58583d5.gif';
            break;
        default:
            break;
    }
}
