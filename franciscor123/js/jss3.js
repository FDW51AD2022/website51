function calcular(){


    let numero = parseInt( document.getElementById("num").value);
    /* llamar la funcion */
    let numero2 = parseInt( document.getElementById("num2").value);

    let resul= document.getElementById("resul");
    let op = document.getElementById("op");
    switch (op.value) {
        case 'sumar':
            resul.value=numero + numero2; 
            break;
        case 'restar':
            resul.value=numero - numero2; 
            break;
        case 'multiplicar':
            resul.value=numero * numero2; 
            break;
        case 'dividir':
            resul.value=numero / numero2; 
            break;
        default:
            break;
    }
    
    console.log(resul);
 }

    