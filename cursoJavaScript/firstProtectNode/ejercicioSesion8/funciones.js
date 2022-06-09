/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
*/
function devuelveTrue() {
  return true;
}

async function asyncPromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* idsPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

console.log(devuelveTrue());
console.log(asyncPromesa());
const gen= idsPares()
console.log(gen.next().value);