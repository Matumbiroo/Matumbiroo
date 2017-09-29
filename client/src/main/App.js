import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Error from './routes/misc-containers/error';
import HomeContainer from "./routes/home-view/HomeContainer";
import LoginContainer from "./routes/main-login/LoginContainer";
import GiphySearchContainer from "./routes/giphy-search-landing/GiphySearchContainer";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/user/:accessToken/:refreshToken" component={HomeContainer}/>
                    <Route exact path="/error/:errorMsg" component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
