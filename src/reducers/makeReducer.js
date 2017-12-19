import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function makeReducer(state = initialState.makers, action) {
  switch (action.type) {
    case types.LOAD_ALL_MAKERS:
      return [...state, ...action.makers]
    default:
      return state;
  }
}
