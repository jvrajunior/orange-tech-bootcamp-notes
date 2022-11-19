/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]

for (let i = 0; i < numeros.length; i++) {
   const resul = numeros[i];
   if (resul % 2 === 0) {
      console.log(resul);   
   }
}