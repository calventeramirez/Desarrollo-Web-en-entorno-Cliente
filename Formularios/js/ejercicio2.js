let caja1 = document.getElementById("texto1");
caja1.addEventListener("keyup", function () {
    let texto = document.getElementById("texto1").value;
    document.getElementById("texto2").value= texto;
});