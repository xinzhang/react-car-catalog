import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getModels, getCarOfWeek, actions } from "../modelActions";
import * as types from "../actionTypes";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  });
};


describe("Car Model actions", () => {
  it("can load all models", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, JSON.stringify([{id:1,name:'make1'},{id:2, name:'make2'}])));
    });
    const store = mockStore({});
    
    await store.dispatch(getModels());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOAD_MODELS");
  });

  it("can load car of week", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, JSON.stringify([{id:1,name:'make1'},{id:2, name:'make2'}])));
    });
    const store = mockStore({});
    
    await store.dispatch(getCarOfWeek());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOAD_CAR_OF_WEEK");
  });

});
