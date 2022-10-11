let horas_trabajadas = 43;
let pago_hora = 100;
let pago_horas_extra = pago_hora * 3;
let pago_horas_normales;
let total_pago;

if (horas_trabajadas > 40) {
    let total_horas_extra = horas_trabajadas - 40;
    let total_pago_horas_extra = total_horas_extra * pago_horas_extra;
    let pago_horas_normales = (horas_trabajadas -total_horas_extra) * pago_hora;
    total_pago = pago_horas_normales + total_pago_horas_extra;
    console.log(total_pago);
    
} else {
    total_pago = horas_trabajadas * pago_hora;
    console.log(total_pago);
}