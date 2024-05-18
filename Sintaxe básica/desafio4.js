const peso = 70
const altura = 1.64

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(imc.toFixed(1))
    console.log('A pessoa está abaixo do peso')
} else if (imc > 18.5 && imc < 26) {
    console.log(imc.toFixed(1))
    console.log('A pessoa está em seu peso ideal')
} else if (imc >= 26 && imc < 31) {
    console.log(imc.toFixed(1))
    console.log('A pessoa está acima do peso')
} else if (imc >= 31 && imc <= 40) {
    console.log(imc.toFixed(1))
    console.log('A pessoa está obesa')
}
else {
    console.log(imc.toFixed(1))
    console.log('A pessoa com obesidade grave')
}