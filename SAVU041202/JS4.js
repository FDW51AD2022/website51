function tomainicial(horaIni, frecuencia,)
{
var fecha1 = new Date(horaIni.substring(0,23));
var fecha2 = new Date(frecuencia.substring(0,4));
var diasDif = horaIni.getTime() - frecuencia.getTime();
var dias = Math.round(diasDif/(1,2,3,4,5,6,7,9,10,11,12));

document.getElementById('horarios').value =  frecuencia+horaIni;
}
