let monedas = document.getElementById("monedas");
let contador = 0;

document.querySelector("button").onclick = function () {
    document.querySelectorAll("button")[0].setAttribute("disabled", "disabled");
    let timer = setInterval(function () {
        let valorAntiguo = document.getElementById("carga").value;
        let valorActual = parseInt(valorAntiguo) + 1;
        document.getElementById("carga").value = valorActual;
        if(valorActual == 100){
            clearInterval(timer);
            alert("Moneda obtenida")
            contador++;
            monedas.innerText = contador;
            document.getElementById("carga").value = 0;
            document.querySelectorAll("button")[0].removeAttribute("disabled");
        }
    }, 50); 
};
