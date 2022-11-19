/*1) Fa�a um algor�timo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule
e imprima a sua m�dia e a sua classifica��o conforme a tabela abaixo.

M�dia = (nota 1 + nota 2 + nota 3) / 3;

Classifica��o:
- M�dia menor que 5, reprova��o;
- M�dia entre 5 e 7, recupera��o;
- M�dia acima de 7, passou de semestre;*/

const nota1 = 4;
const nota2 = 4;
const nota3 = 4;

const media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log("Reprovado")
} else if (media > 7) {
    console.log("Aprovado")
} else {
    console.log("Recuperação")
}