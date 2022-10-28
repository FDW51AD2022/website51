/*Alerta*/
window.alert("Calcular el total a pagar a un Empleado. Solicitar numero de horas trabajadas y el pago por hora.Si el trabajador tiene horas extra pagarlas al triple. Se consideran horas normales las primeras 40 hrs.   ");

const calcularTotales = (pago, horasTrabajadas) => {
    if (horasTrabajadas > 40) {
        let totalPagoExtra = (horasTrabajadas - 40) * pago * 3;
        let totalPago = 40 * pago;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago} y el pago extra es: ${totalPagoExtra}. El total a pagar es: ${
            totalPago + totalPagoExtra
        }`;
    } else {
        let totalPago = horasTrabajadas * pago;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago}`;
    }
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let horasTrabajadas = +document.querySelector("#horas_trabajadas").value;
    let pago = +document.querySelector("#precio_hora").value;
    calcularTotales(pago, horasTrabajadas);
});