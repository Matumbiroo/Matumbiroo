import React from 'react';
import {Link} from 'react-router-dom';

class HomeComponent extends React.Component {

    render() {
        return (
        <div className="home-component-wrapper">
            <div className="recent-fifty-box" >
                <Link className="recent-fifty-link" to={`/recent-fifty/${this.props.accessToken}/${this.props.refreshToken}`}><button className="recent-btn"><span className="recent-text">Recently Played <span className="separate">|</span></span></button></Link>
                <div className="album-art">
                    {this.props.genAlbums()}
                </div>
            </div>
            <Link to="/playlists" className="playlists-box" ></Link>
            <Link to="/songs" className="songs-box" ></Link>
            <Link to="/side-bar" className="side-bar-box" ></Link>
        </div>
        )
    }
}

export default HomeComponent;