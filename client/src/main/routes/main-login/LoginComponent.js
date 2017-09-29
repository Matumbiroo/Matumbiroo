import React from 'react';

import './MainLogin.css';

class LoginComponent extends React.Component {
    render() {
    return (
        <div className="wrapper container">
            <div className="row">
                <div>
                    <h1 className="header">Matumbiroo</h1>
                </div>
                <div className="buttons">
                    <button className="btn-login">log in</button>
                    <button className="btn-signup">sign up</button>
                </div>
                
            </div>
            <div className="welcome">
                <h1>Welcome to Matumbiroo.</h1>
                <p>ba;sldkg;alskhdg;laskhdgasdklh;</p>
                <p>teohtweo;ihewhoi;ewih;tewhi;</p>
            </div>
            <form className="signup-form">
                <button className="button-hideform"></button>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="text"/>
                <input placeholder="Email" type="text"/>
                <button className="button-conf-signup">Sign up</button>
            </form>
        </div>
        )
    }
}

export default LoginComponent;