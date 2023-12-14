let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let textito = document.getElementById("texto").value;
    console.log(textito);
    if(textito.length <= 0){
        alert("Introduce tu comentario");
    }else if(textito.length > 100){
        alert("No se puede introducir mas de 100 caracteres");
    }else{
        let div = document.createElement("div");
        div.setAttribute("class", "tweet");
        textito = textito.split("");
        let textitoAuxiliar = "";
        for(let i = 0; i < 50; i++){
            textitoAuxiliar += textito[i];
        }
        let texto = document.createTextNode(textitoAuxiliar);
        div.appendChild(texto);
        document.body.appendChild(div);
    }
});