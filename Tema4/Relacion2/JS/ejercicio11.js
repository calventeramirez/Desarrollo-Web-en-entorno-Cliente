document.querySelectorAll("div")[0].onmouseenter = function(){
    document.querySelectorAll("div")[1].style.setProperty("visibility", "visible")
}
document.querySelectorAll("div")[0].onmouseout = function(){
    document.querySelectorAll("div")[1].style.setProperty("visibility", "hidden")
}

document.querySelectorAll("div")[2].onmouseenter = function(){
    document.querySelectorAll("div")[1].style.setProperty("display", "")
}
document.querySelectorAll("div")[2].onmouseout = function(){
    document.querySelectorAll("div")[1].style.setProperty("display", "none")
}