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

function imagen() {
    let num  = parseInt(document.getElementById("captura").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://www.tuningblog.eu/wp-content/uploads/2020/01/Honda-Civic-Type-R-Bodykit-T%C3%BCrkei-rot-Tuning-4.jpg";
            break;
        case 2:
            imagen.src = "https://i.pinimg.com/originals/b7/48/86/b74886512debb668621dd5d7e6e1fc7a.jpg";
            break;
        case 3:
            imagen.src = "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/480x272/public/media/image/2016/10/585741-honda-civic-sema-show-2016.jpg?itok=MWzoH9Fo";
            break;
        case 4:
            imagen.src = "https://img.gta5-mods.com/q95/images/honda-civic-5gen-stance/472b2d-gta5mods1.jpg";
            break;
        case 5:
            imagen.src = "https://cloud.leparking.fr/2022/06/15/19/01/honda-civic-honda-civic-vi-6-1-6-vtec-lpg-coupe-gleba-gwint-tuning-przemysl-olx-pl-czarny_8531399173.jpg";
            break;
        default:
            break;
    }
}

function tabla() {
    let numero = parseInt(document.getElementById("num").value);
    tablas.innerHTML = "";

    for(let i=1; i<=10;i++){
        tablas.innerHTML += `<ul>${numero} x ${i} = ${numero * i}</ul>`;
    }
}







