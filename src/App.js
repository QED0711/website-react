import React, { Component } from 'react';
// import logo from './logo.svg';
import Landing from './Landing';
import Navigation from './Navigation';

import './Landing.css'
import './App.css';
// import Bio from './Bio';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page : "home"
    }
  }
  render() {
    return (
      <div>
        <Landing />
        <Navigation />
        some text
      </div>
    );
  }
}

export default App;
