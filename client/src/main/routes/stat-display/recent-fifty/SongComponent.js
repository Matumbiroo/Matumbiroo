import React from 'react';
import {Link} from 'react-router-dom';

class SongComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>
            <br/>
            Artist: {this.props.song.track.artists[0].name}<br/>
            Danceability: {this.props.danceability}<br/>
            Valence: {this.props.valence}<br/>
            <Link to={`/song/${this.props.accessToken}/${this.props.refreshToken}/${this.props.id}`}><button>Giphify</button></Link>
        </div>
        )
    }
}

export default SongComponent;
