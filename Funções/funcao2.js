function verificarIdade(idade){
    if (idade >= 0 && idade < 18){
        console.log('Menor de idade')
    }
    else{
        console.log('Maior de idade')
    }
}

verificarIdade(0)