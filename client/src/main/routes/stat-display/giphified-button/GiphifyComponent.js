import React from 'react';

class GiphifyComponent extends React.Component {


    render() {
        let artist = this.props.artist;
        let song = this.props.currentSong.name;

    return (
        <div className="gifified-wrapper">
            <div className="gifified">/ {song} /</div><span className="giphy">Powered by GIPHY</span>
            <div className="gifified">/ {artist} /</div>
            {this.props.genGifs()}
        </div>
        )
    }
}

export default GiphifyComponent;