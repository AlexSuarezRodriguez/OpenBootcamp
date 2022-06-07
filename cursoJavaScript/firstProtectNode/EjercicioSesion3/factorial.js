/*
Crea los siguientes archivos JS:
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
*/
let numero = 10;
let countFor = 1;
let countWhile = 1;
let countWhileBreak = 1;

for (let i = 1; i <= numero; i++) {
  countFor *= i;
}
console.log(countFor);

let i = 1;
while (i <= numero) {
  countWhile = countWhile * i;
  i++;
}
console.log(countWhile);

let factorial = 10;
while (1) {
  countWhileBreak *= factorial;
  factorial--;
  if (factorial == 1) break;
}
console.log(countWhileBreak);
