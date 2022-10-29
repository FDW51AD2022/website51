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
