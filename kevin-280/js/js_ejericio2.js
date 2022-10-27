let Hora_inicio = new Date(14); 
let Medicicamento = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

let Hora = Hora_inicio.getDay();

console.log(`Horarios: ${Medicicamento[Hora]}`);

console.log();

let Hora_inicio1 = Hora_inicio.getHours();
let Hora_inicio2 = Hora_inicio.getHours();
let Hora_inicio3 = Hora_inicio.getHours();
let Hora_inicio24 = Hora_inicio.getHours();

let Tiempo1 = Hora_inicio1 >= 0 ? '1' : '0';
let Frecuencia1 = Hora_inicio2 >= 0 ? '5' : '0';
let Tiempo2 = Hora_inicio1 >= 0 ? '2' : '0';
let Frecuencia2 = Hora_inicio2 >= 0 ? '11' : '0';
let Tiempo3 = Hora_inicio1 >= 0 ? '3' : '0';
let Frecuencia3 = Hora_inicio2 >= 0 ? '17' :  '0';
let Tiempo4 = Hora_inicio1 >= 0 ? '4' : '0';
let Frecuencia4 = Hora_inicio2 >= 0 ? '23' : '0';


let FrecuenciaInicio = new Date();
let TomaMedInicio = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12',];

let Tomar = FrecuenciaInicio.getDay();
console.log(`La frecuencia es: ${TomaMedInicio[Hora]}`);