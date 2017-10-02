import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../redux/actions/actions';


class GiphySearchComponent extends Component {
    componentDidMount() {
        this.props.giphify();
    }
    genGifs =()=> {
        return this.props.gifs.map((gif, index)=> {
            return gif.images.embed_url;
        })
    };
    render() {
    return (
        <div className="wrapper">
            <h1 className="title">Title Goes Here</h1>
            <div className="login">
                <h2>Here's our login page!</h2>
                <a href="http://localhost:8080/login"><button className="login-btn">Login with Spotify</button></a>
            </div>
            <input className="search-bar" type="text"/>
            <img src={this.genGifs()} alt=""/>
        </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GiphySearchComponent);
