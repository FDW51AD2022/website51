
function verimagen(){
    let numero_imagen = document.getElementById("num1").value;
    let imgrest = document.querySelector(".imgpos")

    if (numero_imagen == "1"){
        imgrest.innerHTML = '<img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg" alt="">'

    }

    else if (numero_imagen == "2"){
        imgrest.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLVT-0k5wD4iTb9qMtNYEP4SxLNYcRY-sYA&usqp=CAU alt="">'

    }
    else if (numero_imagen == "3"){
        imgrest.innerHTML = '<img src="https://www.saborusa.com/wp-content/uploads/2019/12/origen-de-la-pizza-1.jpg" alt="">'

    }
    else if(numero_imagen == "4"){
        imgrest.innerHTML = '<img src="https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="">'

    }
    else if(numero_imagen == "5"){
        imgrest.innerHTML = '<img src="https://cafeselcriollo.com/wp-content/uploads/2022/03/beneficios-del-cafe-arabica-cafes-el-criollo-zaragoza.jpg" alt="">'

}
}