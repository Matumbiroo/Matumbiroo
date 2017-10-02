import React from 'react';
import GiphifyComponent from "./GiphifyComponent";
import * as actionCreators from '../../../../redux/actions/actions';
import {connect} from 'react-redux';

class GiphifyContainer extends React.Component {
    render() {
    return (
        <div>
            <GiphifyComponent/>
        </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GiphifyContainer);