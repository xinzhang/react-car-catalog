/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import {getAllMakers} from './actions/makerActions';

import './index.css';

const store = configureStore();
store.dispatch(getAllMakers());

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('app')
// );

ReactDOM.render((
    <Provider store={ store } >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>   
), document.getElementById('root'));
