import React from 'react';
import LoginComponent from './LoginComponent';

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            className: null
        }
    }
    toggleShow = () => {
        this.setState((prevState) => {
            return {
                className: prevState.className === "show-form" ? null : "show-form"
            }
        })
    }

    render() {
        return (
            <LoginComponent
                toggleShow={this.toggleShow}
                className={this.state.className}
            />
        )
    }
}

export default LoginContainer;
