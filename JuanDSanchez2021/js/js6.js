/* CALCULADORA */
function funcionOperaciones(numero1, numero2, operador){
    let total = 0;
    if (operador == '+' || operador == 'suma') {
        total = numero1 + numero2;
        return total
    }
    else if (operador == '-' || operador == 'resta') {
        total = numero1 - numero2;
        return total;
    }
    else if (operador == '*' || operador == 'multiplicacion') {
        total = numero1 * numero2;
        return total;
    }
    else if (operador == '/' || operador == 'division') {
        total = numero1 / numero2;
        return total;
    }
    else {
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

function funcionCalculo() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operador = (document.getElementById("ope").value);

    let resultado = (document.getElementById("resul"));
    resultado.value = funcionOperaciones(numero1, numero2, operador);
}

function tablas(){
    let actTabla = parseInt(document.getElementById("resul_Tabla").value);
    if (actTabla < 1 ||actTabla> 10) {
        return Respuesta_tabla;
    }
    document.write("<table border='1'><tr><td>Número</td><td>Resultado</td></tr>");
    for(i=0; i<=10; i++){
        document.write("<tr><td>" + actTabla+" x " + i +"</td><td>" + actTabla * i + "</td> </tr>");
    }
    document.write("</table>");
}