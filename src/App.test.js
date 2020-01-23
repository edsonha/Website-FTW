import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
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

describe("Searchbar", () => {
  it("should be able to search todo item from todo list", () => {
    const { getByTestId, getAllByText, getByText, queryByText } = render(
      <App />
    );
    const searchbar = getByTestId("searchbar");

    fireEvent.change(searchbar, { target: { value: "task1" } });
    expect(getAllByText("EDIT").length).toEqual(1);
    expect(getByText(/task1/i)).toBeInTheDocument();
    expect(queryByText(/task2/i)).not.toBeInTheDocument();

    fireEvent.change(searchbar, { target: { value: "task2" } });
    expect(getAllByText("EDIT").length).toEqual(1);
    expect(getByText(/task2/i)).toBeInTheDocument();
    expect(queryByText(/task1/i)).not.toBeInTheDocument();
  });
});

describe("Checkbox", () => {
  it("should mark Todo item as completed when it is clicked and Todo item can revert back to uncompleted status when it is clicked again", () => {
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

describe("Delete button", () => {
  it("should delete Todo item when it is clicked", () => {
    const { queryByText, getAllByText, getByTestId } = render(<App />);
    const task1DeleteButton = getByTestId("deletebutton-task1");
    const task2DeleteButton = getByTestId("deletebutton-task2");

    fireEvent.click(task1DeleteButton);
    expect(getAllByText("EDIT").length).toEqual(1);
    expect(queryByText(/task1/i)).not.toBeInTheDocument();

    fireEvent.click(task2DeleteButton);
    expect(queryByText("EDIT")).not.toBeInTheDocument();
    expect(queryByText(/task2/i)).not.toBeInTheDocument();
  });
});
