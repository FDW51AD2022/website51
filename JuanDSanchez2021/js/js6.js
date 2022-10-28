// Funciones internas

// Funcion Ejercicio 1

function operaciones_logicas(numero1, numero2, operador){
    let total = 0;
    if (operador == '+' || operador == 'SUMA') {
        total = numero1 + numero2;
        return total
    }
    else if (operador == '-' || operador == 'RESTA') {
        total = numero1 - numero2;
        return total;
    }
    else if (operador == '*' || operador == 'MULTIPLICACION') {
        total = numero1 * numero2;
        return total;
    }
    else if (operador == '/' || operador == 'DIVISION') {
        total = numero1 / numero2;
        return total;
    }
    else {
        total = 'Operacion fallida, vuelva a intentarlo';
        return total;
    }
};

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

// Ejercicio 1

function calcular() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operador = (document.getElementById("ope").value);

    let resultado = (document.getElementById("resul"));
    
    resultado.value = operaciones_logicas(numero1, numero2, operador);
}