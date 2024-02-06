const alsa = [
    {
        nombre: "Pablo",
        precio: 450,
        localidad: "Nerja"
    },
    {
        nombre: "Aaron",
        precio: 350,
        localidad: "San Pedro"
    },
    {
        nombre: "Nico",
        precio: 750,
        localidad: "Alhaurin"
    },
    {
        nombre: "Fernando",
        precio: 150,
        localidad: "Motel de al lado"
    },
    {
        nombre: "Dani",
        precio: 7850,
        localidad: "Torremolinos"
    }
]

function getAlsa(){
    return new Promise(function(resolve, reject){
        if(alsa.length == 0) reject("No hay datos en el array");
        setTimeout(()=>{
            resolve(alsa);
        }, 3000);
    });
}

// console.log(getAlsa());
//Con Promesas y then catch
// getAlsa()
// .then((respuestaCorrecta)=>{
//     console.log(respuestaCorrecta);
// })
// .catch((respuestaIncorrecta) =>{
//     console.log(respuestaIncorrecta);
// });
//Con async y await
async function mostrarAlsa(){
    const lista = await getAlsa();
    console.log(lista);
}
mostrarAlsa();
console.log("Soy el segundo");
console.log("Soy el tercero");