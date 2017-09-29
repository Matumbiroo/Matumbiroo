import React from 'react';
import {Link} from 'react-router-dom';

class HomeComponent extends React.Component {

    render() {

    return (
        <div className="home-component-wrapper">
            <Link to="/recent-fifty" className="recent-fifty-box" >Recent 50</Link>
            <Link to="/playlists" className="playlists-box" >Playlists</Link>
            <Link to="/songs" className="songs-box" >Songs</Link>
            <Link to="/side-bar" className="side-bar-box" >Side Bar</Link>
        </div>
        )
    }
}

export default HomeComponent;