// EJERCICIO JS 5
function calcular() {
    let numero1         = parseInt(document.getElementById("num1").value);
    let numero2         = parseInt(document.getElementById("num2").value);
    let operacion       = document.getElementById("operacion").value;
    let lbl_resultado   = document.getElementById("lbl_resultado");
    
    // Operacion
    let resultado = 0;

    if (operacion == "suma") {
        resultado = numero1 + numero2;

    } else if (operacion == "resta"){
        resultado = numero1 - numero2;

    } else if (operacion == "multiplicacion"){
        resultado = numero1 * numero2;

    } else {
        resultado = numero1 / numero2;
    }

    // Imprimir Valor
    lbl_resultado.value = resultado;
}

// -----Programa Cambiar Imagen-----
function cambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("img_1").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) {
        imagen.src = "./img/felicidad.webp";
    } else if (num_imagen == 2) {
        imagen.src = "./img/temor_imagen.jpg";
    } else if (num_imagen == 3) {
        imagen.src = "./img/tristeza_imagen.jpg";
    } else if (num_imagen == 4) {
        imagen.src = "./img/furia_imagen.jpg";
    } else {
        imagen.src = "./img/desagrado_imagen.jpg";
        imagen.width = "400";
    }
}

// -----Programa Tabla de Multiplicar-----
function calcularTabla() {
    let numero       = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("lista_tabla");

    // Limpiar Tabla
    lista_tabla.innerHTML = "";

    for (let index = 1; index <= 10; index++) {
        lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
    }
}


