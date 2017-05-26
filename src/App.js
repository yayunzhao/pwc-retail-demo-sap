import React, { Component } from 'react';
import './App.css';
import { StoreComponent } from './modules/'
import { DepartmentComponent } from './modules/'

class App extends Component {
  render() {
    return (
      <div className="App">
        
	        <DepartmentComponent />
	  </div>
    );
  }
}

export default App;
