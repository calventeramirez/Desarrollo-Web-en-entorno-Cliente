let listaPrincipal = document.querySelectorAll("li");
let pulsado1 = false;
let pulsado2 = false;
let pulsado3 = false;

listaPrincipal[0].onclick = function () {
  if (!pulsado1) {
    if(pulsado2){
        listaPrincipal[1].lastChild.remove();
        pulsado2 = false;
    }else if(pulsado3){
        listaPrincipal[2].lastChild.remove();
        pulsado3 = false;
    }
    let datosInicio = ["Portada", "Acerca de mi", "Mis fotos"];
    let listaInicio = document.createElement("ul");
    for (let i = 0; i < datosInicio.length; i++) {
      let lista = document.createElement("li");
      lista.innerHTML = datosInicio[i];
      listaInicio.appendChild(lista);
    }
    listaPrincipal[0].appendChild(listaInicio);
    pulsado1 = true;
  }else{
    listaPrincipal[0].lastChild.remove();
    pulsado1 = false;
  }
};

listaPrincipal[1].onclick = function () {
    if (!pulsado2) {
      if(pulsado1){
          listaPrincipal[0].lastChild.remove();
          pulsado1 = false;
      }else if(pulsado3){
          listaPrincipal[2].lastChild.remove();
          pulsado3 = false;
      }
      let datosProyectos = ["Web Apps", "Mobile Apps", "Juegos"];
      let listaProyectos = document.createElement("ul");
      for (let i = 0; i < datosProyectos.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML = datosProyectos[i];
        listaProyectos.appendChild(lista);
      }
      listaPrincipal[1].appendChild(listaProyectos);
      pulsado2 = true;
    }else{
      listaPrincipal[1].lastChild.remove();
      pulsado2 = false;
    }
  };

  listaPrincipal[2].onclick = function () {
    if (!pulsado3) {
      if(pulsado1){
          listaPrincipal[0].lastChild.remove();
          pulsado1 = false;
      }else if(pulsado2){
          listaPrincipal[1].lastChild.remove();
          pulsado2 = false;
      }
      let datosPortafolio = ["Paginas Webs", "Software"];
      let listaPortafolio = document.createElement("ul");
      for (let i = 0; i < datosPortafolio.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML = datosPortafolio[i];
        listaPortafolio.appendChild(lista);
      }
      listaPrincipal[2].appendChild(listaPortafolio);
      pulsado3 = true;
    }else{
      listaPrincipal[2].lastChild.remove();
      pulsado3 = false;
    }
  };