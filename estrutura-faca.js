// Esse algoritmo calcula o fatorial de um número e devolve o resultado

function acaoBotao() {
    var numero, fatorial, contador;

    numero = prompt("Digite o número que deseja calcular o fatorial: ")
    fatorial = 1
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador        
    }
    document.getElementById("paragrafo").innerText = ("O fatorial do número " + numero + " é " + fatorial)
}