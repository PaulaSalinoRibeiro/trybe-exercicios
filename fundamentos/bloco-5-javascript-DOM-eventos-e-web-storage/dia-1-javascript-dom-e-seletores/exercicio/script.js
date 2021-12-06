/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
ok Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
ok Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
ok Crie uma função que mude a cor do quadrado vermelho para branco.
ok Crie uma função que corrija o texto da tag <h1>.
ok Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
ok Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 */


function changeParagraph (text){
    let changeParagraph = document.querySelectorAll('.center-content p');
    changeParagraph[1].innerText = text;   
}

changeParagraph('xablau');

function changeColor(color){
    let changeColor = document.getElementsByClassName('main-content');
    changeColor[0].style.backgroundColor = color;
}

changeColor('rgb(76,164,109)');

function otherColor (color){
    let otherColor = document.querySelector('.center-content');
    otherColor.style.backgroundColor = color;

}

otherColor('white');

function checkOrtg(text){
    let newText = document.getElementsByTagName('h1');
    newText[0].innerText = text;

}

checkOrtg('Exercício 5.1 - Javascript');

  function upperCaseTagParagraph(){
    let paragraphs = document.querySelectorAll('p');

    for(let p = 0; p < paragraphs.length; p += 1){
        paragraphs[p].innerText = paragraphs[p].innerText.toUpperCase()
    }

    return paragraphs
}

upperCaseTagParagraph(); 

function consoleTag(){

    let tagP = document.querySelectorAll('p');

    for(let p = 0; p < tagP.length; p += 1){
        console.log(tagP[p].innerText);
    }
}

consoleTag()