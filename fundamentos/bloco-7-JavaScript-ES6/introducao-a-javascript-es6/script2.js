/* Crie uma função que receba um número e retorne seu fatorial.*/

/* const factorial = num => {
   
  let number = 1;
  
  for(let i = num; i > 1; i -= 1){
    number *= i;
  }

  return number;
} */

/* Crie uma função que receba uma frase e retorne qual a maior palavra.*/

/* const largeWord = (str) => {

  const words = str.split(' ');
  let logestWord = words[0];

  for(let i = 0; i < words.length; i += 1){
    if(words[i].length > logestWord.length){
        logestWord = words[i];
    }
  }

  return logestWord;
} */

/* Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada */

/* const button = document.getElementById('button');
const count = document.getElementById('count');
let clickCount = 0;  

//button.addEventListener('click', () => count.innerHTML = clickCount += 1)

const countClick = () => {
    clickCount += 1;
    console.log(clickCount);
    count.innerHTML = clickCount ;
}

button.addEventListener('click', countClick); */

/*   Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string . */

const changeLetters = (str) => {

    let frase = "Tryber x aqui!";

    for(let i = 0; i < frase.length; i += 1){

        if(str[i] === 'x'){
            str[i] = str;
        }
    
    }
    
    return frase

}

let str = 'Bebeto';
console.log(changeLetters(str));