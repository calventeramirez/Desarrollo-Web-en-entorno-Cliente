let body = document.querySelector("body");
// let borrarNuevos = false;

document.querySelectorAll("button")[0].onclick = function () {
  let parra = document.createElement("p");
  let texto = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aperiam saepe eos aspernatur sed doloremque assumenda temporibus quaerat aut atque, iste itaque consequatur. Perferendis esse eaque molestiae maiores minus exercitationem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dolorum quas veritatis tenetur nemo eligendi porro a adipisci, esse rem vero at commodi modi est illum quam minima! Similique, labore?"
  );
  parra.setAttribute("class", "dos");
  parra.appendChild(texto);
  body.insertBefore(parra, body.children[body.children.length - 5]);
  document.querySelectorAll("button")[2].removeAttribute("disabled");
};

document.querySelectorAll("button")[1].onclick = function () {
  let parrafoOriginal = document.querySelectorAll("p")[0];
  body.removeChild(parrafoOriginal);
  document.querySelectorAll("button")[1].setAttribute("disabled", "");
  document.querySelectorAll("button")[3].setAttribute("disabled", "");
};

document.querySelectorAll("button")[2].onclick = function () {
  let parrafosNuevos = document.querySelectorAll("p.dos");
  for (let i = 0; i < parrafosNuevos.length; i++) {
    body.removeChild(parrafosNuevos[i]);
  }

  document.querySelectorAll("button")[2].setAttribute("disabled", "");
};

document.querySelectorAll("button")[3].onclick = function () {
    let parrafoAntiguos = document.querySelectorAll("p")[0];
    let tabla = document.createElement("table");
    tabla.innerHTML = "<tbody><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></tbody>";
    parrafoAntiguos.innerHTML = "";
    parrafoAntiguos.appendChild(tabla);

};
