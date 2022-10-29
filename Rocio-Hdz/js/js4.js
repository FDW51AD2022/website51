
horaInicial = Number(prompt("Ingrese la hora inicial (0-23):"))

frecuencia = Number(prompt("Ingrese la frecuencia (1-12):"))

document.write("Hora incial: ", horaInicial)
document.write("<br/>Frecuencia: ", frecuencia)

let cantidad = Math.floor(24/frecuencia);

for(i = 1;i<=cantidad;i++){

    if(horaInicial>23){

        horaInicial = horaInicial-24

    }
    console.log(`Toma ${i}: ${horaInicial}`)

    horaInicial = horaInicial + frecuencia
    document.write(`<h2> ${horaInicial} </h2>`);
}