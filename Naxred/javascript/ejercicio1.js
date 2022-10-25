for (var i = 2; i <= 500; i++ ){
    b = 0;

    for (var j = 1; j <= Math.floor(i/2); j++){
        if (parseInt(i) % parseInt(j) == 0)
        b = b + parseInt(j);
    }

    if (b == 1)
        console.log("El numero %d es perfecto\n", i)
}