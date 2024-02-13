let botonObtener = document.querySelectorAll("input[type='button']")[0];
let botonEnviar = document.querySelectorAll("input[type='submit']")[0];
let div = document.getElementById("salida");
const url1 = "http://www.jaimeweb.es/medac/getProfesores.php";
const url2 = "http://www.jaimeweb.es/medac/setProfesores.php";

botonObtener.addEventListener("click", function(e){
    e.preventDefault();

    //Vacio el div y lo vuelvo a generar
    div.remove();
    div = document.createElement("div");
    div.setAttribute("id", "salida");

    document.body.appendChild(div);
    fetch(url1)
    .then((respuestaCorrecta) =>{
        return respuestaCorrecta.json();
    }).then((texto) =>{
        for(let i = 0; i < texto.length; i++){
            let section = document.createElement("section");
            let dni = texto[i].dni;
            let nombre = texto[i].nombre;
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            p1.appendChild(document.createTextNode(dni));
            p2.appendChild(document.createTextNode(nombre));
            section.appendChild(p2);
            section.appendChild(p1);
            section.setAttribute("class", "ficha");
            div.appendChild(section);
        }
        
    }).catch((respuestaIncorrecta)=>{
        console.log("Problema con el fetch: "+respuestaIncorrecta);
    });
});

botonEnviar.addEventListener("click", function(e){
    e.preventDefault();
    xhr = new XMLHttpRequest();

    xhr.open("POST", url2);

    let formulario = document.querySelectorAll("form")[1];
    let fd = new FormData();

    fd.append("nombre", formulario.nombre.value);
    fd.append("dni", formulario.dni.value);
    fd.append("edad", formulario.edad.value);

    xhr.addEventListener("load", function(respuesta){
        let resultado = JSON.parse(respuesta.target.response);
        div.remove();
        div = document.createElement("div");
        div.setAttribute("id", "salida");
        document.body.appendChild(div);
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(resultado));
        div.appendChild(p);
    });
    xhr.addEventListener("error", function(respuesta){
        console.log(respuesta);
    });
    xhr.send(fd);
});