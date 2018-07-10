import React, { Component } from 'react';

class Home extends Component {

    render(){
        return(
            <div className="bioContainer">
                <h1>About:</h1>
                <hr />
                <p className="bio"><strong>Quinn Dizon</strong> is a composer, conductor, and programmer from Santa Rosa, California. His work as a composer has earned him recognition in the United States and Europe. He has been commissioned by various soloists and large ensembles to write works for a myriad of occasions and special events. </p>
                <p className="bio">In recent years, Quinn has worked as a conductor and been an advocate for the performance of new music. He has premiered, workshopped, and recorded several works by living composers. Additionally, he has been active as a music educator and has instructed grade school and college students in composition, conducting, music theory, and music technology.</p>
                <p className="bio">Quinn holds a Bachelors of Music in Composition from the College of Wooster,  and both a Masters in Composition and a Masters in Orchestral Conducting from the University of Louisville. Quinn is currently residing in the Washington D.C. area and is a doctoral candidate in composition at the University of Maryland College Park. Quinn teaches music theory courses at UMD, and is a current board member on the university's new music ensemble. Since 2015, he has been the recipient of the distinguished Flagship Fellowship award, given to only ten incoming doctoral students across all disciplines at UMD.</p>
            </div>
        )
    }
}

export default Home;