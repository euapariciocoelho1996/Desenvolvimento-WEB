const datas = ["2024-10-15", "2023-05-01", "2025-12-03"];

const resultado = datas.map((item) => item.split("").reverse().join(""));

console.log(resultado);
