document.querySelectorAll("button")[0].onclick = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    let valorAntiguo = estilo.getPropertyValue("left");
    console.log(valorAntiguo);
    let valor = parseFloat(valorAntiguo) - 5;
    console.log(valor);
    elemento.style.setProperty("left", valor + "px");
};

document.querySelectorAll("button")[1].onclick = function () {
    let elemento = document.getElementsByTagName("div")[0];
    let estilo = window.getComputedStyle(elemento);
    let valorAntiguo = estilo.getPropertyValue("left");
    console.log(valorAntiguo);
    let valor = parseFloat(valorAntiguo) + 5;
    console.log(valor);
    elemento.style.setProperty("left", valor + "px");
};

