alert('Boas-vindas ao cadastro Jedi');
let resposta = 'o lado negro olha para você também';
// Cria uma variável para armazenar o nome
let nome = prompt("Qual é o seu nome?");
let sobrenome = prompt("Qual seu sobrenome?");
// Exibe o nome e sobrenome no console
console.log("Nome:", nome + " " + sobrenome);

let idade = prompt("Qual sua idade?");
// Exibe a idade no console
console.log("Idade:", idade);

alert('Falta pouco para se tornar um Jedi');
let pergunta = prompt('Quando para o lado negro olhar, cuidado você deve ter,já que... ');
if (pergunta == resposta) {
    alert(`Isso aí, você se tornou o novo Jedi!`);
} else {
    alert('Aprender você ainda precisa :(')
}