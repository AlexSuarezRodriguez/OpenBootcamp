class Persona {
  _nombre
  _edad
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`);
  }
}
class Desarrollador extends Persona {
  constructor(nombre,edad,lenguaje){
    super(nombre,edad)
    this.lenguaje=lenguaje
  }
  saludo(){
    super.saludo()
    console.log(`soy desarrolador de ${this.lenguaje}`)
  }
}

const newDev = new Desarrollador("alexander",29, 'javascript');
console.log(newDev)
newDev.saludo()