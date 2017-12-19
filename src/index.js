/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import {getAllMakers} from './actions/makerActions';

import './index.css';

const store = configureStore();
store.dispatch(getAllMakers());

ReactDOM.render((
    <Provider store={ store } >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>   
), document.getElementById('root'));
