let nombres=JSON.parse(localStorage.getItem('nombres-lstore')) || []; //si existe una key tareas lo actualizo al vector sino estar como vacio
let contenedor=document.getElementById("contenedor");
let conta=document.getElementById("cantnombres");


const detenersubmit=function(e){
    e.preventDefault();
   
    let nombre=document.getElementById('texttarea'); //asigno la etiqueta html a nombre
    nombres.push(nombre.value);  //toma la propiedad value del imput y lo agrego al array
    localStorage.setItem('nombres-lstore',JSON.stringify(nombres));
    nombre.value=''
    console.log(nombres); //array
    
    ///muestro los lementos del arreglo
    
    
    agregartarjeta();
}


//al presionar Enter se ejecuta el evento submit
document.getElementById('formulario').addEventListener('submit',detenersubmit);

const agregartarjeta=function(){
    document.getElementById("contenedor").innerHTML=""; //limpio mi contenedor
    nombres.forEach(function(minombre,index){        
        let tarjeta=document.createElement("div"); //creo una tarjeta por cada nombre ingresado
        tarjeta.classList=" card mt-1";    //agrego una clase
 
        let contenido=`
                         <div class="card-body bg-secondary text-white ">
                             <div class="d-flex justify-content-between">
                                 <span>${minombre}</span>
                                 <button class="btn btn-danger" btn-sm onClick="{borrartarea(${index})}">X</button>
                             </div>                          
                         </div>
        `
        tarjeta.innerHTML=contenido
 
        contenedor.appendChild(tarjeta)
        
    }
    )
    conta.innerHTML=nombres.length;
}


function borrartarea(index){
    //console.log(index);
    nombres.splice(index,1);
    localStorage.setItem('nombres-lstore',JSON.stringify(nombres));

    agregartarjeta()
}


//inicializo la aplicacion
agregartarjeta()