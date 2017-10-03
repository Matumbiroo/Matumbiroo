import React from 'react';
import GiphifyComponent from "./GiphifyComponent";
import * as actionCreators from '../../../../redux/actions/actions';
import {connect} from 'react-redux';

class GiphifyContainer extends React.Component {
    componentDidMount() {
        const {accessToken, refreshToken, id} = this.props.match.params;
        this.props.setTokens({accessToken, refreshToken});
        this.props.getMyInfo();
        this.props.getCurrentSong(accessToken, id);
        this.props.getCurrentSongAudio(accessToken, id);
        this.props.giphify(this.props.currentSong.artists[0].name, this.props.currentSong.name)

    }
    genGifs =()=>{
        return this.props.currentSong.gifs.map((gif, index)=> {
            return gif.images.fixed_height.webp;
        })
    };
    render() {
       if (!this.props.currentSong.gifs) console.log(this.props);

    return (
        <div>
            <GiphifyComponent
                currentSong={this.props.currentSong}
                artist={this.props.currentSong.artists[0].name}
                genGifs={this.genGifs}
            />
        </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GiphifyContainer);