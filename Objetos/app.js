let TUTOR = {
    nombre : "Pepe",
    edad : 33,
    dni : "12345678W",
    titulo_universitario : "XXX",
    mostrar(){
        return "Tutor:\nNombre: "+this.nombre+"\nEdad: "+this.edad+"\nDNI: "+this.dni+"\nTitulo Universitario: "+this.titulo_universitario;
    },
    cambiarNombre(nuevo){
        this.nombre = nuevo;
    }
}
let ASIGNATURA1 = {
    nombre : "Programacion",
    curso : 1,
    horas_totales : 30,
    mostrar(){
        return "Asignatura 1:\nNombre: "+this.nombre+"\nCurso:"+this.curso+"\nHoras Totales: "+this.horas_totales;
    },
    cambiarHoras(nueva){
        this.horas_totales = nueva;
    }
}

let ASIGNATURA2 = {
    nombre : "Programacion 2",
    curso : 2,
    horas_totales : 20,
    mostrar(){
        return "Asignatura 1:\nNombre: "+this.nombre+"\nCurso:"+this.curso+"\nHoras Totales: "+this.horas_totales;
    },
    cambiarHoras(nueva){
        this.horas_totales = nueva;
    }
}

let ASIGNATURA3 = {
    nombre : "Lenguajes de marca",
    curso : 1,
    horas_totales : 50,
    mostrar(){
        return "Asignatura 1:\nNombre: "+this.nombre+"\nCurso:"+this.curso+"\nHoras Totales: "+this.horas_totales;
    },
    cambiarHoras(nueva){
        this.horas_totales = nueva;
    }
}

let ASIGNATURA4 = {
    nombre : "Clientes",
    curso : 2,
    horas_totales : 35,
    mostrar(){
        return "Asignatura 1:\nNombre: "+this.nombre+"\nCurso:"+this.curso+"\nHoras Totales: "+this.horas_totales;
    },
    cambiarHoras(nueva){
        this.horas_totales = nueva;
    }
}

let ASIGNATURATOTALES = [
    ASIGNATURA1, ASIGNATURA2, ASIGNATURA3, ASIGNATURA4
]



let ALUMNO = {
    nombre : "Paco",
    edad : 20,
    ciclo : "DAW",
    curso : 2,
    tutor : TUTOR,
    lista_asignaturas : ASIGNATURATOTALES,
    nota_media : [6,7,5,9],
    calcularMedia(){
        let sum = 0;
        for(let i = 0; i < this.nota_media.length; i++){
            sum += this.nota_media[i];
        }
        return sum/this.nota_media.length;
    },
    mediaAsignatura(){
        for(lista in this.lista_asignaturas){
            
        }
    },
    mostrar(){

    }
}




for(let info in ALUMNO){
    if(info == "tutor"){
        let p = document.createElement("p");
        let texto = document.createTextNode("Tutor: \n");
        p.appendChild(texto);
        document.getElementsByTagName("div")[0].appendChild(p);
        for(let infoTutor in ALUMNO[info]){
            let p = document.createElement("p");
            let texto = document.createTextNode(infoTutor +": " +ALUMNO[info][infoTutor]);
            p.appendChild(texto);
            document.getElementsByTagName("div")[0].appendChild(p);
        }
    }else if(info == "lista_asignaturas"){
        let p = document.createElement("p");
        let texto = document.createTextNode("Asignaturas: \n");
        p.appendChild(texto);
        document.getElementsByTagName("div")[0].appendChild(p);
        for(let asignaturas in ALUMNO[info]){
            for(let datos in ALUMNO[info][asignaturas]){
                let p = document.createElement("p");
                let texto = document.createTextNode(datos +": " +ALUMNO[info][asignaturas][datos]);
                p.appendChild(texto);
                document.getElementsByTagName("div")[0].appendChild(p);
            }
        }
    }else{
        let p = document.createElement("p");
        let texto = document.createTextNode(info +": " +ALUMNO[info]);
        p.appendChild(texto);
        document.getElementsByTagName("div")[0].appendChild(p);
    }
    
}
