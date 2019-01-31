import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Newsletter from './components/Newsletter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Newsletter></Newsletter>
      </div>
    );
  }
}

export default App;
