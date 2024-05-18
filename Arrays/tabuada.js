const num = 93
const operacao = "soma"

if(operacao === "soma"){
    console.log("A tabuada de soma do número", num, "é:")
    for(let i=1; i<=10; i++){
        console.log(num, "+", i, "=", num + i )
    }
}else if(operacao === "multiplicacao"){
    console.log("A tabuada de multiplicação do número", num, "é:")
    for(let i=1; i<=10; i++){
        console.log(num, "*", i, "=", num * i )
    }
}else if(operacao === "divisao"){
    console.log("A tabuada de divisão do número", num, "é:")
    for(let i=1; i<=10; i++){
        console.log(num, "/", i, "=", (num / i).toFixed(2) )
    }
}
