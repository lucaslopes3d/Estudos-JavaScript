let nota1 = 4
let nota2 = 4
let nota3 = 4

let media = (nota1 + nota2 + nota3) / 3
//console.log(media.toFixed(2))

if (media < 5) {
    console.log('A média do aluno foi: ', media.toFixed(2))
    console.log('Reprovado')
} else if (media > 4 && media < 8) {
    console.log('A média do aluno foi: ', media.toFixed(2))
    console.log('Recuperação')
}
else {
    console.log('A média do aluno foi: ', media.toFixed(2))
    console.log('Passou de semestre')
}