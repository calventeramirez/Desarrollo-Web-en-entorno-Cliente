let boton = document.getElementsByTagName("button")[0];
let seccion1 = document.getElementsByTagName("section")[0];
let seccion2 = document.getElementsByTagName("section")[1];

boton.addEventListener("click", function(e){
    e.preventDefault();
    const origen = "https://fakestoreapi.com/products";
    xhr = new XMLHttpRequest();
    xhr.open("GET", origen);
    xhr.addEventListener("load", function(respuesta){
        resultado = JSON.parse(respuesta.target.response);
        let div = document.createElement("div");
        for(let i = 0; i < resultado.length; i++){
            let p = document.createElement("p");
            let texto = document.createTextNode(resultado[i].title);
            p.appendChild(texto);
            p.addEventListener("mouseenter", function(){
                if(seccion2.firstChild)
                    seccion2.removeChild(seccion2.firstChild)
                let img = document.createElement("img");
                img.setAttribute("src", resultado[i].image);
                seccion2.appendChild(img);
            });
            div.appendChild(p);
        }
        seccion1.appendChild(div);
    });
    xhr.addEventListener("error", function(respuesta){
        console.log(respuesta);
    });
    xhr.send();
});

