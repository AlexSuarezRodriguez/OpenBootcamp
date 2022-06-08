/*
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

const ListaDeCompra = ["pepino", "arroz", "lenteja", "aguacate", "pasta"];
ListaDeCompra.push("Aceite de Girasol");
ListaDeCompra.pop();
console.log(ListaDeCompra);

const movies = [
  {
    titulo: "jonh Wick",
    director: "leonardo di caprio",
    fecha: new Date("febrary 18 1994"),
  },
  {
    titulo: "el hoyo",
    director: "jhon deep",
    fecha: new Date("april 18 2005"),
  },
  {
    titulo: "minions",
    director: "toto wolf",
    fecha: new Date("december 18 2015"),
  },
];

const listFilter = movies.filter(
  (element) => element.fecha > new Date("january 1 2010")
);
console.log(listFilter);

const directores = movies.map((pelicula) => {
  return pelicula.director;
});
const titulos = movies.map((pelicula) => {
  return pelicula.titulo;
});

const newList = directores.concat(titulos);
console.log(newList);

const newListSpred = [...directores, ...titulos];
console.log(newListSpred);
