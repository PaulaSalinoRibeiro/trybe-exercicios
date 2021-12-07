// Acesse o elemento elementoOndeVoceEsta
let elementoOndeVoceEsta  = document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentNode.style.color = 'red';
//console.log(elementoOndeVoceEsta.parentNode);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'xablau xablau xablau';

// Acesse o primeiroFilho a partir de pai 
let pai = document.getElementById('pai')
//console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
//console.log(elementoOndeVoceEsta.firstElementChild);


// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 
// console.log(elementoOndeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
//console.log(elementoOndeVoceEsta.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai 
console.log(document.getElementById('pai').childNodes[5]);