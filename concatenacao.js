// Esse algoritmo cancatena duas variáveis que o usuário irá inserir em popups e traz o resultado dessa
// concatenação

var nome, idade, alerta;

alert("O resultado será mostrado abaixo do botão!")

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

document.getElementById("paragrafo").innerText = nome + " tem " + idade + " anos de idade."