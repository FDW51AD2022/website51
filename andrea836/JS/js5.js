function sumar() {
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = x + y;    
}
function restar() {
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = x - y;    
}
function multiplicar() {
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = x * y;    
}
function dividir() {
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = x / y;    
}
/**************************************/

function captura(){
    let num= parseInt(document.getElementById("imagen1").value);
    let captura = document.getElementById("img");
    switch (num) {
        case 1:
            imagen.src =;
            break;
        case 2:
            imagen.src =;
            break;
        case 3:
            imagen.src =;
            break;
        case 4:
            imagen.src =;
            break;
        case 5:
            imagen.src =;
            break;
        default:
            break;                

    }

}