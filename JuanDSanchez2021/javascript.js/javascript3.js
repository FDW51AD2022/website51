cantidadNumeros = Number(prompt("Ingresa la cantidad de números a mostrar:"))

document.write("Actividad 1<br/>")

document.write("Cantidad de números a mostrar: ", cantidadNumeros," (tipo de dato: ",typeof(cantidadNumeros),")")

encontrado = 0;
for(i = 1; encontrado <= cantidadNumeros-1; i++){
    //  Primer filtro que revisa si es par
    if(i % 2 == 0){
        // Filtro que compara los que están antes de la mitad
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