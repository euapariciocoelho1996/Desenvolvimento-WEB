const lista = ["a", "b", "c"];

const resultado = lista.map((item, indice) => ({
  indice: indice,
  valor: item,
}));

console.log(resultado);
