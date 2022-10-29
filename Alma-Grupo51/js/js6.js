

function sumar(){
    var num1=parseInt(document.getElementById('valor1').value);
    var num2=parseInt(document.getElementById('valor2').value);
    var suma=num1 + num2;
    document.form.Resultado.value=suma;

}

    function restar(){

    var num1=parseInt(document.getElementById('valor1').value);
    var num2=parseInt(document.getElementById('valor2').value);
    var resta=num1 - num2;
    document.form.Resultado.value=resta;

    }

    
    function multiplicar(){
    var num1=parseInt(document.getElementById('valor1').value);
    var num2=parseInt(document.getElementById('valor2').value);
    var multiplicar =num1 * num2;
    document.form.Resultado.value=multiplicar;

    }

    function dividir(){

    var num1=parseInt(document.getElementById('valor1').value);
    var num2=parseInt(document.getElementById('valor2').value);
    var dividir=num1 / num2;
    document.form.Resultado.value=dividir;

    }
    


    
    function sumar(){
        var num1=parseInt(document.getElementById('valor1').value);
        var num2=parseInt(document.getElementById('valor2').value);
        var suma=num1 + num2;
        document.form.Resultado.value=suma;
    
    }



    
      

    


     

     
   


    var numeroImagenes = 5 ;


 
    var cambia_imagen = new Array();
    cambia_imagen[0] = "js6/1.jpg"; 

    cambia_imagen[1] = "js6/2.jpg";

    cambia_imagen[2] = "js6/3.jpg";

    cambia_imagen[3] = "js6/4.jpg";
    
    cambia_imagen[4] = "js6/5.jpg";
      
    function rand(n)
     {
    
      
      return(Math.floor(Math.random() * n + 1 ));
     }

    function cambiarImagen()
    {
      document.getElementById("imagen").src = cambia_imagen[rand(5)-1];
      
    }       



    
    
     function Num(){
        var r=document.getElementById("numero").value;
        document.write("<table border='2'>");
        document.write("<tr>");
        document.write("<td colspane='5'>TABLA"    +r);
        document.write("</tr>");
        for (var i = 1; i <=10; i++) {
            m=i*r;

            document.write("<tr>");
            document.write("<td>"+r);
            document.write("<td> x");
            document.write("<td>"+i);
            document.write("<td> =");
            document.write("<td>" +m);
            document.write("</tr>");

    };
     document.write("</table>");


     
}



function calcula(operacion){
    var operando1 = document.calc.operando1.value    
    var operando2 = document.calc.operando2.value    
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result                   
}

 



