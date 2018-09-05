import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="App tc">
        <div className="mw8 center pa4">
          <Toggle></Toggle>
        </div>
      </div>
    );
  }
}

export default App;
