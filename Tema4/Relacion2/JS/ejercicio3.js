document.querySelectorAll("button")[0].onclick = function () {
  document.querySelector("div").innerText =
    parseInt(document.querySelector("div").innerText) + 1;
};

document.querySelectorAll("button")[1].onclick = function () {
  document.querySelector("div").innerText =
    parseInt(document.querySelector("div").innerText) - 1;
};
