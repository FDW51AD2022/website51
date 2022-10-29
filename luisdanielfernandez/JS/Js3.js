var numero;
numero = prompt("Cuantos numero perfectos quieres ver")

for( var i = 1; i <= numero++; i++){
    b=0;
    for (var j = 1; j <= Math.floor(i/2); j++){
        if(parseInt(i)% parseInt(j)==0)
        b = b + parseInt(j);
    }
    if( b == i)
    console.log("El numero es perfecto\n",i);
}
