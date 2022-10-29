/*Primero*/
function numperfecto(){
    numerop = document.getElementById("numerop").value;
    let suma = document.getElementById("suma");
    suma = 0;
        for (i=1; i< numerop; i++){
            if(numerop % i ==0){
                suma =suma +i;
        }
    }
    if (suma == numerop){
        console.log("Si es Numero Perfecto.");
        return;
    }else{
            console.log("No es un Numero Perfecto.");
        }
}

/*Segundo*/
let inicio = new Date();
let TomaMed = ['1', '2', '3', '4', '5', '6',
 '7', '8', '9', '10','11', '12', '13', '14',
  '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

let Hora = inicio.getDay();

console.log(`Horarios: ${TomaMed[Hora]}`);

console.log();

let Hora1 = inicio.getHours();
let Hora2 = inicio.getHours();
let Hora3 = inicio.getHours();
let Hora4 = inicio.getHours();

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

let FreInicio = new Date();
let medicamentoinicio = ['1', '2', '3', '4', '5', '6',
 '7', '8', '9', '10','11', '12',];

let Tomar = inicio.getDay();
console.log(`La frecuencia es: ${medicamentoinicio[Hora]}`);