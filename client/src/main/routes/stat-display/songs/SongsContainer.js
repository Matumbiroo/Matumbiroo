import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';
import SongsComponent from "./SongsComponent";

class SongsContainer extends React.Component {
    componentDidMount() {
        const { accessToken, refreshToken } = this.props.match.params;
        this.props.setTokens({ accessToken, refreshToken });
        this.props.getAudioFeatures(accessToken);
        this.props.getUserSongs(accessToken);
    }
    render() {
        console.log('userSongs:', this.props.userSongs);
    return (
        <SongsComponent/>
        )
    }
}

const mapStateToProps =(state)=> {
    return state
};

export default connect(mapStateToProps, actionCreators)(SongsContainer);