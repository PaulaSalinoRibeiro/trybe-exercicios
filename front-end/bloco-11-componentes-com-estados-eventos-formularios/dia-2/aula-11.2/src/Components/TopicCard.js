import React, {Component} from 'react';
import deleteIcon from '../images/deleteIcon.png'

import '../css/TopicCard.css'

export default class TopicCard extends Component {
  render() {
    const {
      topic: {title, thumbnail, level, finesh } 
    } = this.props;

    return (
      <div className="topic-card">
        <div className="topic-img">
          <img src={thumbnail} alt='topic' />
        </div>
        <div className="topic-info">
          <span>{title}</span>
          <span>Desempenho: {level}</span>
          <span>
            {finesh ? 'Finalizado com sucesso!' : 'Em andamento ...'}
          </span>
        </div>
        <div>
          <button type='button'>
            <img src={deleteIcon} alt='delete'/>
          </button>
        </div>
      </div>
    )
  }
}