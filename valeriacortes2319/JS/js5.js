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
function verimagen(){
    let imagen= document.getElementById("imag1").src
    console.log(imagen)
    let foto = parseInt(document.getElementById("imagen").value)
    console.log(foto)
    if (foto == 1) {
        imagen ="https://tvazteca.brightspotcdn.com/38/e6/7b33cdd042d5a378d56a7f81fa73/perritos-primeros-auxilios.jpg"
        return document.getElementById("imag1").src=imagen
    }
    else if (foto == 2){
        imagen ="https://images.unsplash.com/photo-1619447257726-fe312296ee9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        return document.getElementById("imag1").src=imagen
    }
    else if (foto == 3){
        imagen ="http://cdn.shopify.com/s/files/1/0438/0252/5861/products/limited-edition-889075636631-A.jpg?v=1627310500"
        return document.getElementById("imag1").src=imagen
    }
    else if(foto == 4){
        imagen ="https://www.geekmi.news/__export/1616529070155/sites/debate/img/2021/03/23/zenitsu_crop1616528990946.jpg_976912859.jpg"
        return document.getElementById("imag1").src=imagen
    }
    else if(foto == 5){
        imagen ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89TYU0RON0SCVNiZ3jA3WtFYgmrb0Y0qshQ&usqp=CAU"
        return document.getElementById("imag1").src=imagen
    }
}

/*Tercer Ejercicio*/
function Num(){
    var r=document.getElementById("numero").value;
    document.write("<table border='2'>");
    document.write("<tr>");
    document.write("<td colspane='5'>tabla"+ r);
    document.write("</tr>");
    for (var i = 1; i <=10; i++) {
        m=i*r;

        document.write("<tr>");
        document.write("<td>"+ r);
        document.write("<td> x");
        document.write("<td>"+ i);
        document.write("<td> =");
        document.write("<td>" + m);
        document.write("</tr>");

};
 document.write("</table>");
}

/*5preguntas abieras y 3 programas javascript tipo, calculo, ciclos, if switch, variables, cajas normales*/
