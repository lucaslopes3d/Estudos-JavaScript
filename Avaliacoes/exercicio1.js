const n1 = 6;
const n2 = 6;
const n3 = 6;

const mediaDoAluno = (n1 + n2 + n3)/3;

if(mediaDoAluno < 5){
    console.log('REPROVADO');
}
else if( mediaDoAluno >= 5 && mediaDoAluno < 7){
    console.log('RECUPERAÇÃO');
}
else{
    console.log('APROVADO');
}