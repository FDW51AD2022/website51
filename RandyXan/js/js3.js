numero = Number(prompt("Ingresa la cantidad de números a mostrar:"))

document.write("Ingrese los números a mostrar: ",numero)

encontrado = 0;
for(i = 1; encontrado <= numero-1; i++){
    if(i % 2 == 0){
        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                auxEntero = auxEntero + j;
            }
        }
        if(auxEntero == i){
            document.write("<br/> El resultado de numero perfecto es: ",auxEntero);
            encontrado++
            }
    }
    auxEntero = 0;
}



let hora_inicial = Number(prompt("Ingresa la hora:"));
let frecuencia = Number(prompt("Ingresa la frecuencia:"));

let cantidad_tomadas = 24 / frecuencia;

console.log("Horarios");

let horario = hora_inicial;

for (let i = 1;i <= cantidad_tomadas; i++) {
    console.log(`Toma: ` + i + " < " + (horario) + ":00 hrs>");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};