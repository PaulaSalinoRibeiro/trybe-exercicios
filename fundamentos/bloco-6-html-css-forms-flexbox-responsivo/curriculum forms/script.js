function createdStates() {
    let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    let setect = document.getElementById('states');
    
    for(let i = 0; i < states.length; i += 1){
        let option = document.createElement('option');
        option.innerText = states[i]
        option.value = states[i]
        setect.appendChild(option); 
    }
}

function nameValidated () {
    let name = document.querySelector('[name=name]')
    /* console.log(name.value) */
    if(name.value.length > 40 || name.value.length === 0){
        alert('Nome inválido!')
    }
}

function emailValidated () {
    let email = document.querySelector('[name=email]')
    if(email.value.length > 50 || email.value.length === 0){
        alert('Email inválido')
    }
    // if charset @ exist?
}

function cpfValidated () {
    let cpf = document.querySelector('[name=cpf]')
    if(cpf.value.length > 11 || cpf.value.length === 0){
        alert('cpf inválido!')
    }

    // if just numbers?
}

function defaulSubmit(event) {
    event.preventDefault();

    nameValidated ()
    emailValidated ()
    cpfValidated ()
}

window.onload = function () {
    
    createdStates();

    let button = document.querySelector('.submit-button')
    button.addEventListener('click', defaulSubmit)

}