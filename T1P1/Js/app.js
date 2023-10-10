//Ejercicio 1
function gramosAKilos(){
    let gramos;
    do{
        gramos = prompt("Introduzca los gramos a convertir");
        if(Number(gramos) <= 0 || isNaN(gramos)){
            alert("Introduce un numero mayor que 0 por favor");
        }
    }while(Number(gramos) <= 0 || isNaN(gramos));

    gramos = Number(gramos);

    alert(gramos+" equivalen a "+(gramos/1000));
    console.log(gramos+" equivalen a "+(gramos/1000));
}

//Ejercicio 2
function comprobarSupMedia(num, media){
    if(Number(num) > (media) && !(Number(num) > (media*2))){
         return (num + " ");
    }else{
        return "";
    }
}

function comprobarSupMedDoble(num, media){
    if(Number(num) > (media*2)){
        return (num + " ");
    }else{
        return "";
    }
}

function pedirNumero(num){
    let variable;
    do{
        variable = prompt("Introduce un numero mayor que 0 en la posicion "+num+":");
        if(Number(variable <= 0 || isNaN(variable))){
            alert("Introduce un numero mayor que 0 por favor");
        }
    }while(Number(variable <= 0 || isNaN(variable)));
    return variable;
}

function mayor(){
    let num1, num2,num3,num4,num5,num6,num7,num8,num9,num10;
    num1 = Number(pedirNumero(1));
    num2 = Number(pedirNumero(2));
    num3 = Number(pedirNumero(3));
    num4 = Number(pedirNumero(4));
    num5 = Number(pedirNumero(5));
    num6 = Number(pedirNumero(6));
    num7 = Number(pedirNumero(7));
    num8 = Number(pedirNumero(8));
    num9 = Number(pedirNumero(9));
    num10 = Number(pedirNumero(10));

    let media = (num1+num2+num3+ num4+ num5+num6+num7+num8+num9+num10)/10;
    let salidaSupMedia = "Supera la media: ";
    salidaSupMedia += comprobarSupMedia(num1, media);
    salidaSupMedia += comprobarSupMedia(num2, media);
    salidaSupMedia += comprobarSupMedia(num3, media);
    salidaSupMedia += comprobarSupMedia(num4, media);
    salidaSupMedia += comprobarSupMedia(num5, media);
    salidaSupMedia += comprobarSupMedia(num6, media);
    salidaSupMedia += comprobarSupMedia(num7, media);
    salidaSupMedia += comprobarSupMedia(num8, media);
    salidaSupMedia += comprobarSupMedia(num9, media);
    salidaSupMedia += comprobarSupMedia(num10, media);

    let superaDoble = "Supera el doble de la media: ";
    superaDoble += comprobarSupMedDoble(num1, media);
    superaDoble += comprobarSupMedDoble(num2, media);
    superaDoble += comprobarSupMedDoble(num3, media);
    superaDoble += comprobarSupMedDoble(num4, media);
    superaDoble += comprobarSupMedDoble(num5, media);
    superaDoble += comprobarSupMedDoble(num6, media);
    superaDoble += comprobarSupMedDoble(num7, media);
    superaDoble += comprobarSupMedDoble(num8, media);
    superaDoble += comprobarSupMedDoble(num9, media);
    superaDoble += comprobarSupMedDoble(num10, media);
    
    alert(salidaSupMedia+". "+superaDoble+". Valor medio: "+media);
    console.log(salidaSupMedia+". "+superaDoble+". Valor medio: "+media);

}

//Ejercicio 3
function array(){
    let tam;
    do{
        tam = prompt("Introduce un numero entre 5 y 10: ");
        if(Number((Number(tam) < 5 || Number(tam) > 10)|| isNaN(tam))){
            alert("Introduce un numero entre 5 y 10 por favor");
        }
    }while(Number((Number(tam) < 5 || Number(tam) > 10)|| isNaN(tam)));
    tam = Number(tam);

    let arraisito = [];
    for(let i = 0; i < tam; i++){
        arraisito.push(Math.floor(Math.random()*10));
    }

    let salidaArray = "La salida del array es: ";
    let media = 0;
    for(let i = 0; i < tam; i++){
        salidaArray += arraisito[i]+" ";
        media += arraisito[i];
    }
    console.log(salidaArray);
    
    media /= tam;
    let supMedia = "Los elementos que superan la media es: ";
    for(let i = 0; i < tam; i++){
        if(arraisito[i] > media){
            supMedia += arraisito[i]+" ";
        }
    }
    console.log(supMedia);
}

//Ejercicio 4

function matriz(){
    let tam;
    do{
        tam = prompt("Introduce un numero entre 2 y 5: ");
        if(Number((Number(tam) < 2 || Number(tam) > 5)|| isNaN(tam))){
            alert("Introduce un numero entre 2 y 5 por favor");
        }
    }while(Number((Number(tam) < 2 || Number(tam) > 5)|| isNaN(tam)));
    tam = Number(tam);
    let matrizita = [];
    //Apartado A
    for(let i = 0; i < tam; i++){
        let mAux = [];
        for(let j = 0; j < tam; j++){
            mAux.push(Math.floor(Math.random()*99)+1);
        }
        matrizita.push(mAux);
    }
    //Apartado B
    let media = 0;
    let salida = "";
    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            if(matrizita[i][j] < 10){
                salida += "0"+matrizita[i][j]+" ";
                media += matrizita[i][j];
            }else{
                salida += matrizita[i][j]+" ";
                media += matrizita[i][j];
            }
        }
        salida += "\n";
    }
    console.log(salida);
    //Apartado C
    media /= (tam*tam);
    console.log("La media de los elementos de la matriz es: "+media);

    //Apartado D
    let resultado = [];
    let mAux = [];
    let mAux2 = [];
    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            if(matrizita[i][j] > media){
                mAux.push(matrizita[i][j]);
            }else if (matrizita[i][j] < media){
                mAux2.push(matrizita[i][j]);
            }
        }
    }
    resultado.push(mAux);
    resultado.push(mAux2);

    let salida2 = "";
    for(let i = 0; i < resultado.length; i++){
        for(let j = 0; j < resultado[i].length; j++){
            if(resultado[i][j] < 10){
                salida2 += "0"+resultado[i][j]+" ";
            }else{
                salida2 += resultado[i][j]+" ";
            }
        }
        salida2 += "\n";
    }
    console.log(salida2);

    //Apartado E
    let resultadoFinalOrdenado = [];
    let tipoOrd;
    do{
        tipoOrd = prompt("Introduce 0 si quieres odenar ascendentemente y 1 si quieres ordenar descendentemente: ");
        if(Number((Number(tipoOrd) < 0 || Number(tipoOrd) > 1)|| isNaN(tipoOrd))){
            alert("Introduce 0 o 1 por favor");
        }
    }while(Number((Number(tipoOrd) < 0 || Number(tipoOrd) > 1)|| isNaN(tipoOrd)));
    tipoOrd = Number(tipoOrd);
    if(tipoOrd === 0){
        mAux.sort(function (a,b){
            return a-b;
        });
        mAux2.sort(function (a,b){
            return a-b;
        })
    }else if(tipoOrd === 1){
        mAux.sort((a,b) => (a > b ? -1 : 0));
        mAux2.sort((a,b) => (a > b ? -1 : 0));
    }
    resultadoFinalOrdenado.push(mAux);
    resultadoFinalOrdenado.push(mAux2);
    console.log(resultado);
}