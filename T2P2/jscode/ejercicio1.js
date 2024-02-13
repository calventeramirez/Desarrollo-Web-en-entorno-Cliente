let botonA = document.querySelectorAll("input")[0];
let botonB = document.querySelectorAll("input")[1];
const url = "https://randomuser.me/api";

botonA.addEventListener("click", function(e){
    e.preventDefault();
    
    fetch(url)
    .then((respuestaCorrecta) =>{
        return respuestaCorrecta.json();
    }).then((texto) =>{
        console.log(texto);
    }).catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});

botonB.addEventListener("click", function(e){
    e.preventDefault();
    fetch(url)
    .then((respuestaCorrecta) =>{
        return respuestaCorrecta.json();
    }).then((texto) =>{
        let articulo = document.createElement("article");
        let interior = texto.results[0].name.first+ " "+ texto.results[0].name.last+" "+texto.results[0].dob.age+" años";
        let texto2 = document.createTextNode(interior);
        let img = document.createElement("img");
        img.setAttribute("src", texto.results[0].picture.medium);
        articulo.appendChild(texto2);
        articulo.appendChild(img);
        articulo.setAttribute("class", "usuario");
        document.getElementsByTagName("div")[0].appendChild(articulo);
    }).catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});