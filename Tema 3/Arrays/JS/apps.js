function calcula(params){
    let arraySuma = [];
    for(let i = 0; i < params.length; i++){
        if(i == 0){
            arraySuma[i] = params[i];
        }else{
            let sum = 0
            for(let j = i; j >= 0; j--){
                sum += params[j];
            }
            arraySuma[i] = sum;
        }
    }
    let elem = document.getElementById("resultado");
    let resultado = "La suma es: "+ arraySuma;
    console.log(resultado);
    elem.innerHTML = resultado;
}
var a = 0;
var b = 0;
function pedirValores(){
    a = prompt("Introduzca el primer numero: ");
    b = prompt("Introduzca el segundo numero");
    
    a = Number(a);
    b = Number(b);
    
    if(isNaN(a) || isNaN(b) || a < 0 || b < 0){
        a = 0;
        b = 0;
        alert("No son validos los numeros");
    }
}
function ejArray(){
    pedirValores();
    let arrRes = [];
    arrRes.push(a);
    for(i = 2; i < (b+1); i++){
        arrRes.push((i*a));
    }
    let elem = document.getElementById("resultado2");
    let resultado2 = arrRes;
    elem.innerHTML = resultado2;
}

var n = 0;


function matriz(){
    do{
        n = prompt("Dame el tamaño de la matriz: ");
        n = Number(n);
    }while(isNaN(n) || n < 2);
    
    let array = [];
    let cont = 1;
    for(let i = 0; i < n; i++){
        array[i] = new Array(n);
        for(let j = 0; j < n; j++){
            array[i][j] = n * cont;
            cont++;
        }
    }
    let elem = document.getElementById("resultado3");
    let resultado3 = array;
    elem.innerHTML = resultado3;
}