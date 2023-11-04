let listaPrincipal = document.querySelectorAll("li");

listaPrincipal[0].onmouseenter = function () {
  let datosInicio = ["Portada", "Acerca de mi", "Mis fotos"];
  let listaInicio = document.createElement("ul");
  for (let i = 0; i < datosInicio.length; i++) {
    let lista = document.createElement("li");
    lista.innerHTML = datosInicio[i];
    listaInicio.appendChild(lista);
  }
  listaPrincipal[0].appendChild(listaInicio);
};

listaPrincipal[0].onmouseout = function () {
  listaPrincipal[0].lastChild.remove();
};

listaPrincipal[1].onmouseenter = function () {
  let datosProyectos = ["Web Apps", "Mobile Apps", "Juegos"];
  let listaProyectos = document.createElement("ul");
  for (let i = 0; i < datosProyectos.length; i++) {
    let lista = document.createElement("li");
    lista.innerHTML = datosProyectos[i];
    listaProyectos.appendChild(lista);
  }
  listaPrincipal[1].appendChild(listaProyectos);
};
listaPrincipal[1].onmouseout = function () {
  listaPrincipal[1].lastChild.remove();
};

listaPrincipal[2].onmouseenter = function () {
    let datosPortafolio = ["Paginas Webs", "Software"];
    let listaPortafolio = document.createElement("ul");
    for (let i = 0; i < datosPortafolio.length; i++) {
      let lista = document.createElement("li");
      lista.innerHTML = datosPortafolio[i];
      listaPortafolio.appendChild(lista);
    }
    listaPrincipal[2].appendChild(listaPortafolio);
};

listaPrincipal[2].onmouseout = function () {
  listaPrincipal[2].lastChild.remove();
};