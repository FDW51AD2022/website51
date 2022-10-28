// Funciones

function divisores(numero){
  let total = 0;
  for(let i=1; i<numero; i++){
    if(numero % i == 0) {
      total++;
  }
}
return total;
};

//Llamar la funcion

// alert("Divisores v1: " + divisores(25));
console.log("disivores v1: " + divisores(25));

// Funcion v2

const divisoresV2 = function(numero){
  let total = 0;
  for(let i=1; i<=numero; i++){
    if(numero % i == 0){
    total++;
    }
  }
return total;
};

// Llamar la funcion v2

// alert("Divisores v2: " + divisores(25));
console.log("Divisores v3: " + divisoresV3(25));

// Funcion v3

const divisoresV3 = numero => {
  let total = 0;
  for(let i=1; i<=numero; i++){
    if(numero % i == 0){
    total++;
    }
  }
return total;
};

// Llamar la funcion v3

// alert("Divisores v3: " + divisoresv3(25));
console.log("Divisores v3: " + divisoresV3(25));

// Ejercicio 1

function calcular() {
  let numero = parseInt(document.getElementById("num").value);
  let resultado = (document.getElementById("resul"));

  resultado.value = divisores(numero);
}
