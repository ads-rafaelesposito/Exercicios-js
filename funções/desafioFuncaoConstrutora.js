function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const rafael = new Pessoa('Rafael')
rafael.falar()