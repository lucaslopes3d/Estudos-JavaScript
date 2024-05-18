const salarioBruto = 2907;
const beneficios = 1800;

// ate1100 = (5%);
// de1100A2500 = (10%);
// maiorQ2500 = (15%);

//--------------------------------------------

// function Salario (salarioBruto, beneficios){
//   if (salarioBruto >= 0 || salarioBruto <= 1100){
//     salarioBruto = (salarioBruto - ((salarioBruto * 5)/100)) + beneficios;
//     return salarioBruto;
//   }

//   if (salarioBruto >= 1100.0 || salarioBruto <= 2500){
//     salarioBruto = (salarioBruto - ((salarioBruto * 10)/100)) + beneficios;
//     return salarioBruto;
//   }

//   if (salarioBruto > 2500){
//     salarioBruto = (salarioBruto - ((salarioBruto * 15)/100)) + beneficios;
//     return salarioBruto;
//   }
// }

// console.log("O salário líquido do funcionário é: " + Salario(salarioBruto, beneficios))


//--------------------------------------------


// if (salarioBruto === 0 || salarioBruto <= 1100) {
//   salarioLiquido = (salarioBruto - calcularDesconto(salarioBruto, 5)) + beneficios; 
// } else if (salarioBruto === 1101 || salarioBruto <= 2500) {
//   salarioLiquido = (salarioBruto - calcularDesconto(salarioBruto, 10)) + beneficios; 
// } else {
//   salarioLiquido = (salarioBruto - calcularDesconto(salarioBruto, 15)) + beneficios; 
// }

// console.log(salarioLiquido);


//---------------------------------------------


function calcularDesconto (valor, porcentagem) { 
  return (valor * porcentagem)/100;
}

function percentualComBaseNoSalario (salario) {
  if (salario >= 0 && salario <= 1100) {
  return 5;
  } else if (salario >= 1101.01 && salario <= 2500) {
    return 10;
  } else {
    return 15; 
  }
}

const salarioLiquido = (salarioBruto - calcularDesconto(salarioBruto, percentualComBaseNoSalario(salarioBruto)) + beneficios)

console.log("O valor do salário líquido do funcionário é: " + salarioLiquido)