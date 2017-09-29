import React from 'react';
import LoginComponent from './LoginComponent';

class LoginContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            className: "signup-form hide"
        }
    }
    showForm = () => {
        this.setState(() => {
            return {
                className: "signup-form show-form"
            }
        })
    }
    hideForm = () => {
        this.setState(() => {
            return {
                className: "signup-form hide"
            }
        })
    }
    render() {
    return (
        <LoginComponent
        className = {this.state.className}
        showForm = {this.showForm}
        hideForm = {this.hideForm}
        />
        )
    }
}

export default LoginContainer;
