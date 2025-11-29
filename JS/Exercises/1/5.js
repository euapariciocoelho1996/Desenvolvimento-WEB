const numeros = [10, 25, 50, 88, 99, 105, 200];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 100) {
    console.log(numeros[i]);
  } else {
    break;
  }
}
