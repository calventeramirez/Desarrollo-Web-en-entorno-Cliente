document.querySelectorAll("input[type = 'button']")[0].onclick = function(){
    document.querySelectorAll("input[type = 'button']")[1].removeAttribute("disabled");
    
    let img = "img/"
    img += prompt("Dime la ruta de la imagen: img/");

    if(img == "img/"){
        img += "terra.jpg";
    }

    let div = document.getElementById("contenedor");
    let imagen = document.createElement("img");
    imagen.setAttribute("class", "foto");
    imagen.setAttribute("src", img);
    div.appendChild(imagen);
}

document.querySelectorAll("input[type = 'button']")[1].onclick = function(){
    let img = document.querySelectorAll("img");
    let div = document.getElementById("contenedor");

    for(let i = 0; i < img.length; i++){
        div.removeChild(img[i]);
    }
    document.querySelectorAll("input[type = 'button']")[1].setAttribute("disabled", "");
}