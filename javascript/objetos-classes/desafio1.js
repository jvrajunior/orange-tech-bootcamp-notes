/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
Crie um método que dado a quantidade de quil�metros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    litrosPorKm;

    custoPercurso(precoCombustivel,distanciaKm){
        const custoTotal = (distanciaKm / this.litrosPorKm) * precoCombustivel;
        const gastoMedioPorKm = 1/this.litrosPorKm
        console.log('O custo da viagem será de R$ '+ custoTotal.toFixed(2))
        console.log('Gasto médio por KM: '+gastoMedioPorKm.toFixed(4)+'\n')
    }

    constructor(marca,cor,litrosPorKm){
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }
}

gol = new Carro('Gol','Preto',12)
palio = new Carro('Palio','Branco',10)


gol.custoPercurso(2.50,12)
palio.custoPercurso(2.50,12)