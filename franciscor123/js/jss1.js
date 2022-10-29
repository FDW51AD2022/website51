function perfecto() {

numerot = document.getElementById("numerot").value;
let suma= document.getElementById("suma");
suma = 0;
  for (i = 1; i < numerot; i++) {                             
    if (numerot % i == 0) {
        suma = suma + i;   
    }
  }
  if (suma == numerot) {                         
     console.log("Perfecto");
     return;
  } else {
    console.log("No es Perfecto");

  }
}