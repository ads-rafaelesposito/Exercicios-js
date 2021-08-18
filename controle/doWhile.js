function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao
let zero = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    if (opcao == 0)
        zero++
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log(`Você tirou ${zero} zero(s) antes do resultado -1`)
console.log('Até a próxima!')