let horainicialtoma = 4;
let toma = 0;
let frecuencia = 6;
let dia = 24;

let num_toma = dia/frecuencia

while (toma<num_toma) {
    toma++
    let hora = frecuencia*toma
    console.log(toma,hora)
}