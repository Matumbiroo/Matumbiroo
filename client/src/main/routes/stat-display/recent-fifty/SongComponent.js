import React from 'react';
import {Link} from 'react-router-dom';

class SongComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div className="song-wrapper">
            <br/>
            Title: {this.props.song.track.name}<br/>
            Artist: {this.props.song.track.artists[0].name}<br/>
            Danceability: {this.props.danceability[this.props.index]}<br/>
            Valence: {this.props.valence[this.props.index]}<br/>
            <Link to={`/song/${this.props.accessToken}/${this.props.refreshToken}/${this.props.id}`}><button className="gifify-btn">Gif-ify</button></Link>
        </div>
        )
    }
}

export default SongComponent;
