const numeros = [1, 2, 3, 4];

const resultado = numeros.map((item, indice) => ({
  valor: item % 2 === 0,
  indice: indice,
}));

console.log(resultado);
