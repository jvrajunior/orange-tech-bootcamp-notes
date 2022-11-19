
// Declara uma variável constante do tipo Array vazia
const notas = []

// Faz a inclusão de 3 dados na variável notas
notas.push(5);
notas.push(10);
notas.push(10);

// Declara uma variável let chamada soma e atribui o valor 0
let soma = 0;

/* Inicia uma condicional que verifica uma condição. Se a condição for verdadeira, será executado o código entre as chaves. As 3 partes da definição da condicional for são:
1. Define uma variavél e um valor inicial: let i = 0
2. Define a condição, enquanto i for menor que o tamanho de notas: i < notas.length
3. Realiza o incremento na váriavel inicial: i++
*/
for (let i = 0; i < notas.length; i++) {
    // Define uma variável nota e atribui o valor do Array atual a ela.
    const nota = notas[i];
    // Realiza o valor da nota atual com o valor da variável soma.
    soma = soma + nota;
}

// Define a variável media com o valor sendo: O valor da variável soma dividido pelo total de dados dentro do Array notas.
const media = soma / notas.length;
// Exibe o valor da variável média na saída.
console.log(media)

