import React, { Component } from 'react';

class Navigation extends Component {
    render(){
      return(
        <nav className="pageNavigation">
          <div id="pageHome">
            <h3 class="navEntry">HOME</h3>
          </div>
          <div id="pageListen">
            <h3 class="navEntry">LISTEN</h3>            
          </div>
          <div id="pageEvents">
            <h3 class="navEntry">EVENTS</h3>            
          </div>
          <div id="pageResume">
            <h3 class="navEntry">RESUME</h3>                        
          </div>
          <div id="pageContact">
            <h3 class="navEntry">CONTACT</h3>                                    
          </div>
        </nav>
      );  
    }
  }

  export default Navigation;