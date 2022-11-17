/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 2.98;
const precoGasolina = 5.47;
const combustivelVeiculo = "Gasolina"
const consumoCarro = 12;
const distanciaPercorrida = 12;

const litrosConsumidos = distanciaPercorrida / consumoCarro;

if (combustivelVeiculo == "Etanol") {
    const custoViagem = precoEtanol * litrosConsumidos;
    console.log(custoViagem.toFixed(2));
} else if (combustivelVeiculo == "Gasolina") { 
    const custoViagem = precoGasolina * litrosConsumidos;
    console.log(custoViagem.toFixed(2));
}

