var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valores = lines.shift();

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01 ]

console.log("NOTAS:");

notas.forEach((nota) => {
  const a = Number(valores % nota);
  const b = Number(Math.floor(valores/nota));
  valores = a.toFixed(2);
  if (nota === notas[6]) {
    console.log("MOEDAS:");
  }

  if ( nota > notas[6]) {
    console.log(`${b} nota(s) de R$ ${nota.toFixed(2)}`);
  } else {
    console.log(`${b} moeda(s) de R$ ${nota.toFixed(2)}`);
  }
});
