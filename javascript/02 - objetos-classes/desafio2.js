/*) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc() {

        const imc = this.valorImc();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave'
        }
    }
}

const joao = new Pessoas('João Vieira',84,1.81)
console.log('O IMC de '+joao.nome+' é '+joao.valorImc()+' e está '+joao.classificarImc())

const barbara = new Pessoas('Bárbara Antunes',74,1.76)
console.log('O IMC de '+barbara.nome+' é '+barbara.valorImc()+' e está '+barbara.classificarImc())