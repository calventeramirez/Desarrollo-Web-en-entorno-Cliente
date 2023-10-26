document.querySelectorAll("div")[0].onmouseenter = function(){
    this.style.setProperty("background-color", "purple");
}
document.querySelectorAll("div")[0].onmouseout = function(){
    this.style.setProperty("background-color", "red");
}

document.querySelectorAll("div")[1].onmouseenter = function(){
    this.style.setProperty("background-color", "green");
}
document.querySelectorAll("div")[1].onmouseout = function(){
    this.style.setProperty("background-color", "yellow");
}

document.querySelectorAll("div")[2].onmouseenter = function(){
    this.style.setProperty("background-color", "blue");
}
document.querySelectorAll("div")[2].onmouseout = function(){
    this.style.setProperty("background-color", "green");
}