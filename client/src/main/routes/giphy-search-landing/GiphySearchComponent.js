import React, {Component} from 'react';
import './giphy-search.css';

class GiphySearchComponent extends Component {
    render() {
    return (
        <div className="wrapper">
            <h1 className="title">Title Goes Here</h1>
            <div className="login">
                <h2>Here's our login page!</h2>
                <a href="http://localhost:8080/login"><button className="login-btn">Login with Spotify</button></a>
            </div>
            <input className="search-bar" type="text"/>
        </div>
        )
    }
}

export default GiphySearchComponent;
