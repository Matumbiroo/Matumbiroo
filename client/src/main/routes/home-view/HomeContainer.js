import React from 'react';
import HomeComponent from "./HomeComponent";
import { connect }      from 'react-redux';
import * as actionCreators from '../../../redux/actions/actions';

class HomeContainer extends React.Component {
    componentDidMount() {
        // params injected via react-router, dispatch injected via connect
        const {accessToken, refreshToken} = this.props.match.params;
        this.props.setTokens({accessToken, refreshToken});
        this.props.getMyInfo();
        this.props.getRecentFifty(accessToken);
    }
    render() {
        // console.log('recent-fifty', this.props.recentImgUrl1);
        const {accessToken, refreshToken, user} = this.props;
        const {
            loading,
            display_name,
            images,
            id,
            email,
            external_urls,
            href,
            country,
            product
        } = user;
        const imageUrl = images[0]
            ? images[0].url
            : "";
        // if we're still loading, indicate such
        if (loading) {
            return <h2>Loading...</h2>;
        }
    return (
        <HomeComponent
            accessToken={accessToken}
            refreshToken={refreshToken}
            // imageUrl1={this.props.recentImgUrl1}
            // imageUrl2={this.props.recentImgUrl2}
        />
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(HomeContainer);