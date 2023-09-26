var a;
var b;

function pedirValor(){
    a = prompt("Introduzca el primer elemento:");//Esto sera un String
    b = prompt("Introduzca el segundo elemento:");

    a = Number(a);//Transforma el String a entero
    b = Number(b);
}

function sumar(){
    pedirValor();
     //Compruebo si es un numero sino no hago la suma
     alert (isNaN(a+b)?"No se puede hacer la suma":"La suma es: "+(a+b));
 }

 function restar(){
    pedirValor(); 
     //Compruebo si es un numero sino no hago la resta
     alert (isNaN(a-b)?"No se puede hacer la resta":"La resta es: "+(a-b));
 }

 function multiplicacion(){
    pedirValor();
     //Compruebo si es un numero sino no hago la multiplicacion
     alert (isNaN(a*b)?"No se puede hacer la multiplicación":"La multiplicacion es: "+(a*b));
 }

 function division(){
    pedirValor();
     //Compruebo si es un numero sino no hago la division
     alert (isNaN(a/b) || !isFinite(a/b)?"No se puede hacer la division":"La division es: "+(a/b));
 }

 function potencia(){
    pedirValor();
     //Compruebo si es un numero sino no hago la potencia
     alert (isNaN(a**b)?"No se puede hacer la potencia":"La potencia es: "+(a**b));
 }

 function modulo(){
    pedirValor();
     //Compruebo si es un numero sino no hago el modulo
     alert (isNaN(a%b) || !isFinite(a%b)?"No se puede hacer el modulo":"El modulo es: "+(a%b));
 }