let nume1=parseInt(prompt("Ingrese un Numero :"));

if (!isNaN(nume1)){
    if (((nume1%2)===0) || ((nume1%3)===0) || ((nume1%5)===0) || ((nume1%7)===0)){                
            document.write(`El Numero ingresado ${nume1} es Divisible por 2,3,5,o 7`);        
    }else {            
        document.write(`El Numero ingresado ${nume1} no es Divisible por 2,3,5,o 7`);            
    } 
}else{
    document.write(`El valor ingresados no es valido `);
   }
   