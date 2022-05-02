class Usuario {
    constructor(nombre,username,password,estado){
        this.nombre=nombre;
        this.username=username;
        this.password=password;
        this.estado=estado;

    }

    presentacion(){
        console.log("------Tarjeta de presentacion");
        console.log(`Nombre : ${this.nombre}`);
        console.log(`Nombre de Usuario : ${this.usersname}`);
    }
}

let usuario1= new Usuario("Daniel","Danielus","12345",true);
let usuario2= new Usuario("Juan","Juanus","12345",true);

/*usuario1.prototype.saludar=function(){
    console.log(`Hola soy ${this.nombre}`)
}

usuario1.saludar();*/


class Administrador extends Usuario {
    constructor(nombre,username,password,estado,puesto){
        super(nombre,username,password,estado);
        this.puesto=puesto;
    }

    cambiarEstado(){
        this.estado=!this.estado;
    }

    superPresentacion(){
        this.presentacion();
        console.log(`Puesto : ${this.puesto}`);
    }
}

let admin= new Administrador(
    "Juan GAbriel",
    "juanus",
    "holapass",
    false,
    "Gerente Comercial"
);