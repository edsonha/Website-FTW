import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";
import * as actions from "./actions";

describe("searchRobots", () => {
  const intialStateSearch = {
    searchField: "",
  };
  it("should return the intial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(intialStateSearch, actions.setSearchField("abc"))
    ).toEqual({
      searchField: "abc",
    });
    expect(
      reducers.searchRobots(intialStateSearch, actions.setSearchField("john"))
    ).toEqual({
      searchField: "john",
    });
  });
});
