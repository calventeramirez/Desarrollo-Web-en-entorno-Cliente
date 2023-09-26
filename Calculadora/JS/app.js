function sumar(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
 
     //Compruebo si es un numero sino no hago la suma
     alert (isNaN(a+b)?"No se puede hacer la suma":"La suma es: "+(a+b));
 }

 function restar(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
 
     //Compruebo si es un numero sino no hago la resta
     alert (isNaN(a-b)?"No se puede hacer la resta":"La resta es: "+(a-b));
 }

 function multiplicacion(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
 
     //Compruebo si es un numero sino no hago la multiplicacion
     alert (isNaN(a*b)?"No se puede hacer la multiplicación":"La multiplicacion es: "+(a*b));
 }

 function division(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
    
     //Compruebo si es un numero sino no hago la division
     alert (isNaN(a/b) || !isFinite(a/b)?"No se puede hacer la division":"La division es: "+(a/b));
 }

 function potencia(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
 
     //Compruebo si es un numero sino no hago la potencia
     alert (isNaN(a**b)?"No se puede hacer la potencia":"La potencia es: "+(a**b));
 }

 function modulo(){
    let a = prompt("Introduzca el primer elemento:");//Esto sera un String
    let b = prompt("Introduzca el segundo elemento:");
 
     a = Number(a);//Transforma el String a entero
     b = Number(b);
 
     //Compruebo si es un numero sino no hago el modulo
     alert (isNaN(a%b) || !isFinite(a%b)?"No se puede hacer el modulo":"El modulo es: "+(a%b));
 }