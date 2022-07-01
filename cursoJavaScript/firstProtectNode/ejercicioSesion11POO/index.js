class Persona{
  #nombre
  #edad
  #obtenerEdad
  constructor(nombre, edad){
    this.#nombre = nombre
    this.#edad = edad
  }
  saludo(){
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
  }
  obtenNombre(){//funcion getter,permite acceder de forma controladoa a un atributo protegido
    return this.#nombre
  }
  #obtenEdad(){
    return this.#edad
  }
  getEdad(){
    return this.#edad
  }
  setEdad(newEdad){
    this.#edad=newEdad;
  }
}
const persona= new Persona("alexander",28)
// console.log(persona);
// persona.saludo( )
const edad= persona.getEdad()
console.log(edad)
persona.setEdad(30)
console.log(persona.getEdad())