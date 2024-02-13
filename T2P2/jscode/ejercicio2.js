let boton = document.querySelector("input");
const url = "http://www.jaimeweb.es/medac/datos.json";
boton.addEventListener("click", function(e){
    e.preventDefault();
    fetch(url)
    .then((respuestaCorrecta) =>{
        return respuestaCorrecta.json();
    }).then((texto) =>{
        for(let i = 0; i < texto.length; i++){
            // Apartado B, sacar por consola los objetos
            console.log(texto[i]); 
        }
        for(let i = 0; i < texto.length; i++){
            //Apartado C
            console.log(texto[i].id);
            console.log(texto[i].nombre);
            console.log(texto[i].email);
            console.log(texto[i].estado);
        }

    }).catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});