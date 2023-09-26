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
console.log(resultado)