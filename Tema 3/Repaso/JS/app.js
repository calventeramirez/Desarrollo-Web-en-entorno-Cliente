//var returnArray = [];

function pedirValores(){
    let cont = 1;
    let lectura = 0;
    let arrayMat = [];
    do{
        lectura = prompt("Introduce numero: ");
        if(lectura == "*"){
            cont = 10;
        }else{
            lectura = Number(lectura);
            if(isNaN(lectura)){
                alert("Los datos introducidos no son validos.");
            }else{
                arrayMat.push(lectura);
                cont++;
            }
        }
    }while(cont < 10);
    console.log(arrayMat);
    return arrayMat;
}

function calculaResultado(arrEnt){
    let elem;
    let arrayMat = [];
    arrayMat = new Array(arrEnt.length); //Inicializo
    //opcion 1
    for(let i = 0; i < arrEnt.length; i++){
        arrayMat[i] = new Array(arrEnt.length); //Genero un array de array
        for(let j = 0; j < arrEnt.length; j++){
            arrayMat[i][j] = arrEnt[i]*(j+1);
        }
    } 
    /*opcion 2
        for(let i = 0; i <arrayEntrada.length; i++){
            returnArray[i] = [];
             for(let j = 0; j < arrEnt.length; j++){
            returnArray[i].push(arrEnt[i]*(j+1));
        }
        }
    */
   //pintaResultadoMatriz();
   pintaResultado(arrayMat);
   /*Opcion 2     
   pintaResultadoSinParametros();
   */
}

function pintaResultado(arrMat){
    let elem;
    let long = arrMat.length;
    for(let i = 0; i < long; i++){
        switch(i){
            case 0:
                elem = document.getElementById("resultado1");
                break;
            case 1:
                elem = document.getElementById("resultado2");
                break;
            case 2:
                elem = document.getElementById("resultado3");
                break;
            case 3:
                elem = document.getElementById("resultado4");
                break;
            case 4:
                elem = document.getElementById("resultado5");
                break;
            case 5:
                elem = document.getElementById("resultado6");
                break;
            case 6:
                elem = document.getElementById("resultado7");
                break;
            case 7:
                elem = document.getElementById("resultado8");
                break;
            case 8:
                elem = document.getElementById("resultado9");
                break;
            case 9:
                elem = document.getElementById("resultado10");
                break;
        }
        elem.innerHTML = arrMat[i];
        console.log("Array "+i+" "+arrMat[i]);
    }
}

/*function pintaResultadoMatriz(){
    let elem;
    let resul = "";

    for(let i = 0; i < returnArray.length; i++){
        for(let j = 0; j < returnArray[i].length; j++){
            document.write(returnArray[i][j]+" ");
        }
        document.write("<br>");
    }
    console.log("Array: "+resul);
}*/

function calcula(){
    let arrayEntrada = pedirValores();

    calculaResultado(arrayEntrada);
}