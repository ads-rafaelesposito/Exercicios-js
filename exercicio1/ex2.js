const tipoTriangulo = (a, b, c) => {
    if (a == b && b == c && c == a) {
        return console.log('Triângulo Equilátero')
    } else if (a == b || b == c || c == a) {
        return console.log('Triângulo Isósceles')
    } else {
        return console.log('Triângulo Escaleno')
    }
}

tipoTriangulo(1, 1, 1)
tipoTriangulo(1, 2, 1)
tipoTriangulo(1, 2, 3)