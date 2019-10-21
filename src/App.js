import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App" id="wrapper">
        <Dashboard />
      </div>
    );
  }
}


export default App;
