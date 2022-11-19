/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

nomes = ['Joao','Vagner','Valquiria','Marcelo','Barbara','Leandro','Victor','José','Alberto','Vitória'];

for (let i = 0; i < nomes.length; i++) {
   const nome = nomes[i];
   const letraInicial = nome[0];
   if (letraInicial === "V") {
      console.log(nome);
   }
}