function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
    } else {
        velocidadeAtual = velocidadeMaxima
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
}

const celta = new Carro
celta.acelerar()
console.log(celta.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())