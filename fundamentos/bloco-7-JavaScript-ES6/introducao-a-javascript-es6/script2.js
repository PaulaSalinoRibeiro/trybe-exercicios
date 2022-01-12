/* Crie uma função que receba um número e retorne seu fatorial.*/

const factorial = num => {
   
  let number = 1;
  
  for(let i = num; i > 1; i -= 1){
    number *= i;
  }

  return number;
}

/* Crie uma função que receba uma frase e retorne qual a maior palavra.*/

const largeWord = (str) => {

  const words = str.split(' ');
  let logestWord = words[0];

  for(let i = 0; i < words.length; i += 1){
    if(words[i].length > logestWord.length){
        logestWord = words[i];
    }
  }

  return logestWord;
}

