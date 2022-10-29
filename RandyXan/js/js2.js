let alumnos = ["mario", "luis"];

console.log(alumnos);
console.log("Total elementos", alumnos.length);

console.log("Primer elemento", alumnos[0]);

console.log("Ultimo elemento", alumnos[-1]);

console.log("Ultimo elemento", alumnos[alumnos.length - 1]);

console.log("Tipo de dato", typeof alumnos);

let grupo51 = {
  nombre: "grupo 51",
  semestre: 5,
  carrera: "LTI",
  alumnos: alumnos,
};

console.log("Nombre:", grupo51["nombre"], grupo51.nombre);

console.log("Primer alumno", grupo51.alumnos[0]);

document.write("<marquee>mensaje</marquee");
document.write(`<ul>
                    <li>
                        Elemento
                    </li>
                /ul<`);

let calif = 90;


if (calif >= 95 && calif <= 100) {
  console.log("Excelente");
} else {
  console.log("No excelente");
}

for( let i=1; i<=100; i++) {
    let codigo = "<marquee>" + i + "</marquee>";
    document.write(codigo );
}

for( let i=10; i>=1 ; i-- ) {
    document.write(i + "<br>")
};



let horas = 43;
let pago_hora = 27;
let pago_total = 0;

if (horas >= 40) {
    let pago_total = ((pago_hora * 3) * (horas-40)) + (40 * pago_hora);
    console.log(pago_total);
}
else {
    let pago_total = horas * pago_hora;
    console.log(pago_total);
}