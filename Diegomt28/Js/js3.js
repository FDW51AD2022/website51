cantidadNumeros = Number(prompt("Ingresa cuantos números deseas ver:"))

document.write("Actividad 1 números perfectos <br/>")

document.write("Cantidad de números a mostrar: ", cantidadNumeros," (tipo de dato: ",typeof(cantidadNumeros),")")

encontrado = 0;
for(i = 1; encontrado <= cantidadNumeros-1; i++){

    if(i % 2 == 0){
       
        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                auxEntero = auxEntero + j;
            }
        }
        if(auxEntero == i){
            document.write("<br/> Número perfecto: ",auxEntero);
            encontrado++
            }
    }
    auxEntero = 0;
}