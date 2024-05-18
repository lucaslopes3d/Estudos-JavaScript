const gasolina = 5.9
const etanol = 4.8
const consumoGasolina = 10
const consumoEtanol = 8
const distancia = 390

let preco = 4.8

if (preco === 5.9) {
    let valor = (distancia / consumoGasolina) * preco
    console.log('O combustível usado foi GASOLINA')
    console.log('O valor necessário para combustível será de R$', valor.toFixed(2))
} else if (preco === 4.8) {
    let valor = (distancia / consumoEtanol) * preco
    console.log('O combustível usado foi ETANOL')
    console.log('O valor necessário para combustível será de R$', valor.toFixed(2))
} else {
    console.log('Valor não identificado')
}

/*let valor = (distancia / consumo) * combustivel*/

/*console.log('Será gasto de combustível o valor de: R$',valor.toFixed(2))*/
