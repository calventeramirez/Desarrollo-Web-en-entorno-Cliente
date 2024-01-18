let email = document.getElementsByName("email")[0];

email.addEventListener("keyup", function(){
    let dato = email.value;
    let emailcopia = document.getElementsByName("remail")[0];
    emailcopia.value = dato;
});

let check1 = document.getElementsByName("af1")[0];
let check2 = document.getElementsByName("af2")[0];
let check3 = document.getElementsByName("af3")[0];

check1.addEventListener("click", function(){
    if(check1.checked){
        document.getElementsByTagName("textarea")[0].value += check1.value + "\n";
    } else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check1.value  + "\n", "");

    }
});

check2.addEventListener("click", function(){
    if(check2.checked){
        document.getElementsByTagName("textarea")[0].value += check2.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check2.value  + "\n", "");
    }
});

check3.addEventListener("click", function(){
    if(check3.checked){
        document.getElementsByTagName("textarea")[0].value += check3.value + "\n";
    }else{
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(check3.value  + "\n", "");
    }
});

let botonEnviar = document.querySelectorAll("input")[16];

botonEnviar.addEventListener("click", function(evt){
    evt.preventDefault();
    if(comprobarNombre() && tamContrasena() && coincidenciaContrasena() && comprobacionContraNombre() && comprobacionPregunta() && comprobacionRespuesta() && comprobarSexo() && comprobacionEdad() && comprobacionCatchap() && comprobarCondiciones()){
        
        window.open("resultado.html");
    }
});

function comprobarNombre(){
    let nombre = document.getElementsByName("nombre")[0];
    if(nombre.value.length == 0){
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. El nombre no esta bien");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }
    return true;
}

function tamContrasena(){
    let contrasena = document.getElementsByName("clave")[0];
    console.log(contrasena.value.length);
    if(contrasena.value.length < 8){
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. El tamaño de la contraseña no es correcto, debe ser de al menos 8 caracteres");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }
    return true;
}

function coincidenciaContrasena(){
    let contrasena = document.getElementsByName("clave")[0];
    let repContra = document.querySelectorAll("input")[2];
    if(contrasena.value == repContra.value){
        return true
    }else{
        contrasena.value = "";
        repContra.value = "";
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. No coincide las contraseñas");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }
}

function comprobacionContraNombre(){
    let contrasena = document.getElementsByName("clave")[0];
    let nombre = document.getElementsByName("nombre")[0];

    if(contrasena.value == nombre.value){
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. El nombre coincide con la clave");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }

    return true;
}

function comprobacionPregunta(){
    let pregunta = document.getElementsByName("pregunta")[0];
    if(pregunta.value == 0){
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. Seleccione alguna pregunta");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }
    return true;
}

function comprobacionRespuesta(){
    let respuesta = document.getElementsByName("respuesta")[0];

    if(respuesta.value.length == 6){
        return true;
    }
    let error = document.createElement("p");
    let texto = document.createTextNode("Error. La respuesta es incorrecta, debe tener 6 caracteres");
    error.setAttribute("id", "errores");
    error.appendChild(texto);
    document.body.appendChild(error);
    return false;
}

function comprobarSexo(){
    let sexo1 = document.getElementsByName("sexo")[0];
    let sexo2 = document.getElementsByName("sexo")[1];
    let sexo3 = document.getElementsByName("sexo")[2];
    if(sexo1.checked || sexo2.checked || sexo3.checked){
        return true;
    }
    let error = document.createElement("p");
    let texto = document.createTextNode("Error. Seleccione el sexo");
    error.setAttribute("id", "errores");
    error.appendChild(texto);
    document.body.appendChild(error);
    return false;
}

function comprobacionEdad(){
    let edad = document.getElementsByName("edad")[0];
    if(edad.value < 3 || edad.value > 99){
        let error = document.createElement("p");
        let texto = document.createTextNode("Error. Error la edad debe estar entre 3 y 99 años");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
        return false;
    }
    return true;
}

function comprobacionCatchap(){
    let catpcha = document.querySelectorAll("input")[13];

    if(catpcha.value === "QGPHJD") return true;
    let error = document.createElement("p");
        let texto = document.createTextNode("Error. Catchap incorrecto");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
    return false;
}

function comprobarCondiciones(){
    let condiciones = document.querySelectorAll("input")[14];
    
    if(condiciones.checked) return true
    let error = document.createElement("p");
        let texto = document.createTextNode("Error. Seleccione la condicion");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.body.appendChild(error);
    return false;
}

