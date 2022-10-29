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

function foto(){
    let num= parseInt(document.getElementById("captura").value);
    let imagen = document.getElementById('img');
    switch (num) {
        case 1:
            imagen.src = "https://static.wikia.nocookie.net/5sos/images/9/98/5SOS-0.jpg/revision/latest/top-crop/width/360/height/360?cb=20220406044551";
            break;
        case 2:
            imagen.src = "https://nettv4u.com/imagine/15-04-2021/calum-hood.jpg";
            break;
        case 3:
            imagen.src = "https://64.media.tumblr.com/be6d03290ed8dd3abb8d94537ae19f2c/6e4d06eb4411713b-00/s1280x1920/b895d20ae7bfdd6c8b7cb8ab8eaddc0d77b8d027.jpg";
            break;
        case 4:
            imagen.src ="https://i.pinimg.com/736x/27/27/25/27272509f64a6d7fc4778f070df0d658.jpg";
            break;
        case 5:
            imagen.src ="https://64.media.tumblr.com/dbddc2e3bd365bbb91ef9fffc539106a/tumblr_p5f5u619tH1s8yf6qo1_1280.jpg";
            break;
        default:
            break;                

    }

}
/*****************************************************/

function calcular(){
    let numero= parseInt(document.getElementById("tabla").value);
    let lista= document.getElementById("lista");

    lista.innerHTML = "";

    for (let index = 1; index <=10; index++){
        lista.innerHTML += `<li>${numero} * ${index} = ${numero*index}</li>`;
    }
}