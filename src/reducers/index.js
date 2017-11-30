import { combineReducers } from 'redux';
import makers from './makeReducer';
import model from './modelReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  makers,
  model,
  routing: routerReducer
});

export default rootReducer;
