/* Actividad 1 Numeros perfectos */
let numeros = Number(prompt("¿Cuántos números desea ver?:  "));

let suma = 0;

for(i = 1; suma <= numeros-1; i++){
    //  Se revisa si es Par o no par
    if(i % 2 == 0){

        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                numeroEntero = numeroEntero + j;
            }
        }
        if(numeroEntero == i){
            document.write("<br/> Número perfecto: ",numeroEntero);
            suma++
            }
    }
    numeroEntero = 0;
}

/* Actividad 2 Tomas de medicina */

let HoraInicialToma = Number(prompt("Ingresa la hora de la toma inicial: "));
let Frecuencia = Number(prompt("Indica la frecuencia de la toma: "))
/* let toma= HoraInicialToma + Frecuencia; */

/* for (let toma = HoraInicialToma; toma + Frecuencia) {
   
} */


cont = 0

let toma= HoraInicialToma; 
while(toma<=23){
    /* console.log(toma); */
    cont = cont + 1
    /* if(cont = 2 && toma >23) */
    console.log("Toma ", cont,": ", toma);
    toma = toma + Frecuencia;
}