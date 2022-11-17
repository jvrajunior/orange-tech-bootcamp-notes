/*Fa�a um programa para calcular o valor de uma viagem.

Voc� ter� 5 vari�veis. Sendo elas:
 1 - Pre�o do etanol;
 2 - Pre�o do gasolina;
 3 - O tipo de combust�vel que est� no seu carro;
 4 - Gasto m�dio de combust�vel do carro por KM;
 5 - Dist�ncia em KM da viagem;

Imprima no console o valor que ser� gasto para realizar esta viagem.*/

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

