let Hora_inicial = Number(prompt("la hora de inicial: "));
let Frecuencia_de_tomada = Number(prompt("la frecuencia:  "))

cont = 0

let Toma_de_medicamento= Hora_inicial; 
while(Toma_de_medicamento<=23){
    cont = cont + 1
    console.log("Toma de consumo fue: ", cont,": ", Toma_de_medicamento);
    Toma_de_medicamento = Toma_de_medicamento + Frecuencia_de_tomada;
}