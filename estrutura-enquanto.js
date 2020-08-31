// Esse algoritmo pergunta quantas vezes o usuário deseja fazer a operação, o nome da pessoa, a idade da
// pessoa e traz como resultado se uma pessoa é maior ou menor de idade.

function acaoBotao() {
    var nome, idade, limite, contador

    limite = prompt("Digite quantas vezes a idade será verificada: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade de " + nome)
        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + ", você é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + ", você é menor de idade!"
        contador++
    }
}