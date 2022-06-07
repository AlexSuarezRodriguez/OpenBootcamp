/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const fecha = new Date("febrary 18 1994");
const data = [
  "Alexander",
  28,
  true,
  fecha,
  {
    titulo: "Game of the thrones",
    autor: "Gorge r.r martin",
    fecha: new Date("august 1996"),
    url: "https://librerianacional.com/producto/281246",
  },
];
