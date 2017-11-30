import * as types from '../actions/actionTypes';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function makeReducer(state = initialState.makers, action) {
  switch (action.type) {
    case types.LOAD_ALL_MAKERS:
      return [...state, ...action.makers]
    default:
      return state;
  }
}
