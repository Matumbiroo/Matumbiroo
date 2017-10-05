import React from 'react';
import RecentFifComponent from "./RecentFifComponent";
import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';
import SongComponent from './SongComponent';

class RecentFifContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            artist: null,
            song: null,
            totalValence: 0
        }
    }
    componentDidMount() {
        const { accessToken, refreshToken } = this.props.match.params;
        this.props.setTokens({ accessToken, refreshToken });
        this.props.getMyInfo();
        this.props.getRecentFifty(accessToken);
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
    genGifInputs = () => {
        return this.props.recentlyPlayed.map((song, index) => {
            return {
                artist: song.track.artists[0].name,
                song: song.track.name
            }
        })
    };
    genRecentFifty = () => {

        let danceability = this.genDanceability();
        let valence = this.genValence();
        let musicKey = this.genMusicKey();
        let tempo = this.genTempo();
        let energy = this.genEnergy();
        let duration = this.genDuration();

        return this.props.recentlyPlayed.map((song, index) => {
            return <SongComponent

                key={index + song.track.name}
                danceability={danceability}
                valence={valence}
                musicKey={musicKey}
                tempo={tempo}
                energy={energy}
                duration={duration}
                song={song}
                index={index}
                accessToken={this.props.accessToken}
                refreshToken={this.props.refreshToken}
                id={song.track.id}
                getCurrentSong={this.props.getCurrentSong}
                getCurrentSongAudio={this.props.getCurrentSongAudio}
                setTokens={this.props.setTokens}

            />
        })
    };
    genAlbums = () => {
        return this.props.recentlyPlayed.map((recent, id)=> {
            return <div className="artwork-wrapper"><img key={recent.id} src={recent.track.album.images[1].url} alt=""/><br/></div>
        })
    };
    render() {
        return (
            <RecentFifComponent
                genAlbums={this.genAlbums}
                avgDanceability = {this.genAverageDanceability()}
                avgEnergy = {this.genAverageEnergy()}
                avgValence={this.genAverageValence()}
                genRecentFifty={this.genRecentFifty}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(RecentFifContainer);