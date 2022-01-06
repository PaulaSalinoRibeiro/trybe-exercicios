let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

let setect = document.getElementById('states');

for(let i = 0; i < states.length; i += 1){
    let option = document.createElement('option');
    option.innerText = states[i]
    option.value = states[i]
    setect.appendChild(option); 
}

let forms = document.getElementById('cv-form');
let send = document.getElementById('send');

function stopFlux (event) {
    event.preventDefaul();
}

send.addEventListener('click', stopFlux)
