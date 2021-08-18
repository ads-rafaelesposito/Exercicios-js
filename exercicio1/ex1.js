const operacoes = (x, y) => {
    let soma, sub, div, mult
    soma = x + y
    sub = x - y
    div = x / y
    mult = x * y
    return console.log(`soma ${soma}, subtração ${sub}, divisão ${div} e a multiplicação ${mult} `)
}

operacoes(3, 2)