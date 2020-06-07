import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("should render Card component", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
