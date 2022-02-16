import React from "react";

const Task = (value, index) => <li key={index}>{value}</li>

const commitment = ['learn React', 'pratic with exercise', 'read documentation'];

class App extends React.Component {
  render() {
    return (
      <ul>
        {commitment.map((element, index) => Task(element, index))}
      </ul>
    )
  }
}

export default App