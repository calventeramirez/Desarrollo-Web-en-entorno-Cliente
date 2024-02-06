document.querySelector("button").addEventListener("click", (e) =>{
    e.preventDefault();
    let salida = document.getElementById("salida");
    const url = "libros.json";
    
    const opciones ={
        method:"GET",
        headers:{
            "X-RapidAPI-Key": "",
            "X-RapidAPI-Host":""
        }
    }

    fetch(url, opciones)
    .then((respuestaCorrecta) => {
        //return respuestaCorrecta.text();
        return respuestaCorrecta.json();
    }).then((texto) => { //Promesa del .text() que es necesaria si o si
        //Aqui iria la funcion para mostrar el json como queramos
        salida.innerHTML = texto;
        texto = texto.library.book;
        let plantilla ="";
        for(const post of texto){
            plantilla += "<h3>"+post.title+"</h3>";
            plantilla += "<p>"+post.body+"</p>";
        }
        salida.innerHTML = plantilla;
    })
    .catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});