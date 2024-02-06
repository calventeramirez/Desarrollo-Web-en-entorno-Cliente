document.querySelector("button").addEventListener("click", (e) =>{
    e.preventDefault();
    let salida = document.getElementById("salida");
    const url = "libros.json";
    
    fetch(url)
    .then((respuestaCorrecta) => {
        //return respuestaCorrecta.text();
        return respuestaCorrecta.json();
    }).then((texto) => { //Promesa del .text() que es necesaria si o si
        //Aqui iria la funcion para mostrar el json como queramos
        salida.innerHTML = texto;
    })
    .catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});