window.onload = () => {
    // const origen = "texto.txt";
    // const origen = "libros.json";
    const origen = "https://rickandmortyapi.com/api/character/";
    //let salida = document.querySelector("section");

    //1 - Creo el objeto
    xhr = new XMLHttpRequest();

    //2- Hago la petición 
    xhr.open("GET", origen);
    //3 - Definir los manejadores de eventos en caso de exito o error
    xhr.addEventListener("load", function(respuesta){
        console.log("todo ok");
        resultado = JSON.parse(respuesta.target.response); //Si es para un JSON

        /* Para JSON en local
        for (const libro of resultado.library) {
            salida.innerHTML += `<div>${libro.book.title} <<>> ${libro.book.pages} paginas</div>`
        }*/
        //salida.innerHTML = `<div>${resultado.library[0].book.title}</div>` //Si no tengo JSON

        /*Para APIS en la web*/
        pintarResultados(resultado.results);
        console.log(resultado);
    });

    xhr.addEventListener("error", function(respuesta){
        console.log("Error");
        console.log((respuesta));
    });
    //4 - Realizar el envio de datos
    xhr.send();

    //Esto no es asincrono
    console.log("Soy la ultima en aparecer");

    function pintarResultados(listaPersonaje){
        let salida = document.querySelector("section");
        for (const personaje of listaPersonaje) {
            let img = document.createElement("img");
            img.setAttribute("src", personaje.image);
            let h1 = document.createElement("h1");
            let texto = document.createTextNode(personaje.name);
            h1.appendChild(texto);
            salida.appendChild(h1);
            salida.appendChild(img);
        }
    }
}