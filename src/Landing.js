import React, { Component } from 'react';
import MainImage from "./MainImage.jpg";

class Landing extends Component {
    render(){
      return(
        <div className="landingContainer">
            <div className="landing">
            <div id="imageContainer">
                <img id="mainImage" src={MainImage} alt="" />
            </div>
            
            <div id="titleContainer">
                <h1>Quinn Dizon</h1>
                <h4>Composer, Conductor, Programmer</h4>
            </div>
    
            </div>
        </div>
      )
    }
  }

  export default Landing;