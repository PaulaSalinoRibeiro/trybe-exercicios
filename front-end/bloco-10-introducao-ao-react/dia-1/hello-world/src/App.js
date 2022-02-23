import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css'

/* const Task = (value, index) => <li key={index}>{value}</li>

const commitment = ['learn React', 'pratic with exercise', 'read documentation'];

class App extends React.Component {
  render() {
    return (
      <ul>
        {commitment.map((element, index) => Task(element, index))}
      </ul>
    )
  }
} */

/* const Task = () => {
  const commitment = ['learn React', 'pratic with exercise', 'read documentation'];
  return (
    commitment.map((elem, index) => <ul> <li key={index}>{elem}</li></ul>)
  )
}

class App extends Component {
  render() {
    return (
      <Task/>
    )
  }
} */

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App