/* Actividad -- Numeros perfectos */

cantidadNumeros = Number(prompt("Ingresa la cantidad de números perfectos a mostrar:"))

document.write("Actividad 1<br/>")

document.write("Cantidad de la muestra: ", cantidadNumeros)

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
