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

    }
    genGifs =()=>{
        return this.props.currentSong.gifs.map((gif, id)=> {
            return <img key={id} src={gif.images.fixed_height.webp} alt=""/>
        })
    };
    render() {

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