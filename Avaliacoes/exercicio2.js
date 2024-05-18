const numeros = [5, 24, 3, 4, 6, 36, 96, 7, 8, 0, 108, 76];
let maiorPar = null;
let menorImpar = null;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    if (maiorPar === null || numeros[i] > maiorPar) {
      maiorPar = numeros[i];
    }
  } else {
    if (menorImpar === null || numeros[i] < menorImpar) {
      menorImpar = numeros[i];
    }
  }
}

console.log("O maior número par é: " + maiorPar)
console.log("O menor número impar é: " + menorImpar)