let HoraInicialToma = Number(prompt("Ingresa la hora de la toma inicial: "));
let Frecuencia = Number(prompt("Indica la frecuencia de la toma: "))


cont = 0

let toma= HoraInicialToma; 
while(toma<=23){
    cont = cont + 1
    console.log("Toma ", cont,": ", toma);
    toma = toma + Frecuencia;
}