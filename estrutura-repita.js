// Esse algoritmo orienta o usuário que ele poderá somar dois valores e traz o resultado dessa soma

function acaoBotao() {
    var sairLoop, valor1, valor2
    do{
        alert("Você poderá somar até dois valores")
        valor1 = prompt("Digite o primeiro valor: ")
        valor2 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt("Deseja SAIR? Digite S (para SAIR) ou N (para fazer outro cálculo)")
    }
    while (sairLoop == "N")
}