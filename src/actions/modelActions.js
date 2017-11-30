import * as types from './actionTypes';
import carApi from '../api/CarApi';

export const getModels = makerId => async dispatch => {
  try {
    const models = await carApi.getModelsByMakerId(makerId);
    dispatch(getModelsSuccess(models));
  } catch (err) {
    console.log(err);
  }
};

function getModelsSuccess(models) {
  return { type: types.LOAD_MODELS, models };
}

export const getCarOfWeek = () => async dispatch => {
  try {
    const car = await carApi.getCarOfWeek();    
    dispatch(getCarOfWeekSuccess(car));
    dispatch(getModelById(car.modelId));
  } catch (err) {
    console.log(err);
  }
};

function getCarOfWeekSuccess(car) {
  return { type: types.LOAD_CAR_OF_WEEK, car };
}

export const getModelById = (modelId) => async dispatch => {
  try {
    const car = await carApi.getModelById(modelId);
    dispatch(getModelByIdSuccess(car));
  } catch (err) {
    console.log(err);
  }
};

function getModelByIdSuccess(car) {
  return { type: types.LOAD_CAR_MODEL_ID, car };
}
