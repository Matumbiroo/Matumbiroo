import React from 'react';
import RecentFifComponent from "./RecentFifComponent";
import {connect} from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';

class RecentFifContainer extends React.Component {
    render() {
        console.log(this.props);
    return (
        <RecentFifComponent

        />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(RecentFifContainer);