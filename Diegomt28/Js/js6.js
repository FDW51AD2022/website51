/* programa Calculadora */

function suma(){

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r=parseFloat(a)+parseFloat(b);
    document.f1.c.value=r;
    
    }
    
function resta(){

var a = document.f1.a.value;
var b = document.f1.b.value;
var r = document.f1.c.value;
r=parseFloat(a)-parseFloat(b);
document.f1.c.value=r;

}

function multiplicacion(){

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r=parseFloat(a)*parseFloat(b);
    document.f1.c.value=r;

}

function division(){
    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r=parseFloat(a)/parseFloat(b);
    document.f1.c.value=r;
    alert(`El resultado de la division es: `+r)

    }




/* programa Imagenes */