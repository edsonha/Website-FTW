import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("should render Card component", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(wrapper).toMatchSnapshot();
});

it("should increment the counter correctly", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 4 });
  expect(wrapper.props().color).toBe("red");
});
