//Array
let autos = ["BMW", "Audi", "Volvo"];
console.log(autos);

let pets = new Array("dog", "cat", "rabbit");
let pet = pets[0];
console.log(pet);

let people = ["Jose", "Antonio", "Juan", "Luis"];
people.length; //la longitud es 4

let resultado = "";
for(let i = 0; i < people.length; i++){
    resultado += people[i] + ", ";
}
console.log(resultado);

people.push("Carlos");//Añade al final del Array
console.log(people);

people.pop(); //Quita el ultimo elemento del array
console.log(people);

people.shift(); //Quita el primer elemento del array
console.log(people);

people.unshift("Pepe");//Añadimos en el primer elemento del array y devuelve la longitud del array tras haberlo añadido al array
console.log(people);

people.sort();//Ordena el array
console.log(people);

people.reverse();//Invierte el array
console.log(people);

let pos = people.indexOf("Pepe"); //Devuelve la posicion de el argumento
console.log(pos);

let elemElim = people.splice(pos,2); //Elimina elementos tanto como se indique
console.log(people);
console.log(elemElim);

let copiaArray = people.slice(); //Copiamos Array
console.log(copiaArray);

//Funcion para llamar a un array
function llamame_Array(params){
    for(i = 0; i < params.length; i++){
        alert(params[i])
    }
}