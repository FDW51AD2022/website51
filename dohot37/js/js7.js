function Tabla() {
    let numero = parseInt(document.getElementById("num").value);
    tablas_id.innerHTML = "";

    for(let i=1; i<=10;i++){
        tablas_id.innerHTML += `<ul>${numero} x ${i} = ${numero * i}</ul>`;
    }
}