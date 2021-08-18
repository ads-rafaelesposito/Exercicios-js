const calcJurosSimples = (capInicial, taxaJuros, tempAplic) => {
    let montante
    montante = capInicial + (capInicial * taxaJuros * tempAplic)
    return console.log(montante.toFixed(2))
}

const calcJurosComp = (capInicial, taxaJuros, tempAplic) => {
    let montante
    montante = capInicial * (Math.pow((1+taxaJuros),tempAplic))
    return console.log(montante.toFixed(2))
}

calcJurosSimples(1000, 0.10, 12)
calcJurosComp(1000, 0.10, 12)