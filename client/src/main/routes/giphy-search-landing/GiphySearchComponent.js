import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../redux/actions/actions';


class GiphySearchComponent extends Component {
    render() {
    return (
        <div className="wrapper">
            <div className="title">
                <h1>Gif-iphy a Song<span className="blue-period">.</span></h1>
                <a className="no-link-underline" href="http://localhost:8080/login"><button className="login-btn"><span className="login-text">Login with <span className="separate">|</span></span></button></a>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GiphySearchComponent);
