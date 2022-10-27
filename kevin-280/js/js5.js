function suma(){
    var numero1 = Number(document.getElementById('numero_1').value);
    var numero2 = Number(document.getElementById('numero_2').value);
    var total = (numero1 + numero2);
    
    document.getElementById('total').value = total;
  
}

function resta(){
    var numero1 = Number(document.getElementById('numero_1').value);
    var numero2 = Number(document.getElementById('numero_2').value);
    var total = (numero1 - numero2);
    
    document.getElementById('total').value = total;
}

function Multiplicacion(){
    var numero1 = Number(document.getElementById('numero_1').value);
    var numero2 = Number(document.getElementById('numero_2').value);
    var total = (numero1 * numero2);
    
    document.getElementById('total').value = total;
}

function Division(){
    var numero1 = Number(document.getElementById('numero_1').value);
    var numero2 = Number(document.getElementById('numero_2').value);
    var total = (numero1 / numero2);
    
    document.getElementById('total').value = total;
}


