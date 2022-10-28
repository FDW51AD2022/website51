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