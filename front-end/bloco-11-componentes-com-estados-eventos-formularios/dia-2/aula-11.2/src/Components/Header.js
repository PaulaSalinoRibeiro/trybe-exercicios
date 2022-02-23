import React, {Component} from 'react';
import '../css/Header.css';

import trybeLogo from '../images/trybeLogo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={trybeLogo} alt='Trybe logo' className="header-img logo"/>
        </div>
        <input type='text' placeholder='Pesquisar'/>
      </header>
    )
  }
}