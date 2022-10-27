function Selector_de_waifus() {
    let numero_de_waifu  = parseInt(document.getElementById("Selector_de_imagenes").value);
    let imagen_waifu = document.getElementById('Seletor_de_imagen');

    if (numero_de_waifu == 1) {
        imagen_waifu.src = "imagenes/Komi.jpg";
    } else if (numero_de_waifu == 2) {
        imagen_waifu.src = "imagenes/marin.webp";
    } else if (numero_de_waifu == 3) {
        imagen_waifu.src = "imagenes/tohru.jpg";
    } else if (numero_de_waifu == 4) {
        imagen_waifu.src = "imagenes/Mplika.webp";
    } else if (numero_de_waifu == 5) {
        imagen_waifu.src = "imagenes/quetzacoalt.webp";
    } else if (numero_de_waifu == 6) {
        imagen_waifu.src = "imagenes/Yor1.jpg";
    } else {
        imagen_waifu.src = "imagenes/Rem.jpg";
    }
}