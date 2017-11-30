import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getAllMakers, actions } from "../makerActions";
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


describe("Maker actions", () => {
  it("can load all makers", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, JSON.stringify([{id:1,name:'make1'},{id:2, name:'make2'}])));
    });
    const store = mockStore({});
    
    await store.dispatch(getAllMakers());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOAD_ALL_MAKERS");
  });

});
