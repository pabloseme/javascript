let num1=parseInt(prompt("Ingrese el Primer Numero :"));
let num2=parseInt(prompt("Ingrese el segundo Numero :"));

document.write(`${(!isNaN(num1) && !isNaN(num2)) ? "La Suma es :"+(num1+num2): "error"}`);



