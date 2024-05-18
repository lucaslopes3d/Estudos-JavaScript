class Carros{
    marca
    cor
    consumoKm

    constructor(marca, cor, consumoKm){
        this.marca = marca
        this.cor = cor
        this.consumoKm = consumoKm
    }

    calcularGastoDeViagem(distancia, valorCombustivel){
        return distancia * this.consumoKm * valorCombustivel
    }

}

const c3 = new Carros('citroen', 'prata', 1/12)
const palio = new Carros('Fiat', 'preto', 1/10)

console.log(palio.calcularGastoDeViagem(70, 5))