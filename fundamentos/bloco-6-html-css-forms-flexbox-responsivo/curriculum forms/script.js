let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
let setect = document.getElementById('states');
  for(let i = 0; i < states.length; i += 1){
    let option = document.createElement('option');
    option.innerText = states[i]
    option.value = states[i]
    setect.appendChild(option); 
  }

function defaultSubmit (event) {
    event.preventDefault()
} 

 const validate = new window.JustValidate('#form');

validate
  .addField('#name', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
        rule: 'required',
    },
    {
        rule: 'maxLength',
        value: 50,
    }
  ])
  .addField('#cpf', [ // cpf accpet just numbers
      {
        rule: 'required',
      },
      {
        rule: 'maxLength',
         value: 11,
      }
  ]) 
  .addField('#address', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 100,
    }
  ])
  .addField('#city', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 28,
    }
  ])
  .addField('#states', [  // don't work it! select first option by default
    {
      rule: 'required'
    }
  ]) 
  .addField('#textarea', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value: 1000,
    }
  ])
  .addField('#office', [
    {
      rule: 'required',
    },
    {
      rule: 'maxLength',
      value:40,
    }
  ])
  .addField('#description', [
    {
      rule: 'required',
      value: 500,
    }
  ])
 
  window.onload = function () {

  let btnSubmit = document.getElementById('btn-submit');
  btnSubmit.addEventListener('click', defaultSubmit); 

=======
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

function adressValidated () {
    let adress = document.querySelector('[name=adress]')
    if(adress.value.length > 200 || adress.value.length === 0){
        alert('Endereço inválido!')
    }
}

function cityValidated () {
    let city = document.querySelector('[name=city]')
    if(city.value.length > 28 || city.value.length === 0){
        alert('Cidade inválida!')
    }
}

// Check select no empty 

function localValidated () {
    let local = document.querySelectorAll('[name=local]')
    //console.log(local);
    /* for(let i = 0; i < local.length; i+=1){
        if(local.required === false){
            alert('Residencia inválida!')
        }
    } */
}

function resumeValidated () {
    let resume = document.querySelector('[name=resume]')
    if(resume.value.length > 1000 || resume.value.length === 0){
        alert('Resume inválido!')
    }
}

function defaulSubmit(event) {
    event.preventDefault();

   // nameValidated ()
   // emailValidated ()
   // cpfValidated ()
   // adressValidated ()
   // cityValidated ()
   // localValidated ()
   resumeValidated ()
}

window.onload = function () {
    
    createdStates();

    let button = document.querySelector('.submit-button')
    button.addEventListener('click', defaulSubmit)

}