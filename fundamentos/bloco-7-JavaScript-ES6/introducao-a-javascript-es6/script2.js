/* Crie uma função que receba um número e retorne seu fatorial.*/

const factorial = num => {
   
  let number = 1;
  
  for(let i = num; i > 1; i -= 1){
    number *= i;
  }

  return number;
}

/* Crie uma função que receba uma frase e retorne qual a maior palavra.*/