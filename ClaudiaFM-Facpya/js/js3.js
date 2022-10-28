/* Actividad 1 Numeros perfectos */
let numeros = Number(prompt("¿Cuántos números desea ver?:  "));

let suma = 0;

for(i = 1; suma <= numeros-1; i++){
    
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

cont = 0

let toma= HoraInicialToma; 
while(toma<=23){
    cont = cont + 1
    console.log("Toma ", cont,": ", toma);
    toma = toma + Frecuencia;
}