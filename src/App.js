import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent, MyComponent2 } from './modules/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
        <MyComponent2 />
      </div>
    );
  }
}

export default App;
