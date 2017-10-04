import React from 'react';
import LoginComponent from './LoginComponent';

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            className: "",
            loginClassName: ""
        }
    }
    toggleShow = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                className: prevState.className === "show-form" ? "default-form" : "show-form",
                loginClassName: "login-form-default"
            }
        })
    }
    toggleLogin = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                className: "default-form",
                loginClassName: prevState.loginClassName === "login-form-show" ? "login-form-default" : "login-form-show"
            }
        })
    }
    toggleShowMusic = () => {
        
    }
    toggleShowSongs = () => {
        
    }
    render() {
        return (
            <LoginComponent
                toggleLogin = {this.toggleLogin}
                toggleShow = {this.toggleShow}
                className = {this.state.className}
                loginClassName = {this.state.loginClassName}
            />
        )
    }
}

export default LoginContainer;
