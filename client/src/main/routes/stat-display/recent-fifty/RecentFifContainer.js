import React from 'react';
import RecentFifComponent from "./RecentFifComponent";
import {connect} from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';

class RecentFifContainer extends React.Component {
    componentDidMount() {
        this.props.giphify();
        const {accessToken, refreshToken} = this.props.match.params;
        this.props.setTokens({accessToken, refreshToken});
        this.props.getMyInfo();
        this.props.getRecentFifty(accessToken);
        this.props.getAudioFeatures(accessToken);

    }
    genDanceability=()=> {
        return this.props.audioFeatures.map((audio, index)=> {
            return audio.danceability;
        })
    };
    genValence=()=> {
        return this.props.audioFeatures.map((audio, index)=> {
            return audio.valence;
        })
    };
    genSpeechiness =()=> {
        return this.props.audioFeatures.map((audio, index)=> {
            return audio.speechiness;
        })
    };

    genRecentFifty =()=> {
        let danceability = this.genDanceability();
        let valence = this.genValence();
        let speechiness = this.genSpeechiness();
        return this.props.recentlyPlayed.map((song, index) => {
            return <div className="song-component" key={index + song.track.name}>{(index + 1) + ". " + song.track.name} <br/>
                Artist: {song.track.artists[0].name} <br/>
                Danceability: {danceability[index]} <br/>
                Valence: {valence[index]}<br/>
                Speechiness: {speechiness[index]}<br/>
                <button>Giphify</button>
            </div>
        })
    };


    render() {
        console.log(this.props.gifs);
    return (
        <RecentFifComponent
            genRecentFifty={this.genRecentFifty}
        />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(RecentFifContainer);