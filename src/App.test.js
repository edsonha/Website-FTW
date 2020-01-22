import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import seedData from "./utils/seedData";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const sampleData = [
  { id: 1, task: "task1", isCompleted: false },
  { id: 2, task: "task2", isCompleted: true }
];

beforeEach(() => {
  jest.spyOn(seedData, "getTodos").mockImplementation(() => sampleData);
});

afterEach(() => {
  seedData.getTodos.mockRestore();
});

describe("App Homepage", () => {
  it("should display 2 Todo items on load", () => {
    const { getAllByText } = render(<App />);

    expect(getAllByText("EDIT").length).toEqual(2);
  });
});

describe("Todo Item", () => {
  it("should be marked as completed when checkbox is clicked and Todo Item can revert back to uncompleted status when the checkbox is clicked again", () => {
    const { getByText, getByTestId } = render(<App />);
    const todo = getByText("task1");
    const todoCheckbox = getByTestId("checkbox-task1");

    expect(todo.classList.contains("strike")).toEqual(false);
    fireEvent.click(todoCheckbox);
    expect(todo.classList.contains("strike")).toEqual(true);
    fireEvent.click(todoCheckbox);
    expect(todo.classList.contains("strike")).toEqual(false);
  });
});
