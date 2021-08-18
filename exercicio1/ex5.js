const retornaValorEmDinheiro = (valor1, valor2) => {
    let dinheiro 
    dinheiro = valor1 + valor2
    return console.log(dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}

retornaValorEmDinheiro(10.55,15.55)