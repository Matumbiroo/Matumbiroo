import React from 'react';
import RecentFifComponent from "./RecentFifComponent";
import {connect} from 'react-redux';
import * as actionCreators from '../../../../redux/actions/actions';

class RecentFifContainer extends React.Component {
    componentDidMount() {
        const {accessToken, refreshToken} = this.props.match.params;
        this.props.setTokens({accessToken, refreshToken});
        this.props.getMyInfo();
        this.props.getRecentFifty(accessToken);
    }
    render() {
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