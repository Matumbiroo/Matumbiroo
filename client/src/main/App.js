import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Error from './routes/misc-containers/error';
import HomeContainer from "./routes/home-view/HomeContainer";
import LoginContainer from "./routes/main-login/LoginContainer";
import GiphySearchContainer from "./routes/giphy-search-landing/GiphySearchContainer";
import RecentFifContainer from "./routes/stat-display/recent-fifty/RecentFifContainer";
import GiphifyContainer from "./routes/stat-display/giphified-button/GiphifyContainer";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/giphy" component={GiphySearchContainer}/>
                    <Route exact path="/user/:accessToken/:refreshToken" component={HomeContainer}/>
                    <Route exact path="/error/:errorMsg" component={Error}/>
                    <Route exact path="/recent-fifty/:accessToken/:refreshToken" component={RecentFifContainer}/>
                    <Route exact path="/playlists" component={RecentFifContainer}/>
                    <Route exact path="/songs" component={RecentFifContainer}/>
                    <Route exact path="/side-bar" component={RecentFifContainer}/>
                    <Route exact path="/song/:accessToken/:refreshToken/:id" component={GiphifyContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
