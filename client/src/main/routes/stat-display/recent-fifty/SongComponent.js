import React from 'react';
import {Link} from 'react-router-dom';

class SongComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div className="song-wrapper">
            <span className="last-fifty-song-num">/ {this.props.index + 1} /</span><br/>
            <div className="fifty-track-artist">
                Track: {this.props.song.track.name}<br/>
                Artist: {this.props.song.track.artists[0].name}<br/>
                Length: {this.props.duration[this.props.index]}
            </div>
            <div className="container-fluid">
            <div className="row stats">
                <div className="col-md-4">
                    Energy<br/>
                    <div className="energy-bar">
                        <div className="energy-bar-overlay" style={{width: (this.props.energy[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
                <div className="col-md-4">
                    Danceability<br/>
                    <div className="dance-bar">
                        <div className="dance-bar-overlay" style={{width: (this.props.danceability[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
                <div className="col-md-4">
                    Valence<br/>
                    <div className="valence-bar">
                        <div className="valence-bar-overlay" style={{width: (this.props.valence[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-fluid level-two">
                <div className="row">
                    <div className="col-md-4">
                        Key: {this.props.musicKey[this.props.index]}
                    </div>
                    <div className="col-md-4">
                        Tempo: {this.props.tempo[this.props.index]}
                    </div>
                    <div className="col-md-4">
                        <Link to={`/song/${this.props.accessToken}/${this.props.refreshToken}/${this.props.id}`}><button className="gifify-btn">Gif-ify</button></Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SongComponent;
