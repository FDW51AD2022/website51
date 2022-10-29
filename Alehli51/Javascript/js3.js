
numero = Number(prompt("Ingresa la cantidad de números perfectos a mostrar(1-4):"))

document.write("Fueron: ",numero, " numeros")

num = 0;
for(i = 1; num <= numero-1; i++){
    if(i % 2 == 0){
        for((j = (i / 2));(j >= 1); j--){
            if(i % j == 0){
                enter = enter + j;
            }
        }
        if(enter == i){
            document.write("<br/> El resultado del numero perfecto es: ",enter);
            num++
            }
    }
    enter = 0;
}