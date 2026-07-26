// Função para calcular a média aritmética simples
function calculaMedia(nota1, nota2, nota3) {
    var soma = nota1 + nota2 + nota3;
    return soma / 3; // O retorno envia o resultado para quem chamou a função
}

// Captura de dados (convertendo texto para número decimal)
var n1 = parseFloat(prompt("Digite a primeira nota:"));
var n2 = parseFloat(prompt("Digite a segunda nota:"));
var n3 = parseFloat(prompt("Digite a terceira nota:"));

// Execução do cálculo
var mediaFinal = calculaMedia(n1, n2, n3);

// Verificação da condição de aprovação (Regra: média maior ou igual a 7)
if (mediaFinal >= 7) {
    alert("Média: " + mediaFinal.toFixed(2) + " - Aluno APROVADO!");
} else {
    alert("Média: " + mediaFinal.toFixed(2) + " - Aluno REPROVADO.");
}