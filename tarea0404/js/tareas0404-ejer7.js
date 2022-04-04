let n1=parseInt(prompt("Ingrese el Primer  Nº :"));
let n2=parseInt(prompt("Ingrese el Segundo Nº :"));
let n3=parseInt(prompt("Ingrese el Tercer  Nº :"));

if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)){
    if ((n1>=n2) && (n1>=n3)){                
            document.write(`El mayor de los tres numeros ingresados es ${n1}`);        
    }else if ((n2>=n1) && (n2>=n3)) {            
                document.write(`El mayor de los tres numeros ingresados es ${n2}`);                    
    }else if ((n3>=n1) && (n3>=n2)) {        
        document.write(`El mayor de los tres numeros ingresados es ${n3}`);               
    } 
}else{
    document.write(`Los valores ingresados no son validos `);
   }
   

