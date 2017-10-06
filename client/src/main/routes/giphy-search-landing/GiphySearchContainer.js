import React from 'react';
import GiphySearchComponent from './GiphySearchComponent';
import {connect} from 'react-redux';
import * as actionCreators from 'redux';

class GiphySearchContainer extends React.Component {
    render() {
    return (
        <GiphySearchComponent/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(GiphySearchContainer);
