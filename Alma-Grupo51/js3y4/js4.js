let horainicial = new Date();
let tomamedicamento = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24' ];

let hora = horainicial.getDay();

console.log(`horario': ${tomamedicamento[hora]}`);



console.log();

let horas1 = horainicial.getHours();
let horas2 = horainicial.getHours();
let horas3 = horainicial.getHours();
let horas4 = horainicial.getHours();


let jornada = horas1 >= 0 ? '1' : '0';

let horas = horas2 >= 0 ? '5' : '0';


let jornadass = horas1 >= 0 ? '2' : '0';

let horaas = horas2 >= 0 ? '11' : '0';

let jornadas1 = horas1 >= 0 ? '3' : '0';

let horaa1 = horas2 >= 0 ? '17' : '0';


let jornadas = horas1 >= 0 ? '4' : '0';

let horaa = horas2 >= 0 ? '23' : '0';

console.log(`${horas % 23} ${jornada} : ${horas}`);

console.log(`${horas % 23} ${jornadass} : ${horaas}`);


console.log(`${horas % 23} ${jornadas1} : ${horaa1}`);


console.log(`${horas % 23} ${jornadas} : ${horaa}`);

let frecuenciainicial = new Date();
let tomainicial = ['1', '2', '3', '4', '6', '7', '8', '9', '10', '11', '12',];

let toma = frecuenciainicial.getDay();

console.log(`frecuencia': ${tomainicial[hora]}`);