let numer1=parseInt(prompt("Ingrese un Numero :"));
let cadenax='',cadena1x='';

if (!isNaN(numer1)){
    if (((numer1%2)===0) || ((numer1%3)===0) || ((numer1%5)===0) || ((numer1%7)===0)){  
            cadenax=`El Numero ingresado ${numer1} es divisible por :`
            if  ((numer1%2)===0){
                cadena1x= cadena1x==='' ? " 2" : ''
            }           
            if  ((numer1%3)===0){
                cadena1x= cadena1x==='' ? " 3" : cadena1x+" - 3"
            }           
            if  ((numer1%5)===0){
                cadena1x= cadena1x==='' ? " 5" : cadena1x+" - 5"                
            }        
            if  ((numer1%7)===0){
                cadena1x= cadena1x==='' ? " 7" : cadena1numer1+" - 7"   
            }           
            document.write(cadenax+cadena1x);        
    }else {            
        document.write(`El Numero ingresado ${numer1} no es Divisible por 2,3,5,o 7`);            
    } 
}else{
    document.write(`El valor ingresados no es valido `);
   }
   