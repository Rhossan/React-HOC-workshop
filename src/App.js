import React, { Component } from 'react';
import './App.css';
import './components/Button';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button disable/>
      </div>
    );
  }
}

export default App;
