let cliente = {
    nombre: "Alicia",
    apellidos: "Ortega",
    estado: 1,
    titulaciones:["Bioquimica", "Veterinaria", "Biologia"],
    test:{
        psicotecnico: 9,
        aptitudes: 8.6,
        equipo: 7.45
    }
}


console.log(cliente.apellidos);

let cadena = JSON.stringify(cliente, null, 0); //diferentes tipos de tabulado en donde el 0, el general es un 4. Null es una funcion de filtrado que habria que poner
console.log(cadena);

let otracadena = '{"nombre": "jaime", "edad": 56, "profesion": "luser"}';
let profe = JSON.parse(otracadena);
console.log(profe);

let objeto = {a:1, b:2, c:3};
let cadena2 = JSON.stringify(objeto, function(key, val){
    if(key == 'a') return (val*2);
    else return val;
});

console.log(cadena2);