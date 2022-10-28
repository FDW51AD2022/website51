// Medicina
let hora = 5;
let frecuencia = 6;

let cantidad = Math.floor(24/frecuencia);

for(i = 1;i<=cantidad;i++){

    if(hora>23){

        hora = hora-24

    }
    console.log(`Toma ${i}: ${hora}`)

    hora = hora + frecuencia
    document.write(`<h2> ${hora} </h2>`);
}