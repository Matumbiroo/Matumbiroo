import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/reducers';

import './index.css'
import App from './main/App';

let store = createStore(mainReducer, applyMiddleware(thunk));

store.subscribe(()=> {
    console.log(store.getState())
});

ReactDOM.render(<Provider store={store}><App/></Provider> ,document.getElementById('root'));

//wtf merge error