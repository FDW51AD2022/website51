function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://i.blogs.es/f4e815/como-hacer-boneless-1-/1366_2000.jpg";
            break;
        case 2:
            imagen.src = "https://sibeti.com/wp-content/uploads/2021/11/tiras-de-pechuga-de-pollo.jpg";
            break;
        case 3:
            imagen.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
            break;
        case 4:
            imagen.src = "https://blogthinkbig.com/wp-content/uploads/sites/4/2019/03/Python-Example-Logo-e1555498232969.jpg?resize=450%2C220";
            break;
        case 5:
            imagen.src = "https://cdn.culturagenial.com/es/imagenes/dark-logo-cke.jpg";
            break;
        default:
            break;
    }
}