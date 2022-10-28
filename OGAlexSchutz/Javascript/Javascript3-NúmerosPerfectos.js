/* Actividad 1 Numeros perfectos */

cantidadNumeros = Number(prompt("Ingresa la cantidad de números a mostrar:"))

document.write("Cantidad de números a mostrar: ", cantidadNumeros," ")

encontrado = 0;
for(i = 1; encontrado <= cantidadNumeros-1; i++){
    if(i % 2 == 0){
        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                EnAUX = EnAUX + j;
            }
        }
        if(EnAUX == i){
            document.write("<br/> Número perfecto: ",EnAUX);
            encontrado++
            }
    }
    EnAUX = 0;
}