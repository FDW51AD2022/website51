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

function funcionImagen(){
    let imgSeleccionada = parseInt(document.getElementById("n_img").value);
    let img = document.getElementById('img');
    if (imgSeleccionada == 1) {
        img.src="https://images.pexels.com/photos/978959/pexels-photo-978959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        return img;
    }
    else if (imgSeleccionada == 2) {
        img.src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        return img;
    }
    else if (imgSeleccionada == 3) {
        img.src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        return img;
    }
    else if (imgSeleccionada == 4) {
        img.src="https://images.pexels.com/photos/6775796/pexels-photo-6775796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        return img;
    }
    else if (imgSeleccionada == 5) {
        img.src="https://images.pexels.com/photos/9149247/pexels-photo-9149247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        return img;
    }
    else {
        return img;
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