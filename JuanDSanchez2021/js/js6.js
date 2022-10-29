/* CALCULADORA */
function calcular() {
    let num = parseInt(document.getElementById("num").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resul= document.getElementById("resul");

    let total = 0;
    
    if (operacion == "+") {
        total = num + num2;

    } 
    else if (operacion == "-"){
        total = num - num2;
    }
    else if (operacion == "x"){
        total = num * num2;
    } 
    else {
        total = num / num2;
    }

    resul.value = total;
}

// Funcion Ejercicio 2

function procesar_img(){
    let n_imagen = parseInt(document.getElementById("n_img").value);
    let imagen = document.getElementById('img');
    if (n_imagen == 1) {
        imagen.src="https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/E1Hw52cQH3HA6swkk1mcvbjc.png";
        return imagen;
    }
    else if (n_imagen == 2) {
        imagen.src="https://images3.alphacoders.com/857/857335.jpg";
        return imagen;
    }
    else if (n_imagen == 3) {
        imagen.src="https://s0.smartresize.com/wallpaper/391/556/HD-wallpaper-miles-morales-into-the-spider-verse-miles-morales-ps5-spider-man.jpg";
        return imagen;
    }
    else if (n_imagen == 4) {
        imagen.src="https://p4.wallpaperbetter.com/wallpaper/935/86/550/cartoon-pictures-1920x1080-wallpaper-preview.jpg";
        return imagen;
    }
    else if (n_imagen == 5) {
        imagen.src="https://images.alphacoders.com/986/986566.jpg";
        return imagen;
    }
    else {
        Respuesta = 'Solo se acepta hasta el 5, vuelva a intentarlo';
        return imagen;
    }
};

// Funciones externas

// Ejercicio 3

function tabla() {
    let multi = document.getElementById("multi").value;
    multi = parseInt(multi);

    for (var i = 1; i <= 10; i++) {
        multiplicacion = multi * i;
        document.write(multi + "x" + i + "=" + multiplicacion + "<br>");
    }
}