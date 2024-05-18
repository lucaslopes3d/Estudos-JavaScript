class Pessoa{
    nome
    idade

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const lucas = new Pessoa()
lucas.nome = 'Lucas L Lima'
lucas.idade = 34

const luana = new Pessoa()
luana.nome = 'Luana L Lima'
luana.idade = 30

luana.descrever()
lucas.descrever()