let tomaini = Number(prompt("Hora de la primera toma"));
let frecuencia = Number(prompt("Frecuencia de la toma"));
contador = 0
let hora = tomaini;
while(hora<=23){
    contador = contador + 1
    console.log("Hora de toma ", contador,": ", hora,"hrs");
    hora = hora + frecuencia;
}
