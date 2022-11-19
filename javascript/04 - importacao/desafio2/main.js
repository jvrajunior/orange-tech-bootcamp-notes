/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.*/

const { gets,print } = require('./auxiliar');

let maiorNumero = 0;
let menorNumero = 100000000;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (maiorNumero < numeroSorteado){
        maiorNumero = numeroSorteado;
    } else if (menorNumero > numeroSorteado){
        menorNumero = numeroSorteado;
    }
}

print('Maior número: ' + maiorNumero);
print('Menor número: ' + menorNumero);
