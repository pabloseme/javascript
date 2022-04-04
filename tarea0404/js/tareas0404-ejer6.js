let numero1=parseInt(prompt("Ingrese el Primer Numero :"));
let numero2=parseInt(prompt("Ingrese el Segundo Numero :"));

if (!isNaN(numero1) && !isNaN(numero2)){
    if (numero1>numero2){
        document.write(`El mayor de los dos numeros ingresados es ${numero1}`);
    }else if (numero2>numero1) {
        document.write(`El mayor de los dos numeros ingresados es ${numero2}`);
    }else{
        document.write(`Los numeros ingresados son iguales `);
    }
}else
{
    document.write(`Los valores ingresados no son validos `);
}
   