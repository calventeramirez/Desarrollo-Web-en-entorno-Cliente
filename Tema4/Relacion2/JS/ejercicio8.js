document.querySelector("img").onmouseover = function(){
    this.setAttribute ("src", "img/foto2.jpg");
}

document.querySelector("img").onmouseout = function(){
    this.setAttribute ("src", "img/foto1.jpg");
}