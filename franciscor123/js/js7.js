function verimagen(){
    let numeroi = parseInt( document.getElementById("numeroi").value);
    /* llamar la funcion */
    let imagen_res=document.getElementById("imagen");

    switch (numeroi) {
        case 1:
            imagen_res.src="https://www.eluniverso.com/resizer/eyyHgZdgA3ZjgdM0V-7VsuiC8Dc=/1006x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3JOT23QQA5FXBOEPI2B4CUJIVE.jpg";
            break;
        case 2:
            imagen_res.scr="https://cdn.redcanina.es/wp-content/uploads/2018/12/27231440/perro-peque.jpg"; 
            break;
        case 3:
            imagen_res.src="https://miro.medium.com/max/1400/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg"; 
            break;
        case 4:
            imagen_res.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW17o_n7e9jVCLbDRqer3NXkAlCfOs7gVmfg&usqp=CAU"; 
            break;
        case 5:
            imagen_res.src="https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,w_340,c_thumb,f_auto,q_80/mascotas/postedin-image-21687.jpeg"; 
            break;
        default:
            break;
    }
    
    
    }