import React, { Component } from 'react';
// import logo from './logo.svg';
import Landing from './Components/Landing';
import Navigation from './Navigation';
import Home from "./Home"
import Listen from "./Components/Listen";

import './App.css';
// import './Landing.css'
// import Bio from './Bio';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page : "home"
    }

    this.pageHome = this.pageHome.bind(this);
    this.pageListen = this.pageListen.bind(this);
    this.pageEvents = this.pageEvents.bind(this);
    this.pageResume = this.pageResume.bind(this);
    this.pageContact = this.pageContact.bind(this);
  }

  pageHome(){
    this.setState({
      page : 'home'
    })
  }

  pageListen(){
    this.setState({
      page : 'listen'
    })
  }
  
  pageEvents(){
    this.setState({
      page : 'events'
    })
  }

  pageResume(){
    this.setState({
      page : 'resume'
    })
  }

  pageContact(){
    this.setState({
      page : 'contact'
    })
  }

  render() {
    return (
      <div>
        <Landing />
        <Navigation 
          home={this.pageHome} 
          listen={this.pageListen}
          events={this.pageEvents}
          resume={this.pageResume}
          contact={this.pageContact}
        />
        <div id="content">
          {this.state.page === "home" && <Home />} 
          {this.state.page === "listen" && <Listen />} 
          {this.state.page === "events" && <h1 style={{textAlign: "center"}}>EVENTS</h1>} 
          {this.state.page === "resume" && <h1 style={{textAlign: "center"}}>RESUME</h1>} 
          {this.state.page === "contact" && <h1 style={{textAlign: "center"}}>CONTACT</h1>} 
        </div>
      </div>
    );
  }
}

export default App;
