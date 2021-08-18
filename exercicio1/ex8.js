var maiorPontuacao = 0
var contMaiorPont = 0
var piorPontuacao = 0
var indexPiorPont = 0

const comparaJogo = (pontuacao, index) => {
    if (maiorPontuacao < pontuacao) {
        if (index > 0) contMaiorPont++
        return maiorPontuacao = pontuacao
    }
    if (piorPontuacao == 0) piorPontuacao = pontuacao
    
    if (pontuacao < piorPontuacao) {
        piorPontuacao = pontuacao
        indexPiorPont = index
    }
}

let valorJogos = 
['10', '30', '50', '30', '1', '10',  '0', '100', '200', '20', '200', '201', '202']
.map(i => Number(i))

valorJogos.forEach(comparaJogo)
console.log([contMaiorPont, indexPiorPont])