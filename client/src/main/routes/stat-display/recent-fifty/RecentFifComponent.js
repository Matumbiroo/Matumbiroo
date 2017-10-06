import React from 'react';

class RecentFifComponent extends React.Component {
    render() {
    return (
        <div className="recent-fifty-wrapper">
            <div className="spotify-provided-by">
                <span>Provided by</span>
            </div>
            {/* <img src="Spotify_Logo_RGB_White.png" alt="Spotify Logo"/> */}
            <div className="profile-averages">
                    <p>/ LAST 50 AVERAGES /</p>
                <div className="container-fluid profile-averages-inner">
                    <div className="row stats-row-fifty">
                        <div className="col-md-4">
                            Energy
                            <div className="energy-bar-average">
                                <div className="energy-bar-average-overlay" style={{width: (this.props.avgEnergy * 100) + "%"}}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            Danceability
                            <div className="dance-bar-average">
                                <div className="dance-bar-average-overlay" style={{width: (this.props.avgDanceability * 100) + "%"}}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            Valence
                            <div className="valence-bar-average">
                                <div className="valence-bar-average-overlay" style={{width: (this.props.avgValence * 100)+ "%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className="recent-fifty-artwork-view">
                / ARTWORK /
                    {this.props.genAlbums()}
            </div>
            <div className="scroll-view"><span>/ last 50 songs /</span>
                {this.props.genRecentFifty()}
            </div>
        </div>
        )
    }
}

export default RecentFifComponent;
