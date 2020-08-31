// Esse logaritmo permite que o usuário faça um cálculo matemático de soma, subtração, multiplicação ou divisão

alert("Aperte o botão INICIAR AÇÃO. O resultado aparecerá abaixo do botão!")

function acaoBotao() {
    var valor1, valor2, resultado, operacao;
    valor1 = prompt("Digite o primeiro valor a ser calculado")
    operacao = prompt("Digite a operaçao desejada (Ex.: + , - , * , /")
    valor2 = prompt("Digite o segundo valor a ser calculado")

    if(operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
    }else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    }else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }
    document.getElementById("paragrafo").innerText = resultado
}