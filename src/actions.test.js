import * as actions from "./actions";

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
