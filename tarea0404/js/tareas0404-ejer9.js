let frase=prompt("Ingrese una Frase :");
let vocales=['a','e','i','o','u']
let cad='',cad1='';

for (let i=0; i<frase.length; i++)
{
    if (vocales.indexOf(frase[i])>=0){
        cad1= cad1+(cad1==='' ? frase[i] : ' ; '+frase[i]);        
    }
    
}
if (cad1!==''){
    document.write(`Las Vocales que aparecen en la frase son : ${cad1}`);    
}else{
    document.write(`No hay Vocales en la frase ingresada`);
}


