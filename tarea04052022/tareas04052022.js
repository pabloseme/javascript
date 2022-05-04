

////Ejercicio número 1
const fechaact=setTimeout(mostrarFecha,3000);


function mostrarFecha(){
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();    
    
    document.getElementById('fecha').innerHTML=`La fecha Actual es : ${output}`
}


///////Ejercicio número 2
let calorias=0,segundos=0;
const andarbicicleta=setInterval(quemarCalorias,1000);


function quemarCalorias(){
    calorias=calorias+0.10666;
    segundos++;
    console.log(`Las calorias quemadas en ${segundos} seg. es ${calorias}`);
}


////Ejercicio número 3
function detenerBicicleta(){
    clearInterval(andarbicicleta);
}