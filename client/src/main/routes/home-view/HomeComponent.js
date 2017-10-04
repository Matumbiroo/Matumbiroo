import React from 'react';
import {Link} from 'react-router-dom';
import * as Vibrant from 'node-vibrant';

class HomeComponent extends React.Component {

    render() {
        const vibrant = Vibrant.from(this.props.imageUrl2).getPalette((err,palette)=>{

            for (var swatch in palette)
                if (palette.hasOwnProperty(swatch) && palette[swatch])
                    console.log(palette[swatch])
        });


        return (
        <div className="home-component-wrapper">
            <Link to={`/recent-fifty/${this.props.accessToken}/${this.props.refreshToken}`} className="recent-fifty-box" >
                <div className="album-art">
                    {this.props.genAlbums()}
                </div>
            </Link>
            <Link to="/playlists" className="playlists-box" >Playlists</Link>
            <Link to="/songs" className="songs-box" >Songs</Link>
            <Link to="/side-bar" className="side-bar-box" >Side Bar</Link>
        </div>
        )
    }
}

export default HomeComponent;