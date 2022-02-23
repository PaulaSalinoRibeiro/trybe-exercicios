import React, {Component} from 'react';

import './css/App.css'

import Header from './Components/Header';
import NewTopic from './Components/NewTopic';
import TopicCard from './Components/TopicCard';

import data from './data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      topics: data,
      inputHeader: '',
    };
    this.addNewTopic = this.addNewTopic.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleInputHeader = this.handleInputHeader.bind(this);
  }

  addNewTopic(topic) {
    this.setState((prev) => ({topics: [...prev.topics, topic] }))
  }

  removeItem(title) {
    const { topics } = this.state;
    this.setState({topics: topics.filter(topic => topic.title !== title)})
  }

  handleInputHeader({target: {value}}){
    this.setState({inputHeader: value})
  }

  render() {

    const {state: {topics, inputHeader} } = this;

    return (
      <div className="main-page">

        <Header 
          handleInputHeader={this.handleInputHeader}
          inputHeader={inputHeader}
        />
        <NewTopic addNewTopic={this.addNewTopic}/>

        <div className='topic-list'>

          {topics.filter(topic => topic.title.includes(inputHeader))
          .map(topic => 
            <div className='topic-content' key={topic.title}>
              <TopicCard
                key={topic.title}
                topic={topic}
                removeItem={this.removeItem}
              />
            </div>
          )}

        </div>

      </div>
    )
  }
}

export default App;
