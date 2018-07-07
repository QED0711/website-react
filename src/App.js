import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Navigation = () =>{
  return(
    <nav className="nav">
      <h1>HOME</h1>
      <h1>LISTEN</h1>
      <h1>EVENTS</h1>
      <h1>RESUME</h1>
      <h1>CONTACT</h1>
    </nav>
  )
}

class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

export default App;
