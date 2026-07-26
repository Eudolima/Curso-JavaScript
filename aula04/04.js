// Cria a variável e atribui a ela o resultado da janela de confirmação
var sair = confirm("Confirma ir para a página do Google?");

// Verifica se o valor retornado foi "verdadeiro" (1/OK)
if (sair == 1) {
    // Se verdadeiro, muda a localização da janela para o endereço desejado
    window.location = "http://www.google.com.br";
} 
// Se o usuário clicar em Cancelar (0), o código não entra no IF e nada acontece [3]