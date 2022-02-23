import React, {Component} from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        {conteudos.map((elem, index) => <div key={index} className='content'>
          <p><span>O conteúdo é:</span> {elem.conteudo}</p>
          <p><span>Status:</span> {elem.status}</p>
          <p><span>Bloco:</span> {elem.bloco}</p>
        </div>)}
      </div>
    )
  }
}

export default Content