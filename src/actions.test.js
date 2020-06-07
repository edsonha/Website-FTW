import * as actions from "./actions";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware]; // add your middlewares like `redux-thunk`
const mockStore = configureMockStore(middlewares);

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

describe("setSearchField action", () => {
  it("should create an action to search robots", () => {
    expect(actions.setSearchField("abc")).toEqual({
      type: CHANGE_SEARCHFIELD,
      payload: "abc",
    });
  });
});

describe("requestRobots action", () => {
  it("handles requesting robots API Pending and Success", async () => {
    const store = mockStore({});
    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const firstExpectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(firstExpectedAction);
    expect(action[1].type).toBe(REQUEST_ROBOTS_SUCCESS);
  });

  it("handles requesting robots API Pending and Failure", async () => {
    const store = mockStore({});
    await store.dispatch(actions.requestRobots("WrongURL"));
    const action = store.getActions();
    const firstExpectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(firstExpectedAction);
    expect(action[1].type).toBe(REQUEST_ROBOTS_FAILED);
  });
});
