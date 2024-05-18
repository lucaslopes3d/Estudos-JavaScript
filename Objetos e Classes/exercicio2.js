class Pessoa {
    nome
    peso
    altura

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC(){
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'A pessoa está abaixo do peso'
        } else if (imc > 18.5 && imc < 26) {
            return 'A pessoa está em seu peso ideal'
        } else if (imc >= 26 && imc < 31) {
            return 'A pessoa está acima do peso'
        } else if (imc >= 31 && imc <= 40) {
            return 'A pessoa está obesa'
        } else {
            return 'A pessoa com obesidade grave'
        }
    }

}

const jose = new Pessoa('José', 70, 1.75)
const priscila = new Pessoa('Priscila', 52, 1.50)
const lucas = new Pessoa('Lucas', 72, 1.67)

console.log(lucas, 'O valor do seu IMC é:', lucas.calcularImc(), '-', lucas.classificarIMC())
console.log(jose, 'O valor do seu IMC é:', jose.calcularImc(), '-', jose.classificarIMC())
console.log(priscila, 'O valor do seu IMC é:', priscila.calcularImc(), '-', priscila.classificarIMC())