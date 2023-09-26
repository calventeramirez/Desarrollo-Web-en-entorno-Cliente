/*
Instalar Node.js, ESLint, Prettier Code, Javascript Debugger (normal), Intellicode
Live Server, Quokka.JS y Quokka Statusbar buttons
 */
nombre = "Pablo Calvente";
//JS podemos definir una variable sin la palabra reservada var, let o const
//No es una buena practica
//var esta obsoleto y lo que se utiliza let y const para definir variables
console.log(nombre);
//Para llamar a quokka ctrl+Shift+P -> quokka.js: Toggle (Start/Stop)

//Modificamos el codigo y lo hacemos correcto
let nombre1 = "Pablo Jesús Calvente Ramírez";
console.log(nombre1)

let a = 2;
console.log(typeof(nombre1));
console.log(typeof(a));

console.log(a+nombre1);

let b = '3';
console.log(a+b);

let ok = true;
console.log(typeof(ok));
let ind;
console.log(typeof(ind));
let nu = null;
console.log(typeof(nu));

let simbolo = Symbol("mi simbolo");
console.log(typeof(simbolo));



//Condicionales
if (a >= 18){
    console.log("Persona adulta");
}else{
    console.log("Persona no adulta");
}

let hora = 5;
if(hora < 12 && hora >= 6){
    console.log("Buenos dias");
}else if(hora < 19 && hora >= 12){
    console.log("Buenas tardes");
}else if(hora > 18 && hora <24){
    console.log("Buenas noches");
}else if(hora>=0 && hora < 6){
    console.log("Durmiendo");
}else{
    console.log("Error");
}


let z = 2;
let x = '2';

console.log(x == z);
console.log (x === z);

let num = 8;
console.log(num % 2 == 0 ? "Es par":"Es impar");

if(isNaN(z+"x")){
    console.log("No es numero")
}

//Casteo a int
let r = 5.24;
console.log(~~r);

//bucles
//while
let cont = 0;
while(cont < 3){
    console.log(cont);
    cont++;
}

//do..while
cont = 0;
do{
    console.log(cont);
    cont ++;
}while(cont < 4);

//for
for(cont = 0; cont < 3; cont++){
    console.log(cont);
}

//Incrementos
//Pre-incremento
z = ++a;
console.log(a);
console.log(z);

//Post-incremento
z = b++;
console.log(b);
console.log(z);

//Decrementos igual que los incrementos

//switch
let mes = 5;
let estacion ="";
switch(mes){
    case 1: case 2: case 11:  case 12:
        estacion = "Invierno";
        break;
    case 3: case 4:  case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10:
        estacion = "Otoño";
        break;
    default:
        estacion = "Desconocida";
}
console.log(estacion);

//Objetos
let objeto ={
    nombre : "Pablo",
    apellido : "Calvente"
}

console.log(typeof(objeto));

//Array
let marcaCoches = ['BMW', 'Audi', 'Renault', 'Ford'];
console.log(typeof marcaCoches); //Se puede poner el typeof con o sin parentesis

//Clases
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof(Persona));
console.log(typeof(objeto));

//Funciones
function miFuncion(x , z){
    console.log(x + z);
}
console.log(typeof miFuncion);
miFuncion(x, z);
