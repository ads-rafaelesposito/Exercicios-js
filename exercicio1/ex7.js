const bhaskara = (ax2, bx, c) => {
    let delta, x1, x2
    delta = Math.pow(bx,2) - 4*(ax2*c)
    //console.log(`o delta é ${delta}`)

    if(delta < 0) {
        return console.log(`Delta é negativo`)
    } else {
        x1 = ((-bx)+Math.sqrt(delta))/(2*ax2)
        x2 = ((-bx)-Math.sqrt(delta))/(2*ax2)
        return console.log([x1, x2])
    }

}

bhaskara(3, -5, 12)
bhaskara(1, 12, -13)
bhaskara(2, -16, -18)