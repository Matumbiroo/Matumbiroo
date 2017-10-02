import React from 'react';

class SongComponent extends React.Component {
    render() {
    return (
        <div>
            <br/>
            Artist: {this.props.song.track.artists[0].name}<br/>
            Danceability: {this.props.danceability}<br/>
            Valence: {this.props.valence}<br/>
            <Link to="/song/:id"><button>Giphify</button></Link>
        </div>
        )
    }
}

export default SongComponent;
