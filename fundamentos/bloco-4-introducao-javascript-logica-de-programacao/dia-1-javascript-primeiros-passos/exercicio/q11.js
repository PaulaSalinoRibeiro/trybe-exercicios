//  Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido

let salario = 4500;

//Desconto INSS

    if(salario > 5189.82){
        salarioINSS = (salario - 570.88);
        
    } else if(salario > 2594.93 && salario < 5189.82){
        salarioINSS = (salario - salario*0.11);
        
    } else if( salario <= 2594.92 && salario > 1556.94){
        salarioINSS = (salario - salario*0.09);
        
    } else{
        salarioINSS = (salario - salario*0.08);
        
    }

// Desconto do IR

    if(salarioINSS > 1903.99 && salarioINSS <= 2826.65){
        salarioIR = ((0.075*salarioINSS) - 142.80);
    } else if(salarioINSS > 2826.66 && salarioINSS <= 3751.05){
        salarioIR = ((0.15*salarioINSS) - 345.80);
    } else if(salarioINSS > 3751.06 &&salarioINSS <= 4664.68){
        salarioIR = ((0.225*salarioINSS) - 636.13);
    } else{
        salarioIR = ((0.227*salarioINSS) - 869.36);
    }

    salarioLiquido = (salarioINSS - salarioIR);
    console.log(salarioLiquido);