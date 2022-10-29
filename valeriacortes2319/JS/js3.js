const nueroperfecto = (num) => {
        if (typeof num === `number`) {
            num = Math.floor(num)
            let divisores =[]
            const num2 = num/2
            for(let i = 0; i <= num2; i++){
                if(num % i ===0){
                    divisores.push(i)
                }
            }
            const sumadivisores= divisores.reduce((pre, curr) => prev + curr) 
            if (sumadivisores === num) {
                return sumadivisores
            } else {
                return 0
            }
        }else{
            console.error(`Ingrese solo numeros enteros.`)
        }
    }
    console.log(numeroperfecto);
console.log("Resultado:", numeroperfecto[0]);