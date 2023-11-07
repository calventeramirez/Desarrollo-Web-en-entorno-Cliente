document.querySelector("input[type = 'button']").onclick = function(){
    let filas;
    let columnas;
    let div = document.querySelector("div");
    do{
         filas = Number(prompt("Introduzca el numero de filas(mayor que 0 y menor que 10):"))
    }while((filas <= 0 || filas > 10)|| isNaN(filas));

    do{
        columnas = Number(prompt("Introduzca el numero de columnas(mayor que 0 y menor que 10)"))
   }while((columnas <= 0 || columnas > 10)|| isNaN(columnas));

   let tabla = document.createElement("table");
   tabla.setAttribute("class", "tabla"); 

   for(let i = 0; i < filas; i++){
    let tr = document.createElement("tr");
    for(let j = 0; j < columnas; j++){
        let td = document.createElement("td");
        td.appendChild(document.createTextNode((i+1)));
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
   }
   
   div.appendChild(tabla);
}