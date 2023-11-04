document.querySelector("button").onclick = function () {
    let lista = document.querySelector("ul");
    let elemento = document.createElement("li");
    let texto = prompt("Introduce el texto del elemento");
    elemento.innerText = texto;
    lista.appendChild(elemento);
}
