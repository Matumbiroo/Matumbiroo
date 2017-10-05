import React from 'react';
import {Link} from 'react-router-dom';

class HomeComponent extends React.Component {

    render() {
        return (
        <div className="home-component-wrapper">
            <Link to={`/recent-fifty/${this.props.accessToken}/${this.props.refreshToken}`} className="recent-fifty-box" >
                <div className="album-art">
                    {this.props.genAlbums()}
                </div>
            </Link>
            <Link to="/playlists" className="playlists-box" ></Link>
            <Link to="/songs" className="songs-box" ></Link>
            <Link to="/side-bar" className="side-bar-box" ></Link>
        </div>
        )
    }
}

export default HomeComponent;