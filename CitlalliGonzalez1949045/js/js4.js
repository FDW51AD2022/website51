let HoraInicio = new Date();
let TomaMed = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

let Hora = HoraInicio.getDay();

console.log(`Horarios: ${TomaMed[Hora]}`);

console.log();

let Hora1 = HoraInicio.getHours();
let Hora2 = HoraInicio.getHours();
let Hora3 = HoraInicio.getHours();
let Hora4 = HoraInicio.getHours();

let Tiempo1 = Hora1 >= 0 ? '1' : '0';
let Time1 = Hora2 >= 0 ? '5' : '0';
let Tiempo2 = Hora1 >= 0 ? '2' : '0';
let Time2 = Hora2 >= 0 ? '11' : '0';
let Tiempo3 = Hora1 >= 0 ? '3' : '0';
let Time3 = Hora2 >= 0 ? '17' :  '0';
let Tiempo4 = Hora1 >= 0 ? '4' : '0';
let Time4 = Hora2 >= 0 ? '23' : '0';

console.log(`${Time1 % 23} ${Tiempo1} : ${Time1}`);
console.log(`${Time1 % 23} ${Tiempo2} : ${Time2}`);
console.log(`${Time1 % 23} ${Tiempo3} : ${Time3}`);
console.log(`${Time1 % 23} ${Tiempo4} : ${Time4}`);

let FrecuenciaInicio = new Date();
let TomaMedInicio = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12',];

let Tomar = FrecuenciaInicio.getDay();
console.log(`La frecuencia es: ${TomaMedInicio[Hora]}`);