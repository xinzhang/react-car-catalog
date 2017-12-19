import * as types from '../actions/actionTypes';

const initModelValues = {
  models:[],
  carOfWeek:{},
  currentCarDetail:{}
}

export default function modelReducer(state = initModelValues, action) {
  switch (action.type) {
    case types.LOAD_MODELS:
      return {...state, models: action.models};
    case types.LOAD_CAR_OF_WEEK:
      return {...state, carOfWeek: action.car};
    case types.LOAD_CAR_MODEL_ID:
        return {...state, currentCarDetail: action.car};
    default:
      return state;
  }
}
