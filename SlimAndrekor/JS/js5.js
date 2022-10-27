function calcular() {
    let Numero1        = parseInt(document.getElementById("Numero1").value);
    let Numero2        = parseInt(document.getElementById("Numero2").value);
    let Operacion      = document.getElementById("Operacion").value;
    let resultado  = document.getElementById("Resul");
    
    let Resultado = 0;

    if (Operacion == "Suma") {
        Resultado = Numero1 + Numero2;

    } else if (Operacion == "Resta"){
        Resultado = Numero1 - Numero2;

    } else if (Operacion == "Multiplicacion"){
        Resultado = Numero1 * Numero2;

    } else {
        Resultado = Numero1 / Numero2;
    }

    resultado.value = Resultado;
}

function CambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("img_1").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) { 
        imagen.src = "./Recursos/Tan.gif";
    } else if (num_imagen == 2) {
        imagen.src = "./Recursos/Zen.gif";
    } else if (num_imagen == 3) {
        imagen.src = "./Recursos/Inosuke.gif";
    } else if (num_imagen == 4) {
        imagen.src = "./Recursos/KvsA.gif";
    } else {
        imagen.src = "./Recursos/Tomioka.gif";
    }
}

function CalcularTabla() {
    let numero       = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("Lista");
    lista_tabla.innerHTML = "";
    for (let index = 1; index <= 10; index++) {
        lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
    }
}