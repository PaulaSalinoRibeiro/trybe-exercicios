import React from "react";
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