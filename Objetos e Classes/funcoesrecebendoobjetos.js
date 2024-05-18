class Pessoa{
    nome
    idade
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
    }
}

const lucas = new Pessoa()
const luana = new Pessoa()

lucas.nome = 'Lucas L Lima'
lucas.idade = 34
luana.nome = 'Luana L Lima'
luana.idade = 35

compararPessoas(lucas, luana)


//console.log(lucas)