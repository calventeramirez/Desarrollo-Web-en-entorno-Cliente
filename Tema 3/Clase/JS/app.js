function sumar(){
   let a = prompt("Introduzca el primer elemento:");//Esto sera un String
   let b = prompt("Introduzca el segundo elemento:");

    a = Number(a);//Transforma el String a entero
    b = Number(b);

    //Compruebo si es un numero sino no hago la suma
    alert (isNaN(a+b)?"No se puede hacer la suma":"La suma es: "+(a+b));
}