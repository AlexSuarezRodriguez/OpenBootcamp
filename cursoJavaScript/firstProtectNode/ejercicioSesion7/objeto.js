/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const data = {
  nombre: "alexander",
  apellido: "suarez",
  edad: 28,
  altura: 1.75,
  soyDesarrollador: true,
};

const edad = data.edad;

const friends = [
  {
    nombre: "ghost",
    apellido: "suarez",
    edad: 21,
    altura: 1.4,
    soyDesarrollador: false,
  },
  {
    nombre: "tony",
    apellido: "suarez",
    edad: 12,
    altura: 0.8,
    soyDesarrollador: false,
  },
];
const list = [data, ...friends];
console.log(list);
const listOrder = list.sort((a, b) => a.edad - b.edad);
console.log(listOrder);
