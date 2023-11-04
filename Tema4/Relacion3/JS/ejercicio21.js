document.querySelectorAll("a")[0].onmouseenter = function () {
    let divi = document.createElement("div");
    let enlace = document.querySelectorAll("a")[0].getAttribute("href");
    let letras = document.createTextNode("La URL de este enlace es: "+enlace);
    divi.setAttribute("class", "divi");
    divi.appendChild(letras);
    document.body.appendChild(divi);
};

document.querySelectorAll("a")[0].onmouseout = function () {
    document.body.removeChild(document.querySelectorAll("div")[0]);
};

document.querySelectorAll("a")[1].onmouseenter = function () {
    let divi = document.createElement("div");
    let enlace = document.querySelectorAll("a")[1].getAttribute("href");
    let letras = document.createTextNode("La URL de este enlace es: "+enlace);
    divi.setAttribute("class", "divi");
    divi.appendChild(letras);
    document.body.appendChild(divi);
};

document.querySelectorAll("a")[1].onmouseout = function () {
    document.body.removeChild(document.querySelectorAll("div")[0]);
};

document.querySelectorAll("a")[2].onmouseenter = function () {
    let divi = document.createElement("div");
    let enlace = document.querySelectorAll("a")[2].getAttribute("href");
    let letras = document.createTextNode("La URL de este enlace es: "+enlace);
    divi.setAttribute("class", "divi");
    divi.appendChild(letras);
    document.body.appendChild(divi);
};

document.querySelectorAll("a")[2].onmouseout = function () {
    document.body.removeChild(document.querySelectorAll("div")[0]);
};