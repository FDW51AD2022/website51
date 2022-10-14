const NumPerfecto = (num1) => {
    if (typeof num1 === 'number') {
            num1 = Math.floor(num1)

            let divisores = []

            const num2 = num1 / 2

            for (let i = 0; i <= num2; i++) {
                if (num1 % i === 0) {
                    divisores.push(i)
                }
            }

            const sumadivisores = divisores.reduce((prev, curr) => prev + curr)

            if (sumadivisores === num1) {
              return sumadivisores
            } else {
              return 0
            } 
        }   else {
            console.error('Agregue el número en entero: ')
        }
    }

    console.log(NumPerfecto);
console.log("El total es: ", NumPerfecto [0]);