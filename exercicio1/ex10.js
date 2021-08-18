const ehDivisivelPor3 = (num) => {
    if (num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(ehDivisivelPor3(9))
console.log(ehDivisivelPor3(7))
console.log(ehDivisivelPor3(12))
console.log(ehDivisivelPor3(2))