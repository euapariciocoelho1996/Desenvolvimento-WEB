if (true) {
  var souVar = "Eu vazo para fora do bloco!";
  let souLet = "Eu fico preso aqui dentro.";
  const souConst = "Eu também não saio daqui.";
}

console.log(souVar); // ✅ Funciona: "Eu vazo para fora do bloco!"
// console.log(souLet); // ❌ Erro: souLet is not defined
// console.log(souConst); // ❌ Erro: souConst is not defined

// --- LET (Permite mudar) ---
let contador = 0;
console.log(contador); // 0
contador = 1; // ✅ OK, valor atualizado
console.log(contador); // 1

// --- CONST (Não permite trocar o valor) ---
const pi = 3.14;
// pi = 3.1415;        // ❌ Erro: Assignment to constant variable.

const usuario = { nome: "Pedro", profissao: "Enfermeiro" };

// ✅ Pode mudar propriedades internas:
usuario.nome = "Pedro Henrique";
console.log(usuario); // { nome: "Pedro Henrique", profissao: "Enfermeiro" }

// ❌ NÃO pode trocar o objeto inteiro:
// usuario = { nome: "Maria" }; // Erro!
