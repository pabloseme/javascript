let numx1=parseInt(prompt("Ingrese un Numero :"));

if (!isNaN(numx1)){
    if ((numx1%2)===0){                
            document.write(`El Numero ingresado ${numx1} es Divisible en 2`);        
    }else {            
        document.write(`El Numero ingresado ${numx1} no es Divisible en 2`);            
    } 
}else{
    document.write(`El valor ingresados no es valido `);
   }
   
