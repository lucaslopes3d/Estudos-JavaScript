const precoNormal = 100
const debito = 10
const pixDinheiro = 15
const parcelado2x = precoNormal
const juros = 10

const formaDePagamento = '4'

if(formaDePagamento === '1'){
    const precoAtualizado = precoNormal - ((precoNormal * debito) / 100)
    console.log('O cliente recebe 10% de desconto. Valor do produto é: ', precoAtualizado.toFixed(2))
}else if (formaDePagamento === '2') {
    const precoAtualizado = precoNormal - ((precoNormal * pixDinheiro) / 100)
    console.log('O cliente recebe 15% de desconto. Valor do produto é: ', precoAtualizado.toFixed(2))
}else if (formaDePagamento === '3') {
    console.log('O cliente pode parcelar o valor do produto em até 2X sem juros, o valor do produto é: ', parcelado2x.toFixed(2))
}else if (formaDePagamento === '4') {
    const precoAtualizado = precoNormal + ((precoNormal * juros) / 100)
    console.log('O cliente pode parcelar o valor do produto em até 12X com juros de 10%, o valor do produto é: ', precoAtualizado.toFixed(2))
}else {
    console.log('Opção inválida')
}