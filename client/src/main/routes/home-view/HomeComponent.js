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
            <div className="playlists-box" >
                <Link to={`/playlists/${this.props.accessToken}/${this.props.refreshToken}`} className="playlists-link" ><button className="playlists-btn"><span className="recent-text">User Playlists <span className="separate-playlist">|</span></span></button></Link>
                <div className="playlist-song-album">
                    {this.props.genPlaylistImg()}
                </div>
            </div>
            <div className="songs-box" >
                <Link to={`/songs/${this.props.accessToken}/${this.props.refreshToken}`} className="songs-link" ><button className="songs-btn"><span className="recent-text">Saved Tracks <span className="separate-songs">|</span></span></button></Link>
                <div className="playlist-song-album">
                    {this.props.genSongAlbums()}
                </div>
            </div>
            <div className="side-bar-box" >
                {/*<Link to="/side-bar" className="side-bar-link" ><button className="recent-btn"><span className="recent-text">Side Bar <span className="separate">|</span></span></button></Link>*/}
                {/*<div className="album-art">*/}
                    {/*{this.props.genAlbums()}*/}
                {/*</div>*/}
            </div>

        </div>
        )
    }
}

export default HomeComponent;