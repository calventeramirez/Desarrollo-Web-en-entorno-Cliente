let boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", function(){
    const origen = "https://jsonplaceholder.typicode.com/comments";
    xhr = new XMLHttpRequest();
    xhr.open("GET", origen);
    xhr.addEventListener("load", function(respuesta){
        resultado = JSON.parse(respuesta.target.response);
        console.log(resultado);
        for(let i = 0; i < resultado.length; i++){
            //console.log(resultado[i].body);
            let div = document.createElement("div");
            let p = document.createElement("p");
            let cita = document.createTextNode(resultado[i].body);
            p.appendChild(cita);
            div.appendChild(p);
            document.getElementById("salida").appendChild(div);
        }
    });
    xhr.addEventListener("error", function(respuesta){
        console.log(resultado);
    });
    xhr.send();
});