import React, { Component } from 'react';

import './App.css';
import Header from './Header';
// import ButtonList from './ButtonList';
// import CardContainer from './CardContainer';
import ContentContainer from './ContentContainer';


class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#6B6B6B'}}>
        <Header />
        <h1 style={{ backgroundColor: '#6B6B6B'}} className="App dark-theme">Coder News</h1>
        <ContentContainer />
      </div>
    );
  }
}

export default App;
