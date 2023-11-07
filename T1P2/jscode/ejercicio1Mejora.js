let timer;

document.querySelectorAll("input[type = 'button']")[0].onclick = function(){
    let div1 = document.getElementById("ladoIzq");
    let div2 = document.getElementById("ladoDer");
    timer = setInterval(function(){
        div1.innerText = Math.floor((Math.random()*49)+1);
        div2.innerText = Math.floor((Math.random()*49)+1);
        document.getElementById("salida").innerText =  "";//Limpio la casilla de salida
    }, 500)
    document.querySelectorAll("input[type = 'button']")[0].setAttribute("disabled", ""); //Deshabilito el boton de generar
    document.querySelectorAll("input[type = 'button']")[1].removeAttribute("disabled");//Habilito el botón de comparar
};

document.querySelectorAll("input[type = 'button']")[1].onclick = function(){
    let div1 = document.getElementById("ladoIzq");
    let div2 = document.getElementById("ladoDer");

    let num1 = Number(div1.innerText);
    let num2 = Number(div2.innerText);
    let salida; //Variable donde se almacenara el numero mayor
    clearInterval(timer);
    num1 >= num2? salida=Number(num1):salida=Number(num2); //Compruebo cual es mayor

    document.getElementById("salida").innerText =  salida;
    document.querySelectorAll("input[type = 'button']")[1].setAttribute("disabled", "");//Dehabilito el boton de comparar
    document.querySelectorAll("input[type = 'button']")[0].removeAttribute("disabled");//Habilito el boton de generar
}