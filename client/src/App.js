import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'better-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


fetch('/dashboard', {
    accept: 'application/json',
  })
  .then(response => response.json())
  .then(json => {
    // do stuff
    console.log(json);
  });

export default App;
