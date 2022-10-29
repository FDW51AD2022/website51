function tabla() {
    
  let num = document.getElementById("num").value;
  
  if(num != ""){
    num = parseInt(num);
    document.getElementById("tabla").innerHTML = "";
    let tabla = "";
    for (var i = 1; i <= 10; i++) {
    multiplicacion = num * i;
    tabla += num + "x" + i + "=" + multiplicacion + "<br>";
    }
    document.getElementById("tabla").innerHTML = tabla;
  }else{

    alert("Ingresa un valor")
  }
  
}
