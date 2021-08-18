const arredondaNota = (nota) => {
    if( nota >= 38 ) {
        if (nota % 5 == 4) nota++ 
        if (nota % 5 == 3) nota += 2
        if (nota % 5 == 2) nota += 3
    }
    return console.log(nota)
}

arredondaNota(89)