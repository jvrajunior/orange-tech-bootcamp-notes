class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log('Meu nome é '+ this.nome +' e minha idade é '+this.idade+' anos.');
    }
}


const joao = new Pessoa('Joao Vieira', 31);
// joao.nome = 'Joao Vieira'
// joao.idade = 31

const barbara = new Pessoa('Barbara Antnes', 32);
// barbara.nome = 'Barbara Antunes'
// barbara.idade = 32

joao.descrever();
barbara.descrever();
console.log(joao);


/*
// Declara��o de um objeto com um m�todo
const pessoa = {
    nome: 'Joao Vieira',
    idade: 31,
    descrever: function () {
        console.log('Meu nome � '+ this.nome +' e minha idade � '+this.idade+' anos.');
    }
};
*/

/*
// Exibir os valores dos atributos de um objeto
 console.log(pessoa.nome);
 console.log(pessoa.idade);
*/

/*
// Incluir um novo atributo ao objeto
 pessoa.altura = 1.81
*/

/*
// Deletar o atributo de um objeto
 delete pessoa.nome;
*/

/*
// Sobreposi��o de m�todo do objeto.
pessoa.descrever = function() {
    console.log('Meu nome � '+ this.nome);
}
*/