import React from "react";
import { shallow } from "enzyme";
import MapView from "./MapView";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, getByRole } from "@testing-library/react";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Map view componet", () => {
  it("Should render without errors", () => {});
  act(() => {
    render(<MapView />, container);
  });
});

it("Button render", () => {
  const button = document.querySelector("[data-testid=button]");
  expect(button.innerHTML).toBe("Go Back");
});
