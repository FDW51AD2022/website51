function calcular(){


    let numero = parseInt( document.getElementById("num").value);
    /* llamar la funcion */
    let numero2 = parseInt( document.getElementById("num2").value);

    let resul= document.getElementById("resul");
    let op = document.getElementById("op");
    switch (op.value) {
        case 'sumar':
            resul.value=numero + numero2; 
            break;
        case 'restar':
            resul.value=numero - numero2; 
            break;
        case 'multiplicar':
            resul.value=numero * numero2; 
            break;
        case 'dividir':
            resul.value=numero / numero2; 
            break;
        default:
            break;
    }
    
    console.log("divisores",resul.value);
 }

function verimagen(){
    let numeroi = parseInt( document.getElementById("numeroi").value);
    /* llamar la funcion */
    let imagen_res=document.getElementById("imagen");

    switch (numeroi) {
        case 1:
            imagen_res.src="https://www.eluniverso.com/resizer/eyyHgZdgA3ZjgdM0V-7VsuiC8Dc=/1006x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3JOT23QQA5FXBOEPI2B4CUJIVE.jpg";
        
      /*  case 2:
            resulta.value= imagen.innerHTML = <img scr="https://i0.wp.com/thehappening.com/wp-content/uploads/2015/08/rottweiler.jpg"></img>; 
            break;
        case 3:
            resulta.value= imagen.innerHTML = <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fthehappening.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fking-cavalier-2.jpg%3Ffit%3D1024%252C694%26ssl%3D1&imgrefurl=https%3A%2F%2Fthehappening.com%2Flas-7-razas-de-perros-mas-caras-del-mundo%2F&tbnid=UI5RxHW_8zKGxM&vet=12ahUKEwjqjcOotOz6AhUPg2oFHeKKCR0QMygtegUIARCnAg..i&docid=ASG5lvyeXiAbCM&w=1024&h=694&q=perritos%20bebes%20caros&ved=2ahUKEwjqjcOotOz6AhUPg2oFHeKKCR0QMygtegUIARCnAg"></img>; 
            break;
        case 4:
            resulta.value= imagen.innerHTML = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW17o_n7e9jVCLbDRqer3NXkAlCfOs7gVmfg&usqp=CAU"> </img>; 
            break;
        case 5:
            resulta.value= imagen.innerHTML = <img src="https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,w_340,c_thumb,f_auto,q_80/mascotas/postedin-image-21687.jpeg"></img>; 
            break;
        default:
            break;*/
    }
    
    
    }
    