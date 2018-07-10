import React, { Component } from 'react';


const largeEnsemble = [
    {
        title: "Track one",
        source: "source 1"
    },
    {
        title: "Track two",
        source: "source 2"
    },
    {
        title: "Track Three",
        source: "source 3"
    },
    {
        title: "Track four",
        source: "source 4"
    }, 
    {
        title: "Track five",
        source: "source 5"
    }
];

const chamberEnsemble = [
    {
        title : "Chamber 1",
        source : "source 1"
    },
    {
        title : "Chamber 2",
        source : "source 2"
    },
]

class Listen extends Component {
    render(){
        let largeEnsembleTracks = largeEnsemble.map((track, index) => {
            return(
                <div key={index} className="track largeEnsemble" >
                    <h4 className="title">{track.title}</h4>
                    <audio controls>
                        <source src={track.source} type="audio/ogg"/>
                    </audio>
                </div>
            )
        })

        let chamberEnsembleTracks = chamberEnsemble.map((track, index) => {
            return(
                <div key={index} className="track chamberEnsemble" >
                    <h4 className="title">{track.title}</h4>
                    <audio controls>
                        <source src={track.source} type="audio/ogg"/>
                    </audio>
                </div>
            )
        })

        return(
            <div className="listenContainer">
                <div className="largeEnsembleContainer">
                    <h2>Large Ensemble</h2>
                    <div className="genreSection">
                        {largeEnsembleTracks}
                    </div>
                    <hr/>
                </div>
                <div className="chamberEnsembleContainer">
                    <h2>Chamber Ensemble</h2>
                    <div className="genreSection">
                        {chamberEnsembleTracks}
                    </div>
                    <hr/>
                </div>

            </div>
        );
    }
}

export default Listen;