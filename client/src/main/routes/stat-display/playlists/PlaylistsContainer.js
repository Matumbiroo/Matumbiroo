import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';
import PlaylistsComponent from "./PlaylistsComponent";

class PlaylistsContainer extends React.Component {
    componentDidMount() {
        const { accessToken, refreshToken } = this.props.match.params;
        this.props.setTokens({ accessToken, refreshToken });
        this.props.getMyInfo(accessToken);
        // this.props.getUserPlaylists();
        this.props.getAudioFeatures(accessToken);
    }
    genAverageValence = () => {
        let valence = this.genValence();
        return valence.length === 0 ? 0 :
            valence.reduce((t, next) => {
                return t + next;
            }) / valence.length;
    };
    genAverageEnergy = () => {
        let energy = this.genEnergy();
        return energy.length === 0 ? 0 :
            energy.reduce((t, next) => {
                return t + next;
            }) / energy.length;
    };
    genAverageDanceability = () => {
        let danceability = this.genDanceability();
        return danceability.length === 0 ? 0 :
            danceability.reduce((t, next) => {
                return t + next;
            }) / danceability.length;
    };
    genDuration = () => {
        return this.props.audioFeatures.map((audio, index) => {
            // let seconds = ((audio.duration_ms % 60000) / 1000).toFixed(0);
            return Math.floor(audio.duration_ms / 60000) + ":" + ((audio.duration_ms % 60000) / 1000).toFixed(0);
        })
    };
    genTempo = () => {
        return this.props.audioFeatures.map((audio, index) => {
            return audio.tempo;
        })
    };
    genEnergy = () => {
        return this.props.audioFeatures.map((audio, index) => {
            return audio.energy;
        })
    };
    genMusicKey = () => {
        return this.props.audioFeatures.map((audio, index) => {
            return audio.key;
        })
    };
    genDanceability = () => {
        return this.props.audioFeatures.map((audio, index) => {
            return audio.danceability;
        })
    };
    genValence = () => {
        return this.props.audioFeatures.map((audio, index) => {
            return audio.valence;
        })
    };
    genGifs = () => {
        return this.props.gifs.map((gif, index) => {
            return <img className="gifs" key={gif + index} src={gif.images.fixed_height.url} alt="" width="200px" height="200px" />
        })
    };

    // genAlbums = () => {
    //     return this.props.recentlyPlayed.map((recent, id)=> {
    //         return <div className="artwork-wrapper"><a href={recent.track.external_urls.spotify} target="_blank"><img key={recent.id} src={recent.track.album.images[1].url} alt=""/></a><br/></div>
    //     })
    // };
    render() {
        console.log('Playlists Props: ', this.props);
    return (
        <PlaylistsComponent/>
        )
    }
}

const mapStateToProps = (state)=> {
    return state
};

export default connect(mapStateToProps, actionCreators)(PlaylistsContainer);