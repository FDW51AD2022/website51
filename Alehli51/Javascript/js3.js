Numero = Number(prompt("Agrega la cantidad de los num a mostrar:"))

document.write("Agrege los num a mostrar:",numero)

encontrado = 0;
for(i = 1; encontrado <= numero-1; i++){
    if(i%2 == 0){
        for((j = (i/2));(j=>=1); j--){
            if(i%j ==0){
                auxEntero = auxEntero + j;
            }
        }
        if(auxEntero ==i){
            document.write("<br/> Su resultado de el numero perfecto es:",auxEntero);
            encontrado++
        }
    }
    auxEntero = 0;
}
