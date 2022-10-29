function NumsP(){
    NumPerf = document.getElementById("NumPerf").value;
    let suma = document.getElementById("suma");
    suma = 0;
        for (i=1; i< NumPerf; i++){
            if(NumPerf % i ==0){
                suma =suma +i;
        }
    }
    if (suma == NumPerf){
        console.log("Sí es Numero Perfecto.");
        return;
    }else{
            console.log("No es un Numero Perfecto.");
        }
}