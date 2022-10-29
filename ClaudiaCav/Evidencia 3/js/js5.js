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
        img.src="https://th.bing.com/th/id/R.03d2d56bf38ec67aedf4294d28319486?rik=LeLeBekm3oX6Rg&riu=http%3a%2f%2fassets.capitalfm.com%2f2018%2f08%2fcamila-cabello-1519734544.jpg&ehk=pvIM1Jal6ontGj0isVCEZQBbjZ5jVoz0EtLxi6zLge0%3d&risl=1&pid=ImgRaw&r=0";
        return img;
    }
    else if (imgSeleccionada == 2) {
        img.src="https://vignette.wikia.nocookie.net/dojacat/images/b/b3/Doja_Cat_in_August_2020.jpg/revision/latest?cb=20200820200441";
        return img;
    }
    else if (imgSeleccionada == 3) {
        img.src="https://i.ytimg.com/vi/4_DhkDz4OAw/maxresdefault.jpg";
        return img;
    }
    else if (imgSeleccionada == 4) {
        img.src="https://www.nme.com/wp-content/uploads/2021/08/LittleMix-BetweenUs-StandardLP-Web-1-1392x884.jpg";
        return img;
    }
    else if (imgSeleccionada == 5) {
        img.src="https://th.bing.com/th/id/R.0d7c0f291c3a50a888deec5aceea6ad0?rik=1prknyEkFUaWaQ&riu=http%3a%2f%2fwww.hawtcelebs.com%2fwp-content%2fuploads%2f2018%2f06%2fariana-grande-sweetener-album-cover-2018-1.jpg&ehk=i9J4GYFEAgO2ErEaat%2bNUhQixOTrzSX%2bYKVgU6pHFCc%3d&risl=&pid=ImgRaw&r=0";
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