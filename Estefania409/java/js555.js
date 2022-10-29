let genera = document.getElementById("genera")
      let numero = document.getElementById("numtab")
      let lienzo = document.getElementById("tab")
    
      genera.addEventListener("click", () => {
        for(let i = 1; i<=10; i++) {
          lienzo.innerHTML += `${numero.value} * ${i} = ${numero.value*i} <br />`
        }
      })