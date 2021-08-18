const verificaBissexto = (ano) => {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        return console.log(`O ano ${ano} é bissexto`)
    } else {
        return console.log(`esse ano não é bissexto`)
    }
}

verificaBissexto(1996)
verificaBissexto(1997)
verificaBissexto(2001)
verificaBissexto(2048)