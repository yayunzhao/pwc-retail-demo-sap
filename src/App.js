import React, { Component } from 'react';
import './App.css';
import { Store, MyComponent2 } from './modules/'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
	        <Store />
	     </MuiThemeProvider>
	   	<MyComponent2 />        
      </div>
    );
  }
}

export default App;
