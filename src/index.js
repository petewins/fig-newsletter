import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="newsletter">
        <Form />       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

