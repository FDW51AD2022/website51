numero = Number(prompt("Ingresa la cantidad de números a mostrar:"))

document.write("Ingrese los números a mostrar: ",numero)

encontrado = 0;
for(i = 1; encontrado <= numero-1; i++){
    if(i % 2 == 0){
        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                auxEntero = auxEntero + j;
            }
        }
        if(auxEntero == i){
            document.write("<br/> El resultado de numero perfecto es: ",auxEntero);
            encontrado++
            }
    }
    auxEntero = 0;
}