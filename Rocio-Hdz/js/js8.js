function tabla() {
    let num = document.getElementById("num").value;
    num = parseInt(num);

    for (var i = 1; i <= 10; i++) {
        multiplicacion = num * i;
        document.write(num + "x" + i + "=" + multiplicacion + "<br>");
    }
}