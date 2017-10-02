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
    render() {
        console.log(this.props.currentSong);
    return (
        <div>
            <GiphifyComponent
            />
        </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GiphifyContainer);