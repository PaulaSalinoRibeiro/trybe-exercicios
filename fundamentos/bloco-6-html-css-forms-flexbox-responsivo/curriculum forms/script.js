
function statesOptions () {

    let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    let setect = document.getElementById('states');
    
    for(let i = 0; i < states.length; i += 1){
        let option = document.createElement('option');
        option.innerText = states[i]
        option.value = states[i]
        setect.appendChild(option); 
    }

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
  .addField('#cpf', [ // cpf accept just numbers
      {
        rule: 'required',
      },
      {
        rule: 'maxLength',
         value: 11
      }
  ]) 
  

  window.onload = function () {

    statesOptions ();

    let btnSubmit = document.getElementById('btn-submit');
    btnSubmit.addEventListener('click', defaultSubmit);

}