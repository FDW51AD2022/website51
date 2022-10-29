function vertabla() {

    numerot = document.getElementById("numerot").value;
    num = parseInt(numerot);

    for (var i = 1; i <= 10; i++) {
        multi = numerot * i;
        document.write(numerot + "x" + i + "=" + multi + "<br>" ) ;
        
    }
        
    

}
