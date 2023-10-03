var returnArray = [];

function pedirValores(){
    let cont = 1;
    let lectura = 0;
    do{
        lectura = prompt("Introduce numero: ");
        if(lectura == "*"){
            contador = 10;
        }else{
            lectura = Number(lectura);
            if(isNaN(lectura)){
                alert("Los datos introducidos no son validos.");
            }else{
                returnArray.push(lectura);
                cont++;
            }
        }
    }while(contador < 10);
    return returnArray;
}

function calculaResultado(arrEnt){
    let elem;
    
}

function calcula(){
    let arrayEntrada = pedirValores();

    calculaResultado(arrayEntrada);
}