/*Primer ejercicio*/
function operaciones_calculo(numero, numero2, operaciones){
    let total = 0;
    if (operaciones == "suma") {
        total=numero+numero2
        return total;
    }
    else if (operaciones == "resta"){
        total=numero-numero2
        return total;
    }
    else if (operaciones == "multiplicacion"){
        total=numero*numero2
        return total;
    }
    else if(operaciones == "division"){
        total=numero/numero2
        return total;
    }
}

function calcular(){
    let numero = parseInt(document.getElementById("num").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operaciones = (document.getElementById("ope").value);
    let resultado = document.getElementById("resul");

    resultado.value = operaciones_calculo(numero, numero2, operaciones);

}

/*Segundo Ejercicio*/
function imagenes(imag){
    let imagen = 0;
    if (imagenes == "imagen1") {
        return imagen;
    }
    else if (imagenes == "imagen2"){
        return imagen;
    }
    else if (imagenes == "imagen3"){
        return imagen;
    }
    else if(imagenes == "imagen4"){
        return imagen;
    }
    else if(imagenes == "imagen5"){
        return imagen;
    }
}

function verimagen(){
    let imagen1 = (document.getElementById("imag").value);
    let imagen2 = (document.getElementById("imag").value);
    let imagen3 = (document.getElementById("imag").value);
    let imagen4 = (document.getElementById("imag").value);
    let imagen5 = (document.getElementById("imag").value);

    resultado.value = imagenes();

}

/*5preguntas abieras y 3 programas javascript tipo, calculo, ciclos, if switch, variables, cajas normales*/
