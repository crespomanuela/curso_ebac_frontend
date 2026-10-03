// Classe abstrata (função construtora mãe)
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    // Encapsulamento: atributo privado com getter e setter
    let _peso = 0;

    this.getPeso = function () {
        return `${this.nome} pesa ${_peso} kg`;
    }

    this.setPeso = function (valor) {
        if (typeof valor === "number" && valor > 0) {
            _peso = valor;
        }
    }

    // Método padrão (será sobrescrito nas filhas - polimorfismo)
    this.emitirSom = function () {
        return "...";
    }

    this.apresentar = function () {
        console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos e faço: ${this.emitirSom()}`);
    }
}

// Herdeira 1
function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);
    this.raca = raca;

    this.emitirSom = function () {
        return "Au au!";
    }

    this.buscarBolinha = function () {
        console.log(`${this.nome} foi buscar a bolinha!`);
    }
}

// Herdeira 2
function Gato(nome, idade, corPelo) {
    Animal.call(this, nome, idade);
    this.corPelo = corPelo;

    this.emitirSom = function () {
        return "Miau!";
    }

    this.arranhar = function () {
        console.log(`${this.nome} arranhou o sofá!`);
    }
}

// Instâncias
const rex = new Cachorro("Rex", 5, "Labrador");
const mimi = new Gato("Mimi", 3, "branco");
const bob = new Cachorro("Bob", 2, "Vira-lata");

rex.setPeso(30);
mimi.setPeso(4);
bob.setPeso(12);

rex.apresentar();
mimi.apresentar();
bob.apresentar();

console.log(rex.getPeso());
console.log(mimi.getPeso());

rex.buscarBolinha();
mimi.arranhar();