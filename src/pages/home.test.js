import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("h1 tag", () => {
  it("should render h1 tag", () => {
    shallow(<Home />);
    screen.debug();
    expect(screen.getByText("Restaurant Finder")).toBeInTheDocument();
  });
});
