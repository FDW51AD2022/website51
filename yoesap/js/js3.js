/*Escribir un programa en javascript que permita
Imprimir en patalla n numero perfectos.
El usuario podra indicar cuantos numeros desea ver..
Un numero perfecto es aquel que la suma de sus divisores
expecto el mismo, da como resultado el mismo numero.
Ejemplo: para el 6 sus divisores con  son 1,2,3,6
Sumando todos excepto el 6: 1+2+3 = 6, 6 es perfecto.-*/

int numero= 500;

    int resultado;
    int suma=0;

    for (int i=1;i<numero;i++){
        resultado =numero%i;
        if (resultado==0){//si el resultado da 0 entonces se suma
        suma=suma+i};

    }

    if(suma==numero){//Si el resultado es igual a suma el numero es perfecto
        ;
        System.out.println("El número es perfecto");
    }else{
        System.out.println("El número no es perfecto");
    }
