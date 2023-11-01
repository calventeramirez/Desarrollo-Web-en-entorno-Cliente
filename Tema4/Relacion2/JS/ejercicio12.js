document.querySelectorAll("button")[0].onclick = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    let valorAntiguo = estilo.getPropertyValue("left");
    let valor = parseFloat(valorAntiguo) - 5;
    if(valor >= 0){
        elemento.style.setProperty("left", valor + "px");
    }
};

document.querySelectorAll("button")[1].onclick = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    let valorAntiguo = estilo.getPropertyValue("left");
    let valor = parseFloat(valorAntiguo) + 5;
    if(valor <= 1080){
        elemento.style.setProperty("left", valor + "px");
    }  
};

document.querySelector("img").onmouseenter = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    let valorAntiguo = estilo.getPropertyValue("left");
    let valor = parseFloat(valorAntiguo) + 25;
    if(valor <= 1080){
        elemento.style.setProperty("left", valor + "px");
    }  
}

document.querySelectorAll("button")[2].onclick = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    elemento.style.setProperty("left", "0px");
}