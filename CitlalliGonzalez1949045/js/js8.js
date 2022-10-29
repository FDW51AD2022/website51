function multiplicar(){
    var r=document.getElementById("num1").value;
    document.write("<table border='2'>");
    document.write("<tr>");
    document.write("<td colspane='5'>tabla"+ r);
    document.write("</tr>");
    for (var i = 1; i <=10; i++) {
        m=i*r;

        document.write("<tr>");
        document.write("<td>"+ r);
        document.write("<td> x");
        document.write("<td>"+ i);
        document.write("<td> =");
        document.write("<td>" + m);
        document.write("</tr>");

};
 document.write("</table>");
}