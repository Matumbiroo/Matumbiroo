import React from 'react';
import {Link} from 'react-router-dom';

class SongComponent extends React.Component {
    render() {
    return (
        <div className="song-wrapper">
            <span className="last-fifty-song-num">/ {this.props.index + 1} /</span><br/>
            <div className="fifty-track-artist">
                <div className="track-recent-fif">
                    Track: {this.props.song.track.name}<br/>
                </div>
                <div className="artist-recent-fif">
                    Artist: {this.props.song.track.artists[0].name}<br/>
                </div>
                <div className="length-recent-fif">
                    Length: {this.props.duration[this.props.index]}
                </div>
                <div className="gif-btn-container">
                    <Link to={`/song/${this.props.accessToken}/${this.props.refreshToken}/${this.props.id}`}><button className="gifify-btn">Gif-ify</button></Link>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row stats-row-fifty">
                <div className="col-md-4 stats-col">
                    Energy<br/>
                    <div className="energy-bar">
                        <div className="energy-bar-overlay" style={{width: (this.props.energy[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
                <div className="col-md-4 stats-col">
                    Danceability<br/>
                    <div className="dance-bar">
                        <div className="dance-bar-overlay" style={{width: (this.props.danceability[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
                <div className="col-md-4 stats-col">
                    Valence<br/>
                    <div className="valence-bar">
                        <div className="valence-bar-overlay" style={{width: (this.props.valence[this.props.index] * 100) + "%"}}></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-fluid stats-row-fifty">
                <div className="row">
                    <div className="col-md-4 stats-col">
                        Key: {this.props.musicKey[this.props.index]}
                    </div>
                    <div className="col-md-4 stats-col">
                        Mode: {this.props.mode[this.props.index]}
                    </div>
                    <div className="col-md-4 stats-col">
                        Tempo: {this.props.tempo[this.props.index]}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SongComponent;
