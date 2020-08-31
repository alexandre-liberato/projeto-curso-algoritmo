// É necessário fazer alterações no código para ver o seu funcionamento no arquivo "index.html". Para isso:
//
// 1) Escolha qual código deseja ver funcionando (Código 1, Código 2, Código 3, Código 4 ou Código 5)
//
// 2) Verifique se o cóðigo escolhido tem /* antes do "if". Se não tiver, significa que esse código está 
// ativo e é esse código que está funcionando no arquivo "index.html"
//
// 3) Para que um código inativo funcione, é necessário colocar /* antes do "if" e */ após a última linha
// do código ATIVO e apagar o /* e o */ do código INATIVO.

var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do(a) aluno(a):")
nota1 = prompt("Digite a primeira nota do(a) aluno(a) " + nome)
nota2 = prompt("Digite a segunda nota do(a) aluno(a) " + nome)

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >= 7)
    passou = true;

// Código 1 (ATIVADO por padrão): Esse código demonstra apenas se o aluno foi APROVADO ou REPROVADO. Nesse
// casso SE o aluno(a) passou, ele(a) é APROVADO(A)

if (passou)
    alert("Aluno(a) " + nome + " foi APROVADO(A)!")
else
    alert("Aluno(a) " + nome + " foi REPROVADO(A)!")


// Código 2 (INATIVO por padrão): Esse código demonstra a lógica INVERSA do cóðigo acima. Nesse caso SE o(a)
// aluno(a) NÃO passou, ele é REPROVADO.
/*
if (!passou)
    alert("Aluno(a) " + nome + " foi REPROVADO(A)!")
else
    alert("Aluno(a) " + nome + " foi APROVADO(A)!")
*/

// Código 3 (INATIVO por padrão): Pode-se fazer uma CONJUNÇÃO 
/*
if (passou && media >= 9)
    alert("Aluno(a) " + nome + " obteve média " + media + " e foi APROVADO(A). " + nome + " é um(a) aluno(a) DESTAQUE!")
else
    alert("Aluno(a) " + nome + " obteve média " + media + " e foi APROVADO(A).")
*/

// Código 4 (INATIVO por padrão): Pode-se fazer uma DISJUNÇÃO onde um ou mais itens precisam ser verdadeiros
// para obter o resultado.
/*
if (passou || media >=7)
    alert("Aluno(a) " + nome + " foi APROVADO(A)")
else
    alert("Aluno(a) " + nome + " foi REPROVADO(A)")
*/

// Código 5 (INATIVO por padrão): Pode-se fazer uma DISJUNÇÃO EXCLUSIVA onde dois ou mais itens precisam 
// ser verdadeiros para obter o resultado. Nesse caso, o aluno precisa ter uma média maior ou igual a 9 
// para ser APROVADO e ser considerado um aluno DESTAQUE. Esse código não mostra se o aluno foi reprovado.
/*
if (passou && (media >=9 && media <=10))
    alert("Aluno(a) " + nome + " obteve média " + media + " e foi APROVADO(A). " + nome + " é um(a) aluno(a) DESTAQUE!")
else
    alert("Aluno(a) " + nome + " obteve média " + media + " e foi APROVADO(A).")
*/