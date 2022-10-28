function Imagenes() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg";
            break;
        case 2:
            imagen.src = "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-1024x681.jpg";
            break;
        case 3:
            imagen.src = "https://images4.alphacoders.com/936/936378.jpg";
            break;
        case 4:
            imagen.src = "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg";
            break;
        case 5:
            imagen.src = "https://wallpaper.dog/large/10883325.jpg";
            break;
        default:
            break;
    }
}