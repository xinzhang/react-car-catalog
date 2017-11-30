import * as types from './actionTypes';
import carApi from '../api/CarApi';

export const getAllMakers = () => async dispatch => {
    try {
        const makers = await carApi.getAllMakers();
        dispatch(getAllMakersSuccess(makers));
    } catch (err) {
        console.log(err);   
    }
}

function getAllMakersSuccess(makers) {
    return {type: types.LOAD_ALL_MAKERS, makers}
}
