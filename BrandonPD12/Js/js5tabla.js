function tablas() {
    let Tablas = document.getElementById("Tablas_de_multiplicar").value;
    Tablas = parseInt(Tablas);

    for (var i = 1; i <= 10; i++) {
        Mul = Tablas * i;
        document.write(Tablas + "x" + i + "=" + Mul + "<br>");
    }
}