// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 

let pai = document.getElementById('pai');
let primeiroFilho = document.getElementById('primeiroFilho');
pai.removeChild(primeiroFilho);

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let segundoEUltimo = document.getElementById('segundoEUltimoFilhoDoFilho');
ondeVoceEsta.removeChild(segundoEUltimo);

let father = document.querySelector('#pai');

let terceiroFilho = document.getElementById('terceiroFilho');
let quartoFilho = document.getElementById('quartoEUltimoFilho')
let section = ondeVoceEsta.nextSibling

father.removeChild(terceiroFilho);
father.removeChild(quartoFilho);
father.removeChild(section);