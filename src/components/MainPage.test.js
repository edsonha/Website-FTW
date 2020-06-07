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
