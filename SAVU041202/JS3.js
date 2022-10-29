const numeroPerfecto = (num) => {
    if (typeof num === 'number') {
      num = Math.floor(num)
  
      let divisores = []
  
      const num2 = num / 2
  
      for (let i = 0; i <= num2; i++) {
        if (num % i === 0) {
          divisores.push(i)
        }
      }
  
      const sumaDivisores = divisores.reduce((prev, curr) => prev + curr)
  
      if (sumaDivisores === num) {
        //numero perfecto
        return sumaDivisores
      } else {
        return 0
      }
    } else {
      console.error('Ingresar un numero entero')
    }
  }
  
  console.log(numeroPerfecto);
console.log("Total",
numeroPerfecto[0]);