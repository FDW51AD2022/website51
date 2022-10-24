function tablamulti(){

    let numt= parseInt(document.getElementById("tabla").value);

    for(i=1; i<=10; i++){
        document.write("<br>" + numt + "x" + i + "= " + numt * i);
    }
}