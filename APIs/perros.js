window.onload = () => {
    const origen = "https://dog.ceo/api/breeds/image/random";
    xhr = new XMLHttpRequest();
    xhr.open("GET", origen);
    xhr.addEventListener("load", function(respuesta){
        resultado = JSON.parse(respuesta.target.response);
        
    });
}