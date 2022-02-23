import React, {Component} from 'react';

import '../css/NewTopic.css'

export default class NewTopic extends Component {
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      thumbnail: '',
      level: 1,
      projectFinished: false,
      isDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validdateInputs = this.validdateInputs.bind(this);
  }
  handleChange({target}) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState( {[name] : value} , this.validdateInputs())
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addNewTopic } = this.props;
    addNewTopic(this.state);
    this.setState({
      title: '',
      thumbnail: '',
      level: 1,
      projectFinished: false,
      isDisable: true
    })
  }

  validdateInputs() {
    const {title, thumbnail } = this.state;
    (title === '' && thumbnail === '')
    ? this.setState({ isDisable: true })
    : this.setState({isDisable: false})
  }

  render() {
    const {state: 
      {title, thumbnail, level, projectFinished, isDisable},
      handleChange, handleSubmit
    } = this;

    return(
      <form className="new-topic-form">
        <label htmlFor='title'> Title:
          <input
            type='text'
            name='title'
            id='title'
            value={title} 
            onChange={handleChange}
          />
        </label>
        <label htmlFor='level'> Leve:
          <input
            type='number'
            min='1'
            max='5'
            name='level' 
            id='level' 
            value={level}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='thumbnail'> Image url:
          <input 
            type='text' 
            name='thumbnail' 
            id='thumbnail' 
            value={thumbnail} 
            onChange={handleChange}
          />
        </label>
        <label htmlFor='projectFinished'> Finalizado?
          <input 
            type='checkbox' 
            name='projectFinished' 
            id='projectFinished' 
            value={projectFinished} 
            onChange={handleChange} 
          />
        </label>
        <button
        disabled={isDisable}
          onSubmit={handleSubmit}
          type='submit'>
            Adicionar
        </button>
      </form>
    )
  }
}