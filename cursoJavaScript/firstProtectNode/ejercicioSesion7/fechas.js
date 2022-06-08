/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fechaActual = new Date();
console.log(fechaActual);

const fechaNacimiento = new Date("febrary 18 1994");
console.log(fechaNacimiento);

const compareDate = fechaActual > fechaNacimiento;
console.log(compareDate);

const day = fechaNacimiento.getDate();
console.log(day);
const month = fechaNacimiento.getMonth();
console.log(month + 1);
const year = fechaNacimiento.getFullYear();
console.log(year);
