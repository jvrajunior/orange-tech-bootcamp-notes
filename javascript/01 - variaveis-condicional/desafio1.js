/* Fa�a um programa para calcular o valor de uma viagem.

Voc� ter� 3 vari�veis. Sendo elas:
 1 - Pre�o do combust�vel;
 2 - Gasto m�dio de combust�vel do carro por KM;
 3 - Dist�ncia em KM da viagem;

Imprima no console o valor que ser� gasto para realizar esta viagem.*/

const precoCombustivel = 5.70;
const consumoCarro = 12;
const distanciaPercorrida = 12;

const litrosConsumidos = distanciaPercorrida / consumoCarro;
const custoViagem = precoCombustivel * litrosConsumidos;

console.log(custoViagem.toFixed(2));