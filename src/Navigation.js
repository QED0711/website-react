import React, { Component } from 'react';

class Navigation extends Component {
    
    // clickHome(){
    //     this.setState({
    //         page: "home"
    //     })
    //     console.log("home");
    // }
    
    // clickListen(){
    //     this.setState({
    //         page: "listen"
    //     })
    //     console.log("listen");
    // }
    
    // clickEvents(){
    //     this.setState({
    //         page: "events"
    //     })
    // }
    
    // clickResume(){
    //     this.setState({
    //         page: "resume"
    //     })
    // }
    
    // clickContact(){
    //     this.setState({
    //         page: "contact"
    //     })
    // }

    render(){
      return(
        <nav className="pageNavigation">
          <div className="navEntry" id="pageHome" onClick={this.props.home}>
            <h3>HOME</h3>
          </div>
          <div className="navEntry" id="pageListen" onClick={this.props.listen}>
            <h3>LISTEN</h3>            
          </div>
          <div className="navEntry" id="pageEvents" onClick={this.props.events}>
            <h3>EVENTS</h3>            
          </div>
          <div className="navEntry" id="pageResume" onClick={this.props.resume}>
            <h3>RESUME</h3>                        
          </div>
          <div className="navEntry" id="pageContact" onClick={this.props.contact}>
            <h3>CONTACT</h3>                                    
          </div>
        </nav>
      );  
    }
  }

  export default Navigation;