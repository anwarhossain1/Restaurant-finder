import React from "react";
import { screen } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import UserEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import Home from "./Home";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("h1 tag", () => {
  it("should render h1 tag", () => {
    render(<Home />, container);
    screen.debug();
    expect(screen.getByText("Restaurant Finder")).toBeInTheDocument();
  });
});

describe("checking input field", () => {
  test("input value is updated correctly", () => {
    render(<Home />, container);

    const input = screen.getByRole("textbox");
    UserEvent.type(input, "React");

    expect(input.value).toBe("React");
  });
});
