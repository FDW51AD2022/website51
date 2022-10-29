function divisores(num){
    let cantTotal = 0;
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            cantTotal++;
        }
    }
    return cantTotal;
};

const div2 = function(num){
    let cantTotal = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            cantTotal++;
        }
    }
    return cantTotal;
};

const div3 = num => {
    let cantTotal = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            cantTotal++;
        }
    }
    return cantTotal;
};

function calcular() {
    let num = parseInt(document.getElementById("num").value);
    let totalDivisores = (document.getElementById("resul"));
    totalDivisores.value = divisores(num);
}
