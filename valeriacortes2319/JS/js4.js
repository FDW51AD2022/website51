let inicio =new Date();
let medicamento = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,
`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`20`,
`21`,`22`,`23`,`24`]
let horaio =inicio.getDate();
console.log(`Horario` `${medicamento[horaio]}`);

console.log();
let horas1 = inicio.gethours();
let horas2 = inicio.gethours();
let horas3 = inicio.gethours();
let horas4 = inicio.gethours();

let jornada = horas1 >= 0 ? `1` : `0`;
let horas = horas2 >= 0 ? `5` : `0`;
let jornadAs = horas1 >= 0 ? '2' : `0`;
let horAs = horas2 >= 0 ? `11` : `0`;
let jornadas1 = horas1 >= 0 ? `3` : `0`;
let horA1 = horas2 >= 0 ? `17` : `0`;
let jornadas = horas1 >= 0 ? `4` : `0`;

console.log(`${horas % 23} ${jornada} : ${horas}`);
console.log(`${horas % 23} ${jornadAs} : ${horas}`);
console.log(`${horas % 23} ${jornadas1} : ${horas1}`);
console.log(`${horas % 23} ${jornadas} : ${horaa}`);

let frecuenciadeinicio = new Date();
let iniciodetoma =[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,
`10`,`11`,`12`];
let tomar = frecuenciadeinicio.getDate();
console.log(`frecuencia` `: ${iniciodetoma[hora]}`);