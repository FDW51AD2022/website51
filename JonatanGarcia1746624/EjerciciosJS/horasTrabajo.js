let horasTrabajadas = 39;
pagoHora = 20;
let horasExtras = 0;

if(horasTrabajadas > 40) {
    horasExtras = horasTrabajadas - 40;
    pagoHorasExtras = horasExtras * 60;  
    console.log("Total pago:",800+pagoHorasExtras);
}
else {
    console.log("Total pago:",horasTrabajadas*20)
}