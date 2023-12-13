let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 = document.getElementById("palabra2").value;

    if (palabra1 == "" || palabra2 == "") {
        alert("No has introducido ninguna palabra");
        return;
    }

    //Corto palabra a palabra y las ordeno
    let carPal1 = palabra1.split("").sort();
    let carPal2 = palabra2.split("").sort();
    
    console.log(carPal1);
    console.log(carPal2);

    //Compruebo si son anagramas
    if (carPal1.length != carPal2.length) {
        alert("No son anagramas");
        return;
    }
    for(let i = 0; i < carPal1.length; i++){
        if(carPal1[i] != carPal2[i]){
            alert("No son anagramas");
            return;
        }
    }
    alert("Son anagramas");
});