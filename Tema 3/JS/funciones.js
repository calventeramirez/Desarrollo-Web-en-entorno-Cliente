//Otra forma de crear una funcion
let func = new Function("a", "b", "return a * b");
let res = func(10, 10);

//Funcion autoinvocadas
(function (){
    var msg = "Hola";
})();

//Funcion anonima, es decir, funciones que no tienen nombre definido
let funct = function(a,b){return a*b};

//Funciones flechas, sirve para reducir las funciones. Se basa
//en la utilizacion de funciones anonimas y elimana las palabras reservadas
//de la definicion de la funcion.
const arrowf = (a,b) => a*b;

//Caracteristicas
/*
    1. No son adecuadas para definir metodos en los objetos
    2. Deben ser declaradas antes de su uso
    3. No se compruba el numero de parametros pasados a la funcion
*/
let x = 10;
function cambioValor(a){
    a = 20;
}
cambioValor(x);
console.log(x); //No se cambia ya que es por valor

const persona ={
    nombre : "Juan",
    apellido : "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre ="Carlos";
    p1.apellido = "Lana";
}

cambiarValorObjeto(persona);
console.log(persona);//Si cambia cuando es un objeto

function miConcatenador(separador){
    let result = "";
    let i;

    for(i = 1; i < arguments.length; i++){
        result += arguments[i] + separador;
    }
    console.log(result);
    return result;
}

miConcatenador(", ", "red", "orange", "blue");