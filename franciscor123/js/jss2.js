function vertabla() {

    numerot = document.getElementById("numerot").value;
    num = parseInt(numerot);
    fre = document.getElementById("fre").value;
    free = parseInt(fre);

    
    for (var i = 1; i <= num; i++){
        
        multi = free * i - 1;
        if (multi <= 23 ){
        document.write( "Toma " + i +" " + multi + "<br>" ) ;
      } 
      else {}
    }  
    

}