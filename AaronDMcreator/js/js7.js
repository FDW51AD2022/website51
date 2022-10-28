function verimagen(){
    let numero_imagen = document.getElementById("imgg").value;
    let imgrest = document.querySelector(".imgpos")

    if (numero_imagen == "1"){
        imgrest.innerHTML = '<img src="https://images.ole.com.ar/2022/10/16/XutztIM8B_340x340__1.jpg" alt="">'
    }
    else if (numero_imagen == "2"){
        imgrest.innerHTML = '<img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9122fe678f91a168/60dae5dec5c41538a1511544/a17843f391b2ba42cb1f6808aab1a5e47e69d888.jpg?format=jpg" alt="">'
    }
    else if (numero_imagen == "3"){
        imgrest.innerHTML = '<img src="https://i.ytimg.com/vi/JGDS4Apo58g/maxresdefault.jpg" alt="">'
    }
    else if(numero_imagen == "4"){
        imgrest.innerHTML = '<img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/30/16591778851898.jpg" alt="">'
    }
    else if(numero_imagen == "5"){
        imgrest.innerHTML = '<img src="https://saboryestilo.com.mx/wp-content/uploads/elementor/thumbs/masa-para-pizza-3-1-os3aa3ck56334eoe88d8hkem59xt1jziomikxlzx34.jpg" alt="">'
}
}