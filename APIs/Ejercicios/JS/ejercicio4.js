let boton = document.getElementsByTagName("button")[0];
let lista = document.getElementById("tareas");
let resultado;

const origen = "https://jsonplaceholder.typicode.com/todos";
xhr = new XMLHttpRequest();
xhr.open("GET", origen);
xhr.addEventListener("load", function(respuesta){
    resultado = JSON.parse(respuesta.target.response);
    //console.log(resultado);
    for(let i = 0; i < resultado.length; i++){
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let text1 = document.createTextNode("Titulo: "+resultado[i].title);
        let text2 = document.createTextNode("Estado: "+resultado[i].completed);
        let boton2 = document.createElement("input");
        boton2.setAttribute("type", "button");
        boton2.setAttribute("value", "Cambiar de estado");
        li1.appendChild(text1);
        li2.appendChild(text2);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(boton2);
        boton2.addEventListener("click", function(){
            if(resultado[i].completed == "false"){
                li2.removeChild(text2);
                text2 = "Estado: true";
                li2.appendChild(text2);
                ul.appendChild(li2);
            }else{
                li2.removeChild(text2);
                text2 = "Estado: false";
                li2.appendChild(text2);
                ul.appendChild(li2);
            }
        });
        ul.setAttribute("class", "listas");
        lista.appendChild(ul);
    }
});
xhr.addEventListener("error", function(respuesta){
    console.log(respuesta);
});
xhr.send();