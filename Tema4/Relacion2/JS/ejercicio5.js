document.querySelector("p").onclick = function () {
    let parrafo = document.querySelector("p");
    parrafo.getAttribute("class") == "uno" ? parrafo.setAttribute("class", "dos") : parrafo.setAttribute("class", "uno");
}