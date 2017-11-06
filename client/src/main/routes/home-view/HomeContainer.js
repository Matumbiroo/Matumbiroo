import React from 'react';
import HomeComponent from "./HomeComponent";
import { connect }      from 'react-redux';
import * as actionCreators from '../../../redux/actions/actions';

class HomeContainer extends React.Component {
    componentDidMount() {
        // params injected via react-router, dispatch injected via connect
        const {accessToken, refreshToken} = this.props.match.params;
        this.props.setTokens({accessToken, refreshToken});
        this.props.getMyInfo(accessToken);
        this.props.getUserSongs(accessToken);
        this.props.getRecentFifty(accessToken);
    }
    genAlbums =()=> {
        return this.props.recentlyPlayed.map((recent, id)=> {
            return <div key={id} className="no-margin-album"><a className="album-link" href={recent.track.external_urls.spotify} target="_blank"><img className="album-art" key={recent.id} src={recent.track.album.images[1].url} alt=""/></a><br/></div>
        })
    };
    genSongAlbums =()=> {
        return this.props.userSongs.map((song, id) => {
            return <div key={id} className="pps"><a className="album-link" href={song.track.external_urls.spotify} target="_blank"><img className="song-album-art" key={song.id} src={song.track.album.images[1].url} alt=""/></a><br/></div>
        })
    };
    genPlaylistImg = () => {
        return this.props.userPlaylists.map((playlist, id) => {
            // return <div key={id} className="pps"><a className="playlist-album-link" href={playlist.external_urls.spotify} target="_blank"><img className="playlist-album-art" key={playlist.id} src={playlist.images[0].url} alt=""/></a><br/></div>
        })
    };
    render() {
        const {accessToken, refreshToken, user} = this.props;
        const {
            loading,
            // display_name,
            // images,
            // id,
            // email,
            // external_urls,
            // href,
            // country,
            // product
        } = user;
        // const imageUrl = images[0]
        //     ? images[0].url
        //     : "";
        // if we're still loading, indicate such
        if (loading) {
            return <h2>Loading...</h2>;
        }
    return (
        <HomeComponent
            accessToken={accessToken}
            refreshToken={refreshToken}
            genAlbums={this.genAlbums}
            genSongAlbums={this.genSongAlbums}
            genPlaylistImg={this.genPlaylistImg}
        />
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(HomeContainer);