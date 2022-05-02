class Producto{
    constructor(codigo,nombre,precio){
            this.codigo=codigo;
            this.nombre=nombre;
            this.precio=precio;
    }

    imprimeDatos(){
        document.write(`El Codigo del Articulo es :  ${this.codigo} <br>`)
        document.write(`El Nombre del Articulo es :  ${this.nombre} <br>`)        
        document.write(`El Precio del Articulo es : $ ${this.precio} <br><br>`)        
    }

}

let articulo1=new Producto("001020","Heladera Patrick",89120);
let articulo2=new Producto("001030","Colchon Suavestar 200x190",10500);
let articulo3=new Producto("001040","TV Hitachi 60 pulg",89000);
let arreglo=[];

arreglo.push(articulo1);
arreglo.push(articulo2);
arreglo.push(articulo3);


articulo1.imprimeDatos();
articulo2.imprimeDatos();
articulo3.imprimeDatos();
