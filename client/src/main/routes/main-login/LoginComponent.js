import React from 'react';

class LoginComponent extends React.Component {
    render() {
    return (
        <div className="main container">
            <div className="row">
                <div>
                    {/* <h1 className="header">Matumbiroo</h1> */}
                </div>
                <div className="buttons">
                    <button className="btn-login">log in</button>
                    <button onClick={this.props.showForm}className="btn-signup">sign up</button>
                </div>
            </div>
            <div className="welcome">
                <h1>Welcome to Matumbiroo.</h1>
                <p>-asdgljsda;glsa;gd;lgad;klg;lsjdkgs;</p>
                <p>Sadgsiojijgdsag;ds</p>
                <p>ffas;dgasdg;oihasdgoa</p>
            </div>
            <form className={this.props.className}>
                <button onClick={this.props.hideForm} className="button-hideform">Hide</button>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <input placeholder="Email" type="email"/>
                <button className="button-conf-signup">Sign up</button>
            </form>
        </div>
        )
    }
}

export default LoginComponent;