function calcularTabla(){
    let numero_tabla = parseInt(document.getElementById("tabla").value);
    let resultado_tabla = document.querySelector("#resultado_tabla");
    let info = "";
    let arreglo = []
    for(let i = 1; i <= 10; i++){
        let resultado = i * numero_tabla;
        console.log(i, " x ", numero_tabla, " = ", resultado);
        info = "<br>" + i + "x" + numero_tabla + "=" + resultado
        arreglo.push(info);
    }
    resultado_tabla.innerHTML = arreglo;
}
