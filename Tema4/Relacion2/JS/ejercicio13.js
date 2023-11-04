let pulsado = false;
document.querySelector("p").onclick = function () {
    if(!pulsado){
        let info = document.createElement("p");
        let texto = document.createTextNode("lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.");
        info.appendChild(texto);
        document.querySelector("body").appendChild(info);
        document.querySelector("p").innerText = "Ocultar";
        pulsado = true;
    }else{
        document.querySelectorAll("p")[1].remove();
        document.querySelectorAll("p")[0].innerText = "Mostrar";
        pulsado = false;
    }
}