import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("should render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      email: "john@gmail.com",
    },
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
