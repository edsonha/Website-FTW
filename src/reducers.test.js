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

describe("requestRobots", () => {
  const intialStateRobots = {
    robots: [],
    isPending: false,
  };

  it("should return the intial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(intialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(intialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ isPending: true, robots: [] });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    const mockRobots = [
      { id: 1, name: "John", email: "john@gmail.com" },
      { id: 2, name: "Abby", email: "abby@gmail.com" },
    ];
    expect(
      reducers.requestRobots(intialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockRobots,
      })
    ).toEqual({ isPending: false, robots: mockRobots });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(intialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "ERROR",
      })
    ).toEqual({ isPending: false, robots: [], error: "ERROR" });
  });
});
