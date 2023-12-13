//Apartado A) 
//let boton = document.getElementById("boton");

// boton.addEventListener("click", function () {
//     let check1 = document.getElementById("cb1");
//     let check2 = document.getElementById("cb2");
//     let check3 = document.getElementById("cb3");
//     let check4 = document.getElementById("cb4");
//     let check5 = document.getElementById("cb5");
//     let texto = "";
//     if(check1.checked){
//         texto += check1.value + "\n";
//     }
//     if(check2.checked){
//         texto += check2.value + "\n";
//     }
//     if(check3.checked){
//         texto += check3.value + "\n";
//     }
//     if(check4.checked){
//         texto += check4.value + "\n";
//     }
//     if(check5.checked){
//         texto += check5.value + "\n";
//     }
//     document.getElementsByTagName("textarea")[0].value = texto;
// });

//Apartado B)
let check1 = document.getElementById("cb1");
let check2 = document.getElementById("cb2");
let check3 = document.getElementById("cb3");
let check4 = document.getElementById("cb4");
let check5 = document.getElementById("cb5");

check1.addEventListener("click", function () {
    if(check1.checked){
        document.getElementsByTagName("textarea")[0].value += check1.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check1.value + "\n", "");
    }
});

check2.addEventListener("click", function () {
    if(check2.checked){
        document.getElementsByTagName("textarea")[0].value += check2.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check2.value + "\n", "");
    }
});

check3.addEventListener("click", function () {
    if(check3.checked){
        document.getElementsByTagName("textarea")[0].value += check3.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check3.value + "\n", "");
    }
});

check4.addEventListener("click", function () {
    if(check4.checked){
        document.getElementsByTagName("textarea")[0].value += check4.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check4.value + "\n", "");
    }
});

check5.addEventListener("click", function () {
    if(check5.checked){
        document.getElementsByTagName("textarea")[0].value += check5.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check5.value + "\n", "");
    }
});