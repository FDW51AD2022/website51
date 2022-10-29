
/*Alerta*/
window.alert("   Ingresa el numero de la tabla de multiplicar que deseas ver:   ");
/*tablas de multiplicar*/
function Tabla() {
    let numero = parseInt(document.getElementById("num").value);
    tablas_id.innerHTML = "";

    for(let i=1; i<=10;i++){
        tablas_id.innerHTML += `<ul>${numero} x ${i} = ${numero * i}</ul>`;
    }
}
