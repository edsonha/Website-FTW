import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("should render MainPage component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should filter robots correctly", () => {
  const newMockProps = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: "John", email: "john@gmail.com" }],
    searchField: "a",
    isPending: false,
  };
  const newWrapper = shallow(<MainPage {...newMockProps} />);
  expect(newWrapper.instance().filterRobots()).toEqual([]);
});

it("should filter robots correctly 2", () => {
  const newMockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: "John", email: "john@gmail.com" }],
    searchField: "john",
    isPending: false,
  };
  const filteredRobots = [{ id: 1, name: "John", email: "john@gmail.com" }];
  const newWrapper2 = shallow(<MainPage {...newMockProps2} />);
  expect(newWrapper2.instance().filterRobots()).toEqual(filteredRobots);
});

it("should filter robots correctly 3", () => {
  const newMockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      { id: 1, name: "John", email: "john@gmail.com" },
      { id: 2, name: "Abby", email: "abby@gmail.com" },
    ],
    searchField: "a",
    isPending: false,
  };
  const filteredRobots = [{ id: 2, name: "Abby", email: "abby@gmail.com" }];
  const newWrapper3 = shallow(<MainPage {...newMockProps3} />);
  expect(newWrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
