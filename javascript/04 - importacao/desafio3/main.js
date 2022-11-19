/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.*/

const { gets,print } = require('./auxiliar');

const numerosPares = [];

for (let i = 0; i < 6; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    }
}

print('Números Pares: ' + numerosPares)