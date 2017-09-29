import React from 'react';
import { connect }      from 'react-redux';
import {
    getMyInfo,
    setTokens,
}   from '../../../redux/actions/actions';

class HomeComponent extends React.Component {
    componentDidMount() {
        // params injected via react-router, dispatch injected via connect
        const {dispatch, params} = this.props;
        const {accessToken, refreshToken} = params;
        dispatch(setTokens({accessToken, refreshToken}));
        dispatch(getMyInfo());
    }
    render() {
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
        <div>

        </div>
        )
    }
}

export default HomeComponent;