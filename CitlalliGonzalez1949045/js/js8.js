function multiplicar() {

    num = document.getElementById("num").value;
    num = parseInt(num);

    for (var i = 1; i <= 10; i++) {
        multi = num * i;
        document.write(num + "x" + i + "=" + mult + "<br>");
    }
}