/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/

listaPares = [];

for (let i = 10; i <= 50; i++) {
   const numero = i % 2;
   if (numero === 0) {
      listaPares.push(i);
   }
}
console.log(listaPares);