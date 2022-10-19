function sumar(){
    var1 = parseInt(document.getElementById('valor1').value);
    var2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = var1+var2;

}

function restar(){
    var1 = parseInt(document.getElementById('valor1').value);
    var2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = var1-var2;

}

function multiplicar(){
    var1 = parseInt(document.getElementById('valor1').value);
    var2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = var1*var2;

}

function dividir(){
    var1 = parseInt(document.getElementById('valor1').value);
    var2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = var1/var2;

}