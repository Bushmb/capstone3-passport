import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import ButtonList from './ButtonList';
import CardContainer from './CardContainer';


class App extends Component {

  render() {
    return (
      <div>
      <Header />
      <h1 className="App">Coder News</h1>
      <ButtonList />
      <CardContainer />
      </div>
    );
  }
}

// fetch('/hacker', {
//     accept: 'application/json',
//   })
//   .then(response => response.json())
//   .then(json => {
//     // do stuff
//     console.log(json);
// });

export default App;
