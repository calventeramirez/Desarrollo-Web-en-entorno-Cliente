let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    let texto = document.getElementById("texto1").value;
    document.getElementById("texto2").value= texto;
});