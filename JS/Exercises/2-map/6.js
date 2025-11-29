const produtos = [
  { nome: "TV", preco: 3000 },
  { nome: "Notebook", preco: 4500 },
  { nome: "Mouse", preco: 80 },
];

const resultado = produtos.map((item) => item.nome);

console.log(resultado);
