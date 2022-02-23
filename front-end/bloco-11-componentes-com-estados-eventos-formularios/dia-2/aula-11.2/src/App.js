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
    };
    this.addNewTopic = this.addNewTopic.bind(this);
  }

  addNewTopic(topic) {
    this.setState((prev) => ({topics: [...prev.topic, topic] }))
  }

  render() {

    const {topics} = this.state;

    return (
      <div className="main-page">

        <Header/>
        <NewTopic addNewTopic={this.addNewTopic}/>

        <div className='topic-list'>

          {topics.map(topic => 
            <div className='topic-content' key={topic.title}>
              <TopicCard
                key={topic.title}
                topic={topic}
              />
            </div>
          )}

        </div>
        
      </div>
    )
  }
}

export default App;
