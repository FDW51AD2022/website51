function Imagenes() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://serviciopad.es/wp-content/uploads/estudio-revela-que-estadounidenses-gastan-cada-vez-mas-en-videojuegos-02-e1445888221548.jpeg";
            break;
        case 2:
            imagen.src = "https://www.eluniverso.com/resizer/JmanqxXU51w1Bsa0X0Nd9iz1cSM=/660x371/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZYX6AFU7OBH7PBXUTCXQEICJ7E.jpg";
            break;
        case 3:
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1zVM8Tt4Z-lGW5W95Mrq_mFV3YFcUQuSCw&usqp=CAU";
            break;
        case 4:
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvVS85QQkgzhVIIQxbsJJ1nCkHMefMFmuhA&usqp=CAU";
            break;
        case 5:
            imagen.src = "https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg";
            break;
        default:
            break;
    }
}




