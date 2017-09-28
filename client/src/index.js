import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './redux/reducers/reducers';

import App from './main/App';

const store = createStore(mainReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(()=> {
    console.log(store.getState())
});

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider> ,document.getElementById('root'));