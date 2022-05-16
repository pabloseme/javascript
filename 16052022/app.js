let titulo=document.getElementById("titulo");
let hora=document.getElementById("hora");
let minuto=document.getElementById("minuto");
let segundo=document.getElementById("segundo");
let seg=0,min=0,hor=0,xini;





//declaración de funciones
const comenzar=function(){
    seg=seg+1;
    if (seg%60==0){
        seg=0;
        min=min+1;
        if (min%60==0){
            min=0;
            hor=hor+1;
        }
    }
    hora.innerText=(hor.toString()).padStart(2,'0');
    minuto.innerText=(min.toString()).padStart(2,'0');   
    segundo.innerText=(seg.toString()).padStart(2,'0');    
}


const initcronometro=function(){    
    xini=setInterval(comenzar,1000);
}

const pausarcronometro=function(){
    //alert("Presiono pausar");
    clearInterval(xini);
}

const resetearcronometro=function(){
    hora.innerText='00';
    minuto.innerText='00';
    segundo.innerText='00';
    seg=0;
    min=0;
    hor=0;
    clearInterval(xini);
    
    
}

//eventos
document.getElementById("iniciar").addEventListener("click",initcronometro);
document.getElementById("pausar").addEventListener("click",pausarcronometro);
document.getElementById("reset").addEventListener("click",resetearcronometro);