let lista = [];

console.log(lista.length);

lista[0] = 23;

lista[3] = 50;

console.log(lista[1]);

console.log (undefined == null);

console.log(2 == '2');

console.log(typeof(23));

let matriz = [[], [], []];

console.log(matriz);

let alvaro = [1, 2, 3];
let pablo = [2,3,4];
let otra = new Array (alvaro);

console.log(otra);

let juan = [...alvaro]; //operador spread, siempre a la izquierda de ese array

console.log(juan);

let suma = [...pablo, ...alvaro];
console.log(suma);

let frase = "Hola Mundo";
let res = [...frase];
console.log(res);

let fer = [10, 8, 10];
let pensando = [alvaro, pablo, fer];
console.log(pensando);
let uno = [...pensando[1]];
let dos = [...pensando[2]];
let tres = [...pensando];
tres[1] = dos;
tres[2] = uno;
console.log(tres);