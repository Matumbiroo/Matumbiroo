import React from 'react';
import './giphy-search.css';

class GiphySearchComponent extends React.Component {
    render() {
    return (
        <div className="wrapper">
            <button className="login-btn">Login with Spotify</button>
            <input className="search-bar" type="text"/>
        </div>
        )
    }
}

export default GiphySearchComponent;
