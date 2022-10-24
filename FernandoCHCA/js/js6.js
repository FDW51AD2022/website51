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
        imagen.src="https://estnn.com/wp-content/uploads/2022/05/CS-GO-wallpaper-HD-art_hue3ed7aeab8fceb3ccf3a35de14fc82fb_1114369_1920x1080_resize_q75_lanczos.jpg";
        return imagen;
    }
    else if (n_imagen == 2) {
        imagen.src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltca10ecaf4136d0b2/6321262d3ab6f40dd2a9076d/Season_Asset.jpg";
        return imagen;
    }
    else if (n_imagen == 3) {
        imagen.src="https://media.ambito.com/p/c3aa5187f23c97649566bc34cdea0c44/adjuntos/239/imagenes/039/916/0039916695/valorant-juego.jpg";
        return imagen;
    }
    else if (n_imagen == 4) {
        imagen.src="https://www.somosxbox.com/wp-content/uploads/2021/10/Minecraft-Dungeons-Seasonal-Adventures-1-scaled.jpg";
        return imagen;
    }
    else if (n_imagen == 5) {
        imagen.src="https://vamers-com.exactdn.com/wp-content/uploads/2022/03/Vamers-Entertainment-List-Lens-Island-01-scaled.jpg";
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

// Como hacer las tablas del 1 al 10?
function tablas(){
    let numero_tabla = parseInt(document.getElementById("resul_Tabla").value);
    if (numero_tabla < 1 || numero_tabla > 10) {
        Respuesta_tabla = 'Solo se acepta hasta del 1 al 10, vuelva a intentarlo';
        return Respuesta_tabla;
    }
    document.write("<table border='1'><tr><td>Número</td><td>Resultado</td></tr>");
    for(i=0; i<=10; i++){
        document.write("<tr><td>"+numero_tabla+" x " + i +"</td><td>" + numero_tabla * i + "</td> </tr>");
    }
    document.write("</table>");
}