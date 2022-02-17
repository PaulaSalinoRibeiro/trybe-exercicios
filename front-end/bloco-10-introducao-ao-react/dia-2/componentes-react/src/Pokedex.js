import React, { Component } from "react";
import Pokemon from "./components/Pokemon";
import data from "./data";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="title">Pokedex</h1>
        <div className='pokedex'>
          {data.map((elem) => (
            <Pokemon key={elem.id} data={elem} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
