const precoNormal = 100

const valor = 515
const formaDePagamento = '4'

if(formaDePagamento === '1'){
    console.log('Débito: R$' + formaDePagamento1(valor))
} else if(formaDePagamento === '2'){
    console.log('A vista ou PIX: R$' + formaDePagamento2(valor))
} else if(formaDePagamento === '3'){
    console.log('Até 2X sem juros: R$' + formaDePagamento3(valor))
} else if(formaDePagamento === '4'){
    console.log('A partir de 3X com juros: R$' + formaDePagamento4(valor))
}
else{
    console.log('Opção inválida.')
}

function formaDePagamento1(precoNormal){
    const precoAtualizado = precoNormal - ((precoNormal * 10) / 100)
    return precoAtualizado.toFixed(2)
}

function formaDePagamento2(precoNormal){
    const precoAtualizado = precoNormal - ((precoNormal * 15) / 100)
    return precoAtualizado.toFixed(2)
}

function formaDePagamento3(precoNormal){
    return precoNormal.toFixed(2)
}

function formaDePagamento4(precoNormal){
    const precoAtualizado = precoNormal + ((precoNormal * 10) / 100)
    return precoAtualizado.toFixed(2)
}