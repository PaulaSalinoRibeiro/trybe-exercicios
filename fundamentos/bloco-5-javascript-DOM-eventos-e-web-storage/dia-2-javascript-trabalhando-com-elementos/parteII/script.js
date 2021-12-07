// Crie um irmão para elementoOndeVoceEsta 
let pai = document.getElementById('pai');
let novoIrmao = document.createElement('p');
//console.log(pai.appendChild(novoIrmao)) 

// Crie um filho para elementoOndeVoceEsta 
let ondeEstaVoce = document.getElementById('elementoOndeVoceEsta');
let agora = document.createElement('p');
//console.log(ondeEstaVoce.appendChild(agora));

// Crie um filho para primeiroFilhoDoFilho
let neto = document.getElementById('primeiroFilhoDoFilho');
let bisneto = document.createElement('p');
//console.log(neto.appendChild(bisneto));

// A partir desse filho criado, acesse terceiroFilho
// console.log(document.querySelector('#primeiroFilhoDOFilho').parentNode.nextElementSibling);